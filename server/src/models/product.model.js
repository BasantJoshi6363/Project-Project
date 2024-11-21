import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Product description is required'],
        maxLength: [1000, 'Description cannot exceed 1000 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price'],
        min: [0, 'Price cannot be negative'],
        default: 0.0
    },
    category: {
        type: String,
        required: [true, 'Please select product category'],
        enum: {
            values: [
                'Electronics',
                'Clothing',
                'Food',
                'Books',
                'Others'
            ],
            message: 'Please select correct category'
        }
    },
    stock: {
        type: Number,
        required: [true, 'Please enter product stock'],
        min: [0, 'Stock cannot be negative'],
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const  Product = mongoose.model('Product', productSchema);