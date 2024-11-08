import { ProductImage } from "../models.js";
import mongoose from "mongoose";
import { promises as fs } from 'fs';
import path from 'path';

const imageStoragePath = 'C:/Users/tranh/Downloads/product-images';

const up = async () => {
    const images = [
        {
            productId: '672cf21818c76bacb3ae7440',
            buffer: await fs.readFile(path.join(imageStoragePath, '1-1.png')),
            mimetype: 'image/png',
            order: 1,
            altText: null
        },
        {
            productId: '672cf21818c76bacb3ae7440',
            buffer: await fs.readFile(path.join(imageStoragePath, '1-2.png')),
            mimetype: 'image/png',
            order: 2,
            altText: null
        },
        {
            productId: '672cf21818c76bacb3ae7440',
            buffer: await fs.readFile(path.join(imageStoragePath, '1-3.png')),
            mimetype: 'image/png',
            order: 3,
            altText: null
        },
        {
            productId: '672cf21818c76bacb3ae7440',
            buffer: await fs.readFile(path.join(imageStoragePath, '1-4.png')),
            mimetype: 'image/png',
            order: 4,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e4',
            buffer: await fs.readFile(path.join(imageStoragePath, '2-1.png')),
            mimetype: 'image/png',
            order: 1,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e4',
            buffer: await fs.readFile(path.join(imageStoragePath, '2-2.png')),
            mimetype: 'image/png',
            order: 2,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e4',
            buffer: await fs.readFile(path.join(imageStoragePath, '2-3.png')),
            mimetype: 'image/png',
            order: 3,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e5',
            buffer: await fs.readFile(path.join(imageStoragePath, '3-1.png')),
            mimetype: 'image/png',
            order: 1,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e5',
            buffer: await fs.readFile(path.join(imageStoragePath, '3-2.png')),
            mimetype: 'image/png',
            order: 2,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e5',
            buffer: await fs.readFile(path.join(imageStoragePath, '3-3.png')),
            mimetype: 'image/png',
            order: 3,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e5',
            buffer: await fs.readFile(path.join(imageStoragePath, '3-4.png')),
            mimetype: 'image/png',
            order: 4,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e5',
            buffer: await fs.readFile(path.join(imageStoragePath, '3-5.png')),
            mimetype: 'image/png',
            order: 5,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e5',
            buffer: await fs.readFile(path.join(imageStoragePath, '3-6.png')),
            mimetype: 'image/png',
            order: 6,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e5',
            buffer: await fs.readFile(path.join(imageStoragePath, '3-7.png')),
            mimetype: 'image/png',
            order: 7,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e6',
            buffer: await fs.readFile(path.join(imageStoragePath, '4-1.png')),
            mimetype: 'image/png',
            order: 1,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e6',
            buffer: await fs.readFile(path.join(imageStoragePath, '4-2.png')),
            mimetype: 'image/png',
            order: 2,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e6',
            buffer: await fs.readFile(path.join(imageStoragePath, '4-3.png')),
            mimetype: 'image/png',
            order: 3,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e6',
            buffer: await fs.readFile(path.join(imageStoragePath, '4-4.png')),
            mimetype: 'image/png',
            order: 4,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e6',
            buffer: await fs.readFile(path.join(imageStoragePath, '4-5.png')),
            mimetype: 'image/png',
            order: 5,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e6',
            buffer: await fs.readFile(path.join(imageStoragePath, '4-6.png')),
            mimetype: 'image/png',
            order: 6,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e7',
            buffer: await fs.readFile(path.join(imageStoragePath, '5-1.png')),
            mimetype: 'image/png',
            order: 1,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e7',
            buffer: await fs.readFile(path.join(imageStoragePath, '5-2.png')),
            mimetype: 'image/png',
            order: 2,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e7',
            buffer: await fs.readFile(path.join(imageStoragePath, '5-3.png')),
            mimetype: 'image/png',
            order: 3,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e7',
            buffer: await fs.readFile(path.join(imageStoragePath, '5-4.png')),
            mimetype: 'image/png',
            order: 4,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e7',
            buffer: await fs.readFile(path.join(imageStoragePath, '5-5.png')),
            mimetype: 'image/png',
            order: 5,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e7',
            buffer: await fs.readFile(path.join(imageStoragePath, '5-6.png')),
            mimetype: 'image/png',
            order: 6,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e8',
            buffer: await fs.readFile(path.join(imageStoragePath, '6-1.png')),
            mimetype: 'image/png',
            order: 1,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e8',
            buffer: await fs.readFile(path.join(imageStoragePath, '6-2.png')),
            mimetype: 'image/png',
            order: 2,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e8',
            buffer: await fs.readFile(path.join(imageStoragePath, '6-3.png')),
            mimetype: 'image/png',
            order: 3,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e8',
            buffer: await fs.readFile(path.join(imageStoragePath, '6-4.png')),
            mimetype: 'image/png',
            order: 4,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e9',
            buffer: await fs.readFile(path.join(imageStoragePath, '7-1.png')),
            mimetype: 'image/png',
            order: 1,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8e9',
            buffer: await fs.readFile(path.join(imageStoragePath, '7-2.png')),
            mimetype: 'image/png',
            order: 2,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8ea',
            buffer: await fs.readFile(path.join(imageStoragePath, '8-1.png')),
            mimetype: 'image/png',
            order: 1,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8ea',
            buffer: await fs.readFile(path.join(imageStoragePath, '8-2.png')),
            mimetype: 'image/png',
            order: 2,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8eb',
            buffer: await fs.readFile(path.join(imageStoragePath, '9-1.png')),
            mimetype: 'image/png',
            order: 1,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8eb',
            buffer: await fs.readFile(path.join(imageStoragePath, '9-2.png')),
            mimetype: 'image/png',
            order: 2,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8eb',
            buffer: await fs.readFile(path.join(imageStoragePath, '9-3.png')),
            mimetype: 'image/png',
            order: 3,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8eb',
            buffer: await fs.readFile(path.join(imageStoragePath, '9-4.png')),
            mimetype: 'image/png',
            order: 4,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8ec',
            buffer: await fs.readFile(path.join(imageStoragePath, '10-1.png')),
            mimetype: 'image/png',
            order: 1,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8ec',
            buffer: await fs.readFile(path.join(imageStoragePath, '10-2.png')),
            mimetype: 'image/png',
            order: 2,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8ec',
            buffer: await fs.readFile(path.join(imageStoragePath, '10-3.png')),
            mimetype: 'image/png',
            order: 3,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8ed',
            buffer: await fs.readFile(path.join(imageStoragePath, '11-1.png')),
            mimetype: 'image/png',
            order: 1,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8ed',
            buffer: await fs.readFile(path.join(imageStoragePath, '11-2.png')),
            mimetype: 'image/png',
            order: 2,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8ed',
            buffer: await fs.readFile(path.join(imageStoragePath, '11-3.png')),
            mimetype: 'image/png',
            order: 3,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8ee',
            buffer: await fs.readFile(path.join(imageStoragePath, '12-1.png')),
            mimetype: 'image/png',
            order: 1,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8ee',
            buffer: await fs.readFile(path.join(imageStoragePath, '12-2.png')),
            mimetype: 'image/png',
            order: 2,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8ee',
            buffer: await fs.readFile(path.join(imageStoragePath, '12-3.png')),
            mimetype: 'image/png',
            order: 3,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8ef',
            buffer: await fs.readFile(path.join(imageStoragePath, '13-1.png')),
            mimetype: 'image/png',
            order: 1,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8ef',
            buffer: await fs.readFile(path.join(imageStoragePath, '13-2.png')),
            mimetype: 'image/png',
            order: 2,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8ef',
            buffer: await fs.readFile(path.join(imageStoragePath, '13-3.png')),
            mimetype: 'image/png',
            order: 3,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8ef',
            buffer: await fs.readFile(path.join(imageStoragePath, '13-4.png')),
            mimetype: 'image/png',
            order: 4,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f0',
            buffer: await fs.readFile(path.join(imageStoragePath, '14-1.png')),
            mimetype: 'image/png',
            order: 1,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f0',
            buffer: await fs.readFile(path.join(imageStoragePath, '14-2.png')),
            mimetype: 'image/png',
            order: 2,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f0',
            buffer: await fs.readFile(path.join(imageStoragePath, '14-3.png')),
            mimetype: 'image/png',
            order: 3,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f0',
            buffer: await fs.readFile(path.join(imageStoragePath, '14-4.png')),
            mimetype: 'image/png',
            order: 4,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f0',
            buffer: await fs.readFile(path.join(imageStoragePath, '14-5.png')),
            mimetype: 'image/png',
            order: 5,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f1',
            buffer: await fs.readFile(path.join(imageStoragePath, '15-1.png')),
            mimetype: 'image/png',
            order: 1,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f1',
            buffer: await fs.readFile(path.join(imageStoragePath, '15-2.png')),
            mimetype: 'image/png',
            order: 2,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f2',
            buffer: await fs.readFile(path.join(imageStoragePath, '16-1.png')),
            mimetype: 'image/png',
            order: 1,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f2',
            buffer: await fs.readFile(path.join(imageStoragePath, '16-2.png')),
            mimetype: 'image/png',
            order: 2,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f2',
            buffer: await fs.readFile(path.join(imageStoragePath, '16-3.png')),
            mimetype: 'image/png',
            order: 3,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f3',
            buffer: await fs.readFile(path.join(imageStoragePath, '17-1.png')),
            mimetype: 'image/png',
            order: 1,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f3',
            buffer: await fs.readFile(path.join(imageStoragePath, '17-2.png')),
            mimetype: 'image/png',
            order: 2,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f3',
            buffer: await fs.readFile(path.join(imageStoragePath, '17-3.png')),
            mimetype: 'image/png',
            order: 3,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f3',
            buffer: await fs.readFile(path.join(imageStoragePath, '17-4.png')),
            mimetype: 'image/png',
            order: 4,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f4',
            buffer: await fs.readFile(path.join(imageStoragePath, '18-1.png')),
            mimetype: 'image/png',
            order: 1,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f4',
            buffer: await fs.readFile(path.join(imageStoragePath, '18-2.png')),
            mimetype: 'image/png',
            order: 2,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f4',
            buffer: await fs.readFile(path.join(imageStoragePath, '18-3.png')),
            mimetype: 'image/png',
            order: 3,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f5',
            buffer: await fs.readFile(path.join(imageStoragePath, '19-1.png')),
            mimetype: 'image/png',
            order: 1,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f5',
            buffer: await fs.readFile(path.join(imageStoragePath, '19-2.png')),
            mimetype: 'image/png',
            order: 2,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f5',
            buffer: await fs.readFile(path.join(imageStoragePath, '19-3.png')),
            mimetype: 'image/png',
            order: 3,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f5',
            buffer: await fs.readFile(path.join(imageStoragePath, '19-4.png')),
            mimetype: 'image/png',
            order: 4,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f5',
            buffer: await fs.readFile(path.join(imageStoragePath, '19-5.png')),
            mimetype: 'image/png',
            order: 5,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f6',
            buffer: await fs.readFile(path.join(imageStoragePath, '20-1.png')),
            mimetype: 'image/png',
            order: 1,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f6',
            buffer: await fs.readFile(path.join(imageStoragePath, '20-2.png')),
            mimetype: 'image/png',
            order: 2,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f6',
            buffer: await fs.readFile(path.join(imageStoragePath, '20-3.png')),
            mimetype: 'image/png',
            order: 3,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f6',
            buffer: await fs.readFile(path.join(imageStoragePath, '20-4.png')),
            mimetype: 'image/png',
            order: 4,
            altText: null
        },
        {
            productId: '672cf37d408d47bba322d8f6',
            buffer: await fs.readFile(path.join(imageStoragePath, '20-5.png')),
            mimetype: 'image/png',
            order: 5,
            altText: null
        },
    ]
    await ProductImage.create(images);
}

const down = async () => {
    await mongoose.connection.collection('ProductImage').drop();
}

const update = async () => {
    await down();
    await up();
}

export default { up, down, update };