import mongoose from "mongoose";

const initProduct = () => {
    const schema = new mongoose.Schema({
        name: { type: String, required: true },
        category: { type: String, required: false },

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
    schema.index({ name: 'text', brand: 'text', tag: 'text' });
    return mongoose.model('Product', schema, 'Product');
}

const initProductImage = () => {
    const schema = new mongoose.Schema({
        productId: { type: String, required: true },
        buffer: { type: Buffer, required: true },
        mimetype: { type: String, required: true },
        order: { type: Number, required: true },
        altText: { type: String, required: false }
    });
    return mongoose.model('ProductImage', schema, 'ProductImage');
}

const initCart = () => {
    const schema = new mongoose.Schema({
        productId: { type: String, required: true },
        userId: { type: String, required: true },
        quanity: { type: Number, required: true }
    });
    return mongoose.model('Cart', schema, 'Cart');
}

const initSoldProduct = () => {
    const schema = new mongoose.Schema({
        productId: { type: String, required: true },
        userId: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        saleDate: { type: Date, required: true }
    });
    return mongoose.model('SoldProduct', schema, 'SoldProduct');
}

const initProductReview = () => {
    const schema = new mongoose.Schema({
        productId: { type: String, required: true },
        userId: { type: String, required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: false },
        reviewDate: { type: Date, required: true }
    });
    return mongoose.model('ProductReview', schema, 'ProductReview');
}

const initUser = () => {
    const schema = new mongoose.Schema({
        email: { type: String, required: true },
        phone: { type: String, required: true },
        password: { type: String, required: true },
        fullName: { type: String, required: true },
        address: { type: String, required: false },
        role: { type: String, required: true }
    });
    schema.index({ email: 'text', fullName: 'text', address: 'text' });
    return mongoose.model('User', schema, 'User');
}

const initToken = () => {
    const schema = new mongoose.Schema({
        userId: { type: String, required: true },
        accessToken: { type: String, required: true },
        refreshToken: { type: String, required: true }
    });
    return mongoose.model('Token', schema, 'Token')
}

export const Product = initProduct();
export const ProductImage = initProductImage();
export const Cart = initCart();
export const SoldProduct = initSoldProduct();
export const ProductReview = initProductReview();
export const User = initUser();
export const Token = initToken();