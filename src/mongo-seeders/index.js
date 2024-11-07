import productSeeder from './product.js';
import soldProductSeeder from './sold-product.js';

const seeders = [productSeeder, soldProductSeeder];

const up = async () => {
    for (const seeder of seeders)
        await seeder.up();
};

const down = async () => {
    for (const seeder of seeders)
        await seeder.down();
};

const update = async () => {
    for (const seeder of seeders)
        await seeder.update();
};

export default { up, down, update }