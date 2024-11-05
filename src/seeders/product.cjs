'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.sequelize.query('ALTER TABLE Products AUTO_INCREMENT = 1');

        return queryInterface.bulkInsert('Products', [
            {
                // 1
                name: 'Xe điều khiển 1:24 Lamborghini Aventador SVJ màu Vàng RASTAR R96100',
                description: '',
                price: 479000,
                brand: 'Rastar',
                suitableAge: 6,
                tag: 'new',
                discountId: null,
                createdAt: new Date(2024, 9, 10, 0, 0, 0),
                updatedAt: new Date(2024, 9, 10, 0, 0, 0)
            },
            {
                // 2
                name: 'Đồ chơi trực thăng Avatar VECTO VTYD-718',
                description: '',
                price: 999000,
                brand: 'Vector',
                suitableAge: 8,
                tag: 'new',
                discountId: null,
                createdAt: new Date(2024, 9, 10, 0, 0, 0),
                updatedAt: new Date(2024, 9, 10, 0, 0, 0)
            },
            {
                // 3
                name: 'Đồ chơi lắp ráp Rồng nguyên tố đối đầu chiến giáp đế vương LEGO NINJAGO 71796',
                description: '',
                price: 2309000,
                brand: 'Lego Ninjago',
                suitableAge: 9,
                tag: null,
                discountId: null,
                createdAt: new Date(2024, 9, 10, 0, 0, 0),
                updatedAt: new Date(2024, 9, 10, 0, 0, 0)
            },
            {
                // 4
                name: 'Đồ chơi lắp ráp Tàu thám hiểm bắc cực LEGO CITY 60368',
                description: '',
                price: 3275000,
                brand: 'Lego City',
                suitableAge: 7,
                tag: null,
                discountId: null,
                createdAt: new Date(2024, 9, 10, 0, 0, 0),
                updatedAt: new Date(2024, 9, 10, 0, 0, 0)
            },
            {
                // 5
                name: 'Vali nhà bếp di động 3 trong 1 SWEET HEART SH8121',
                description: '',
                price: 659000,
                brand: 'Sweet Heart',
                suitableAge: 3,
                tag: 'hot',
                discountId: null,
                createdAt: new Date(2024, 9, 10, 0, 0, 0),
                updatedAt: new Date(2024, 9, 10, 0, 0, 0)
            },
            {
                // 6
                name: 'Bộ đồ chơi bác sĩ BATTAT BT2537Z',
                description: '',
                price: 439000,
                brand: 'Battat',
                suitableAge: 3,
                tag: 'hot',
                discountId: null,
                createdAt: new Date(2024, 9, 10, 0, 0, 0),
                updatedAt: new Date(2024, 9, 10, 0, 0, 0)
            },
            {
                // 7
                name: 'Thú nhồi bông Mũ phù thủy ánh sao AMONG US AMU10910',
                description: '',
                price: 329000,
                brand: 'Among Us',
                suitableAge: 6,
                tag: null,
                discountId: null,
                createdAt: new Date(2024, 9, 10, 0, 0, 0),
                updatedAt: new Date(2024, 9, 10, 0, 0, 0)
            },
            {
                // 8
                name: 'Chim Cánh Cụt Con IWAYA 3243-1VN/JS',
                description: '',
                price: 399000,
                brand: 'Iwaya',
                suitableAge: 8,
                tag: null,
                discountId: null,
                createdAt: new Date(2024, 9, 10, 0, 0, 0),
                updatedAt: new Date(2024, 9, 10, 0, 0, 0)
            },
            {
                // 9
                name: 'Bàn chơi Khúc Côn Cầu UNITED SPORT A6030',
                description: '',
                price: 834000,
                brand: 'United Sport',
                suitableAge: 3,
                tag: 'new',
                discountId: null,
                createdAt: new Date(2024, 9, 10, 0, 0, 0),
                updatedAt: new Date(2024, 9, 10, 0, 0, 0)
            },
            {
                // 10
                name: 'Bàn chơi Bi Lắc UNITED SPORT A6026',
                description: '',
                price: 834000,
                brand: 'United Sport',
                suitableAge: 3,
                tag: 'new',
                discountId: null,
                createdAt: new Date(2024, 9, 10, 0, 0, 0),
                updatedAt: new Date(2024, 9, 10, 0, 0, 0)
            },
            {
                // 11
                name: 'Xe đạp trẻ em Royal Baby Flying Bear 16 inch Màu Vàng RB16B-9',
                description: '',
                price: 3114000,
                brand: 'Bike',
                suitableAge: 4,
                tag: 'hot',
                discountId: null,
                createdAt: new Date(2024, 9, 20, 0, 0, 0),
                updatedAt: new Date(2024, 9, 20, 0, 0, 0)
            },
            {
                // 12
                name: 'Xe đạp trẻ em Royal Baby Freestyle 18 inch Màu Đỏ RB18B-6',
                description: '',
                price: 3018000,
                brand: 'Bike',
                suitableAge: 5,
                tag: 'hot',
                discountId: null,
                createdAt: new Date(2024, 9, 20, 0, 0, 0),
                updatedAt: new Date(2024, 9, 20, 0, 0, 0)
            },
            {
                // 13
                name: 'Patin Neon Inline Yvolution xanh dương NT07B4-size 4-7 tuổi',
                description: '',
                price: 1521000,
                brand: 'Scooter',
                suitableAge: 4,
                tag: null,
                discountId: null,
                createdAt: new Date(2024, 9, 20, 0, 0, 0),
                updatedAt: new Date(2024, 9, 20, 0, 0, 0)
            },
            {
                // 14
                name: 'Xe Scooter 2 bánh Neon Vector Yvolution NT05B2 xanh dương',
                description: '',
                price: 1279000,
                brand: 'Scooter',
                suitableAge: 8,
                tag: null,
                discountId: null,
                createdAt: new Date(2024, 9, 20, 0, 0, 0),
                updatedAt: new Date(2024, 9, 20, 0, 0, 0)
            },
            {
                // 15
                name: 'Đồ chơi Robot bạch tuộc 3 chân điều khiển từ xa (đen) VECTO VT6035',
                description: '',
                price: 600000,
                brand: 'Vector',
                suitableAge: 3,
                tag: 'hot',
                discountId: null,
                createdAt: new Date(2024, 9, 20, 0, 0, 0),
                updatedAt: new Date(2024, 9, 20, 0, 0, 0)
            },
            {
                // 16
                name: 'Siêu Robot biến hình TOBOT CYCLONE HAWK thủ lĩnh bầu trời TOBOT 301110',
                description: '',
                price: 699000,
                brand: 'Tobot',
                suitableAge: 3,
                tag: 'hot',
                discountId: null,
                createdAt: new Date(2024, 9, 20, 0, 0, 0),
                updatedAt: new Date(2024, 9, 20, 0, 0, 0)
            },
            {
                // 17
                name: 'Xe tập đi 3 trong 1 PEEK A BOO EU461542',
                description: '',
                price: 1189000,
                brand: 'Peek A Boo',
                suitableAge: 1,
                tag: null,
                discountId: null,
                createdAt: new Date(2024, 9, 20, 0, 0, 0),
                updatedAt: new Date(2024, 9, 20, 0, 0, 0)
            },
            {
                // 18
                name: 'Đồ chơi nhận dạng hình khối FISHER PRICE MATTEL FFC84',
                description: '',
                price: 299000,
                brand: 'Fisher Price Mattel',
                suitableAge: 1,
                tag: null,
                discountId: null,
                createdAt: new Date(2024, 9, 20, 0, 0, 0),
                updatedAt: new Date(2024, 9, 20, 0, 0, 0)
            },
            {
                // 19
                name: 'Đồ Chơi Lắp Ráp Bộ Sưu Tập Hoa Xương Rồng LEGO BOTANICALS 10329 (758 chi tiết)',
                description: '',
                price: 1147000,
                brand: 'Lego Botanicals',
                suitableAge: 18,
                tag: null,
                discountId: null,
                createdAt: new Date(2024, 9, 20, 0, 0, 0),
                updatedAt: new Date(2024, 9, 20, 0, 0, 0)
            },
            {
                // 20
                name: 'Đồ Chơi Lắp Ráp Hoa Khô Trang Trí Lego LEGO BOTANICALS 10314 (812 chi tiết)',
                description: '',
                price: 983000,
                brand: 'Lego Botanicals',
                suitableAge: 18,
                tag: null,
                discountId: null,
                createdAt: new Date(2024, 9, 20, 0, 0, 0),
                updatedAt: new Date(2024, 9, 20, 0, 0, 0)
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Products', null, {});
    }
};

