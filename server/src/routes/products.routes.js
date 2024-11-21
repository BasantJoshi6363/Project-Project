import express from 'express';
import {
    createProduct,
    getAllProducts,
    getProductDetails,
    updateProduct,
    deleteProduct
} from '../controllers/products.controller.js';

const productRouter = express.Router();

productRouter.route('/products').get(getAllProducts);
productRouter.route('/product/new').post(createProduct);
productRouter.route('/product/:id')
    .get(getProductDetails)
    .put(updateProduct)
    .delete(deleteProduct);

export default productRouter;