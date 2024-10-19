'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await this.down(queryInterface, Sequelize);
        await queryInterface.sequelize.query('ALTER TABLE ProductReviews AUTO_INCREMENT = 1');

        return queryInterface.bulkInsert('ProductReviews', [
            {
                productId: null,
                userId: null,
                rating: 5,
                comment: 'Món đồ chơi này rất hay, con tôi rất thích nó.',
                reviewDate: new Date(Date.now()),
                sellerRespone: 'Cảm ơn sự đánh giá của bạn, chúng tôi vẫn sẽ cố gắng đưa đến cho quý khách những sản phẩm chất lượng nhất.',
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: null,
                userId: null,
                rating: 5,
                comment: 'Đồ chơi này rất phù hợp cho sự phát triển của trẻ nhỏ.',
                reviewDate: new Date(Date.now()),
                sellerRespone: 'Cảm ơn sự đánh giá của bạn. Những sản phẩm đến tay khách hàng của chúng tôi đã trải qua những kiểm định nghiêm ngặt về chất lượng và xác định phù hợp với nhu cầu của từng đối tượng.',
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: null,
                userId: null,
                rating: 5,
                comment: 'Nay săn được đồ chơi đúng ý mà còn rẻ nữa! Con tôi rất thích món đồ chơi mẫu như vầy nhưng ngoài thị trường giá cao quá. Tôi đã tìm đến đây, nhiều đồ chơi khuyến mãi hợp túi tiền!',
                reviewDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
                sellerRespone: null,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: null,
                userId: null,
                rating: 5,
                comment: 'Sản phẩm đẹp, đóng gói kỹ càng. Tôi sẽ mua thêm nhiều đồ chơi ở đây để tặng con nhân dịp sinh nhật.',
                reviewDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
                sellerRespone: null,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: null,
                userId: null,
                rating: 4,
                comment: 'Đồ chơi rất hay, nhưng thường xuyên hết hàng. Tôi đã cố gắng theo dõi mãi mới mua được.',
                reviewDate: new Date(Date.now()),
                sellerRespone: 'Cảm ơn sự đánh giá của bạn. Chúng tôi sẽ cố gắng nhập nhiều mặt hàng hơn để không xảy ra điều này với khách hàng nữa.',
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: null,
                userId: null,
                rating: 4,
                comment: 'Con tôi trông mong mãi món đồ chơi này. Tôi muốn tặng nó cho con vào dịp sinh nhật nhưng giao hàng lâu quá. May mắn là nó vẫn được giao đến kịp.',
                reviewDate: new Date(Date.now()),
                sellerRespone: 'Ôi không, chúng tôi một chút nữa làm thất vọng quý khách. Chúng tôi sẽ chấn chỉnh lại bộ phận chuyển hàng, mong quý khách bỏ qua và vẫn tiếp tục mua hàng ở chúng tôi.',
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: null,
                userId: null,
                rating: 4,
                comment: null,
                reviewDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
                sellerRespone: 'Cảm ơn đánh giá của quý khách. Để nâng cao trải nghiệm, xin hãy cho chúng tôi biết cảm nhận của quý khách về dịch vụ và về sản phẩm này.',
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: null,
                userId: null,
                rating: 4,
                comment: 'Sản phẩm đẹp và bắt mắt, nhưng tôi gặp khó khăn khi kiểm tra về chất liệu, nguồn gốc xuất xứ của sản phẩm này.',
                reviewDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
                sellerRespone: 'Cảm ơn góp ý của quý khách. Chúng tôi sẽ tìm cách liên lạc với quý khách để tư vấn, giải thích về nguồn gốc xuất xứ của sản phẩm. Chúng tôi cam đoan sản phẩm chính hãng, chất lượng!',
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: null,
                userId: null,
                rating: 3,
                comment: null,
                reviewDate: new Date(Date.now()),
                sellerRespone: null,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: null,
                userId: null,
                rating: 3,
                comment: null,
                reviewDate: new Date(Date.now()),
                sellerRespone: 'Xin lỗi quý khách! Quý khách có trải nghiệm không tốt nào với sản phẩm, chúng tôi sẽ dần cải thiện.',
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: null,
                userId: null,
                rating: 3,
                comment: 'Đồ chơi đẹp, hay. Giá còn khá đắt.',
                reviewDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                sellerRespone: 'Cảm ơn góp ý của bạn. Chúng tôi sẽ đưa ra nhiều chương trình khuyến mãi hơn nữa.',
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: null,
                userId: null,
                rating: 2,
                comment: 'Cửa hàng đã giao thiếu cho tôi sách hướng dẫn sử dụng của sản phẩm này.',
                reviewDate: new Date(Date.now()),
                sellerRespone: null,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: null,
                userId: null,
                rating: 2,
                comment: null,
                reviewDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                sellerRespone: '',
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: null,
                userId: null,
                rating: 1,
                comment: 'Cửa hàng đã giao nhầm mẫu sản phẩm cho tôi. Mong cửa hàng nhanh chóng khắc phục.',
                reviewDate: new Date(Date.now()),
                sellerRespone: 'Xin lỗi vì sự nhầm lẫn này. Chúng tôi đang làm thủ tục để nhanh chóng đổi lại hàng cho quý khách.',
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: null,
                userId: null,
                rating: 1,
                comment: 'Tôi không thích mặt hàng này.',
                reviewDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
                sellerRespone: 'Xin lỗi vì trải nghiệm không tốt này. Chúng tôi sẽ tư vấn cho quý khách thủ tục đổi trả sản phẩm.',
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('ProductReviews', null, {});
    }
};