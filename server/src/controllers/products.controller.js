import {Product} from '../models/product.model.js';

// Functional component for creating a product
export const createProduct = async (req, res) => {
    try {
        const createProductService = async (productData) => {
            return await Product.create(productData);
        };

        const product = await createProductService(req.body);
        
        res.status(201).json({
            success: true,
            product
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Functional component for getting all products
export const getAllProducts = async (req, res) => {
    try {
        const getProductsService = async () => {
            return await Product.find();
        };

        const products = await getProductsService();
        
        res.status(200).json({
            success: true,
            count: products.length,
            products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
};

// Functional component for getting single product details
export const getProductDetails = async (req, res) => {
    try {
        const getProductByIdService = async (id) => {
            return await Product.findById(id);
        };

        const product = await getProductByIdService(req.params.id);
        
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }

        res.status(200).json({
            success: true,
            product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
};

// Functional component for updating a product
export const updateProduct = async (req, res) => {
    try {
        const updateProductService = async (id, updateData) => {
            return await Product.findByIdAndUpdate(id, updateData, {
                new: true,
                runValidators: true
            });
        };

        const product = await updateProductService(req.params.id, req.body);
        
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }

        res.status(200).json({
            success: true,
            product
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Functional component for deleting a product
export const deleteProduct = async (req, res) => {
    try {
        const deleteProductService = async (id) => {
            const product = await Product.findById(id);
            if (product) {
                await product.deleteOne();
                return true;
            }
            return false;
        };

        const isDeleted = await deleteProductService(req.params.id);
        
        if (!isDeleted) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Product deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
};