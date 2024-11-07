import mongoose from "mongoose";

const initProduct = () => {
    const product = new mongoose.Schema({
        _id: { type: Number, required: true },
        name: { type: String, required: true },
        categories: { type: Array, required: false },

        discount: { type: Object, required: false },
        price: { type: Number, required: true },
        stock: { type: Number, required: true },
        isSale: { type: Boolean, default: true },

        images: { type: Array, required: false },
        description: { type: String, required: false },
        brand: { type: String, required: false },
        suitableAge: { type: Number, required: false },
        tag: { type: String, required: false }
    });
    product.index({ name: 'text', brand: 'text', tag: 'text' });
    return mongoose.model('Product', product);
}

const initCart = () => {
    const cart = new mongoose.Schema({
        productId: { type: String, required: true },
        userId: { type: String, required: true },
        quanity: { type: Number, required: true }
    });
    return mongoose.model('Cart', cart);
}

const initSoldProduct = () => {
    const soldProduct = new mongoose.Schema({
        productId: { type: Number, required: true },
        userId: { type: Number, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        saleDate: { type: Date, required: true }
    });
    return mongoose.model('SoldProduct', soldProduct);
}

const initProductReview = () => {
    const productReview = new mongoose.Schema({
        productId: { type: String, required: true },
        userId: { type: String, required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: false },
        reviewDate: { type: Date, required: true }
    });
    return mongoose.model('ProductReview', productReview);
}

const initUser = () => {
    const user = new mongoose.Schema({
        email: { type: String, required: true },
        phone: { type: String, required: true },
        password: { type: String, required: true },
        fullName: { type: String, required: true },
        role: { type: String, required: true }
    });
    return mongoose.model('User', user);
}

const initToken = () => {
    const token = new mongoose.Schema({
        userId: { type: String, required: true },
        accessToken: { type: String, required: true },
        refreshToken: { type: String, required: true }
    });
    return mongoose.model('Token', token)
}

export const Product = initProduct();
export const Cart = initCart();
export const SoldProduct = initSoldProduct();
export const ProductReview = initProductReview();
export const User = initUser();
export const Token = initToken();