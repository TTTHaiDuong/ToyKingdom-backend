import productSeeder from './product.js';
import soldProductSeeder from './sold-product.js';
import userSeeder from './user.js'
import mongoose from 'mongoose';

const seeders = [productSeeder, soldProductSeeder, userSeeder];

const up = async () => {
    for (const seeder of seeders)
        await seeder.up();
};

const down = async () => {
    for (const seeder of seeders)
        await seeder.down();
};

const update = async () => {
    await down();
    await up();
};

export default { up, down, update }