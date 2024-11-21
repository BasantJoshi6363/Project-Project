import jwt from 'jsonwebtoken';
import User from '../models/users.models.js';

// Verify JWT token middleware
export const verifyToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: 'Authorization token required'
            });
        }

        const token = authHeader.split(' ')[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            
            // Check if user still exists
            const currentUser = await User.findById(decoded.userId).select('-password');
            if (!currentUser) {
                return res.status(401).json({
                    success: false,
                    message: 'User no longer exists'
                });
            }

            // Check if user is active
            if (currentUser.status !== 'active') {
                return res.status(401).json({
                    success: false,
                    message: 'User account is not active'
                });
            }

            // Add user to request object
            req.user = currentUser;
            next();
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: 'Invalid token'
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error verifying token',
            error: error.message
        });
    }
};

// Admin authorization middleware
export const verifyAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({
            success: false,
            message: 'Access denied. Admin privileges required'
        });
    }
};

// Optional authentication middleware
export const optionalAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return next();
        }

        const token = authHeader.split(' ')[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const currentUser = await User.findById(decoded.userId).select('-password');
            
            if (currentUser && currentUser.status === 'active') {
                req.user = currentUser;
            }
        } catch (error) {
            // Don't throw error, just continue without user
        }
        
        next();
    } catch (error) {
        next();
    }
};

// Rate limiting middleware
export const rateLimiter = (limit, timeWindow) => {
    const requests = new Map();
    
    return (req, res, next) => {
        const ip = req.ip;
        const now = Date.now();
        
        if (requests.has(ip)) {
            const userData = requests.get(ip);
            const { count, firstRequest } = userData;
            
            if (now - firstRequest > timeWindow) {
                requests.set(ip, { count: 1, firstRequest: now });
                next();
            } else if (count >= limit) {
                res.status(429).json({
                    success: false,
                    message: 'Too many requests, please try again later'
                });
            } else {
                userData.count++;
                next();
            }
        } else {
            requests.set(ip, { count: 1, firstRequest: now });
            next();
        }
    };
};