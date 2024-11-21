import express from "express"
import {
    addToCart,
    updateCartItem,
    removeFromCart,
    getCart,
    clearCart
} from '../controllers/carts.controller.js';

const cartRouter = express.Router();

cartRouter.post('/add', addToCart);
cartRouter.put('/update', updateCartItem);
cartRouter.delete('/remove/:productId', removeFromCart);
cartRouter.get('/', getCart);
cartRouter.delete('/clear', clearCart);

export default cartRouter;
