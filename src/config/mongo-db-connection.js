import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.CONNECTION_STRING, {
            serverSelectionTimeoutMS: 20000,
            connectTimeoutMS: 60000,
            socketTimeoutMS: 60000
        });
        console.log('\x1b[32m%s\x1b[0m', `[MongoDB] connected: ${connection.connection.host}`);
    }
    catch (err) {
        console.error(err);
    }
}

export default connectDB;