import express from 'express';
import { verifyToken } from '../utils/auth.middlewares.js';
import { verifyAdmin } from '../utils/auth.middlewares.js';
import {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    login,
    getCurrentUser,
    changePassword,
    forgotPassword,
    resetPassword
} from '../controllers/users.controller.js';



const router = express.Router();

// Auth routes
router.post('/auth/login', login);
router.post('/auth/forgot-password', forgotPassword);
router.post('/auth/reset-password', resetPassword);

// Protected auth routes
router.get('/auth/me', verifyToken, getCurrentUser);
router.put('/auth/change-password', verifyToken, changePassword);

// User routes - Public
router.post('/users', createUser);

// User routes - Protected
router.get('/users', verifyToken, verifyAdmin, getAllUsers);
router.get('/users/:id', verifyToken, getUser);
router.put('/users/:id', verifyToken, updateUser);
router.delete('/users/:id', verifyToken, verifyAdmin, deleteUser);

export default router;