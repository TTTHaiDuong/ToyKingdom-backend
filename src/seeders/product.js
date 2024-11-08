import { Product } from "../models.js";
import mongoose from "mongoose";

const up = async () => {
    const data = [
        {
            // 1
            _id: new mongoose.Types.ObjectId('672cf21818c76bacb3ae7440'),
            name: 'Xe điều khiển 1:24 Lamborghini Aventador SVJ màu Vàng RASTAR R96100',
            category: 'Đồ chơi cầm tay',

            discount: null,
            price: 479000,
            stock: 20,
            isSale: true,

            description:
                `Trải nghiệm tốc độ và phong cách với Xe điều khiển 1:24 Lamborghini Aventador SVJ màu Vàng RASTAR R96100! Được chế tác tỉ mỉ từ hãng RASTAR, mô hình xe này mô phỏng chính xác siêu xe Lamborghini Aventador SVJ nổi tiếng, mang đậm vẻ ngoài thể thao và sang trọng. Với tỷ lệ 1:24, xe được thiết kế chi tiết từ đèn pha đến lưới tản nhiệt và thân xe sơn màu vàng nổi bật.
                
                Sản phẩm sử dụng hệ thống điều khiển từ xa tiện lợi, cho phép bạn dễ dàng điều khiển xe tiến, lùi, rẽ trái và rẽ phải. Xe có tốc độ ổn định và khả năng điều khiển nhạy bén, phù hợp cho các bé yêu thích xe thể thao hoặc người đam mê sưu tầm. Với kiểu dáng mạnh mẽ, màu sắc nổi bật, RASTAR R96100 là món quà hoàn hảo cho bất kỳ ai yêu thích siêu xe điều khiển từ xa.
                
                Đặc điểm nổi bật:
                
                Tỷ lệ: 1:24
                Màu sắc: Vàng nổi bật
                Đầy đủ chức năng điều khiển từ xa
                Chất liệu bền đẹp, mô phỏng chi tiết cao
                Phù hợp cho trẻ em và người lớn
                Sẵn sàng tăng tốc và thể hiện phong cách của bạn với chiếc Lamborghini Aventador SVJ phiên bản điều khiển này!`,

            brand: 'Rastar',
            suitableAge: 6,
            tag: 'new'
        },
        {
            // 2
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8e4'),
            name: 'Đồ chơi trực thăng Avatar VECTO VTYD-718',
            category: 'Đồ chơi cầm tay',

            discount: null,
            price: 999000,
            stock: 20,
            isSale: true,

            description:
                `Khám phá bầu trời với Đồ chơi trực thăng Avatar VECTO VTYD-718 – mẫu trực thăng điều khiển từ xa lấy cảm hứng từ thế giới viễn tưởng, đem lại trải nghiệm bay lượn thú vị và sống động. Sản phẩm được thiết kế gọn nhẹ với hình dáng hiện đại và màu sắc nổi bật, thu hút sự chú ý ngay từ cái nhìn đầu tiên.
                
                Avatar VECTO VTYD-718 được trang bị cánh quạt kép và hệ thống ổn định tiên tiến, giúp bay mượt mà và dễ dàng điều khiển, phù hợp cho cả người mới bắt đầu và người chơi giàu kinh nghiệm. Với tính năng cất cánh, hạ cánh và giữ độ cao ổn định, chiếc trực thăng này mang đến cảm giác điều khiển chân thực như một phi công thực thụ.
                
                Đặc điểm nổi bật:
                
                Hệ thống điều khiển từ xa nhạy bén
                Trang bị cánh quạt kép cho độ ổn định cao
                Khả năng giữ độ cao ổn định, dễ điều khiển
                Thiết kế bền bỉ, chống va đập tốt
                Phù hợp cho trẻ em và người lớn yêu thích khám phá
                Cùng Avatar VECTO VTYD-718 chinh phục bầu trời và tận hưởng những giây phút giải trí hấp dẫn!`,

            brand: 'Vector',
            suitableAge: 8,
            tag: 'new'
        },
        {
            // 3
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8e5'),
            name: 'Đồ chơi lắp ráp Rồng nguyên tố đối đầu chiến giáp đế vương LEGO NINJAGO 71796',
            category: 'Đồ chơi Lego',

            discount: null,
            price: 2309000,
            stock: 20,
            isSale: true,

            description:
                `Tham gia vào cuộc chiến kịch tính và huyền bí với Đồ chơi lắp ráp Rồng nguyên tố đối đầu chiến giáp đế vương LEGO NINJAGO 71796! Bộ LEGO đặc biệt này mở ra thế giới NINJAGO với trận chiến đầy thách thức giữa các chiến binh ninja và các thế lực đen tối. Với hàng trăm mảnh ghép chi tiết, người chơi có thể lắp ráp một chú rồng nguyên tố dũng mãnh, sở hữu cánh rộng, móng vuốt sắc bén và sức mạnh vượt trội.
                
                Bên cạnh đó, bộ Chiến Giáp Đế Vương đồ sộ, mạnh mẽ là đối thủ đáng gờm của rồng nguyên tố, mang lại cảm giác hồi hộp trong từng khoảnh khắc. Bộ sản phẩm bao gồm nhiều nhân vật ninja, vũ khí và phụ kiện đa dạng, cho phép bạn tái hiện các trận đấu hoành tráng hoặc sáng tạo nên những câu chuyện phiêu lưu đầy ly kỳ.
                
                Đặc điểm nổi bật:
                
                Bao gồm rồng nguyên tố và chiến giáp đế vương với thiết kế chi tiết, hoành tráng
                Hàng trăm mảnh ghép giúp phát triển tư duy và kỹ năng lắp ráp
                Kèm theo các nhân vật ninja, vũ khí và phụ kiện độc đáo
                Tạo nên những màn giao đấu nghẹt thở, giàu tính tưởng tượng
                Phù hợp cho trẻ em yêu thích NINJAGO và người đam mê sưu tập LEGO
                LEGO NINJAGO 71796 không chỉ là bộ đồ chơi mà còn là hành trình khám phá thế giới huyền bí và rèn luyện kỹ năng của những ninja thực thụ. Sẵn sàng lắp ráp và lao vào trận chiến ngay hôm nay!`,

            brand: 'Lego Ninjago',
            suitableAge: 9,
            tag: null
        },
        {
            // 4
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8e6'),
            name: 'Đồ chơi lắp ráp Tàu thám hiểm bắc cực LEGO CITY 60368',
            category: 'Đồ chơi Lego',

            discount: null,
            price: 3275000,
            stock: 20,
            isSale: true,

            description:
                `Khám phá vùng đất lạnh giá và đầy bí ẩn với Đồ chơi lắp ráp Tàu thám hiểm Bắc Cực LEGO CITY 60368! Bộ LEGO này mang đến cho bạn cơ hội tham gia vào cuộc thám hiểm Bắc Cực đầy thú vị, nơi bạn sẽ đối mặt với những thử thách và khám phá những điều kỳ diệu của thiên nhiên. Với thiết kế chi tiết, bộ sản phẩm này bao gồm một chiếc tàu thám hiểm mạnh mẽ, trang bị đầy đủ các công cụ và phương tiện cần thiết để chinh phục môi trường khắc nghiệt.
                
                Tàu thám hiểm được trang bị các tính năng đặc biệt như cần cẩu, khoang chứa và các dụng cụ nghiên cứu khoa học, giúp bạn thực hiện các nhiệm vụ khám phá. Bộ sản phẩm còn đi kèm với các nhân vật thám hiểm, động vật và phụ kiện đa dạng, tạo ra những tình huống thú vị và cơ hội sáng tạo không giới hạn.
                
                Đặc điểm nổi bật:
                
                Thiết kế tàu thám hiểm mạnh mẽ, phù hợp với môi trường Bắc Cực
                Hệ thống cần cẩu và khoang chứa tiện dụng cho các hoạt động nghiên cứu
                Các nhân vật thám hiểm, động vật và phụ kiện đầy đủ
                Phát triển kỹ năng tư duy, lắp ráp và sáng tạo
                Phù hợp cho trẻ em yêu thích khoa học và khám phá
                LEGO CITY 60368 không chỉ là một món đồ chơi, mà còn là một chuyến phiêu lưu vào thế giới Bắc Cực kỳ diệu. Hãy sẵn sàng để bắt đầu cuộc thám hiểm của riêng bạn và khám phá những bí ẩn chưa từng được khám phá!`,

            brand: 'Lego City',
            suitableAge: 7,
            tag: null
        },
        {
            // 5
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8e7'),
            name: 'Vali nhà bếp di động 3 trong 1 SWEET HEART SH8121',
            category: 'Đồ chơi cầm tay',

            discount: null,
            price: 659000,
            stock: 20,
            isSale: true,

            description:
                `Mang đến cho các bé một thế giới thú vị ngay tại nhà với Vali nhà bếp di động 3 trong 1 SWEET HEART SH8121! Đây là một bộ đồ chơi đa năng, kết hợp giữa vali, nhà bếp và không gian vui chơi sáng tạo, giúp trẻ phát triển kỹ năng nấu nướng và tưởng tượng qua những trò chơi mô phỏng. Với thiết kế dễ thương và màu sắc bắt mắt, SWEET HEART SH8121 là lựa chọn hoàn hảo cho các bé yêu thích nấu ăn và khám phá thế giới ẩm thực.
                
                Vali nhà bếp di động này có thể dễ dàng mở ra để biến thành một căn bếp đầy đủ tiện nghi với các dụng cụ nấu ăn như nồi, chảo, dao, muỗng, và các món đồ chơi thực phẩm. Ngoài ra, khi đóng lại, vali có thể gọn gàng và dễ dàng mang theo, phù hợp cho các chuyến đi chơi hay cất giữ.
                
                Đặc điểm nổi bật:
                
                Thiết kế vali di động 3 trong 1 tiện dụng, có thể biến thành nhà bếp khi mở ra
                Bao gồm đầy đủ dụng cụ nấu ăn và thực phẩm mô phỏng
                Màu sắc bắt mắt, dễ thương, thu hút trẻ em
                Giúp phát triển kỹ năng sáng tạo và tư duy qua trò chơi giả lập
                Dễ dàng cất giữ và mang theo mọi lúc, mọi nơi
                Vali nhà bếp di động 3 trong 1 SWEET HEART SH8121 là món quà tuyệt vời cho các bé yêu thích nấu ăn, giúp trẻ có những giờ phút vui chơi sáng tạo và học hỏi những kỹ năng hữu ích từ sớm!`,

            brand: 'Sweet Heart',
            suitableAge: 3,
            tag: 'hot'
        },
        {
            // 6
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8e8'),
            name: 'Bộ đồ chơi bác sĩ BATTAT BT2537Z',
            category: 'Đồ chơi cầm tay',

            discount: null,
            price: 439000,
            stock: 20,
            isSale: true,

            description:
                `Khám phá thế giới chăm sóc sức khỏe cùng Bộ đồ chơi bác sĩ BATTAT BT2537Z – bộ đồ chơi mô phỏng nghề bác sĩ giúp trẻ phát triển kỹ năng giao tiếp, tư duy và sự đồng cảm qua những giờ chơi thú vị. Bộ đồ chơi này được thiết kế chi tiết với đầy đủ các dụng cụ y tế, như ống nghe, nhiệt kế, kéo, băng gạc, và nhiều phụ kiện khác, mang đến cho trẻ một trải nghiệm hoàn hảo trong việc trở thành bác sĩ thực thụ.
                
                BATTAT BT2537Z không chỉ giúp trẻ hiểu về công việc của bác sĩ mà còn khuyến khích trẻ thực hành chăm sóc sức khỏe cho bạn bè và gia đình, đồng thời phát triển sự tự tin trong việc xử lý tình huống khẩn cấp. Mỗi món đồ chơi đều được làm từ chất liệu an toàn, bền đẹp, dễ dàng cầm nắm, giúp bé thỏa sức sáng tạo và tưởng tượng.

                Đặc điểm nổi bật:
                
                Bao gồm các dụng cụ y tế như ống nghe, nhiệt kế, kéo, băng gạc
                Chất liệu an toàn, bền đẹp, phù hợp với trẻ từ 3 tuổi trở lên
                Giúp phát triển kỹ năng giao tiếp, tư duy sáng tạo và chăm sóc sức khỏe
                Màu sắc bắt mắt, dễ thương, thu hút sự chú ý của trẻ
                Phù hợp cho cả bé trai và bé gái yêu thích khám phá nghề bác sĩ
                Bộ đồ chơi bác sĩ BATTAT BT2537Z là món quà tuyệt vời cho các bé yêu thích khám phá công việc của bác sĩ, giúp trẻ không chỉ vui chơi mà còn học hỏi và phát triển nhiều kỹ năng bổ ích!`,

            brand: 'Battat',
            suitableAge: 3,
            tag: 'hot'
        },
        {
            // 7
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8e9'),
            name: 'Thú nhồi bông Mũ phù thủy ánh sao AMONG US AMU10910',
            category: 'Đồ chơi cầm tay',

            discount: null,
            price: 329000,
            stock: 20,
            isSale: true,

            description:
                `Chào đón sự pha trộn giữa sự dễ thương và huyền bí với Thú nhồi bông Mũ phù thủy ánh sao AMONG US AMU10910! Đây là món quà lý tưởng dành cho những fan hâm mộ của trò chơi nổi tiếng Among Us. Với thiết kế dễ thương, chiếc mũ phù thủy đầy ánh sao trở thành điểm nhấn đặc biệt, mang đến một vẻ ngoài vừa kỳ diệu vừa phong cách cho thú nhồi bông.
                
                Thú nhồi bông được làm từ chất liệu mềm mại, an toàn cho trẻ em, với hình dáng đáng yêu và màu sắc tươi sáng, chắc chắn sẽ là người bạn đồng hành tuyệt vời trong mọi cuộc phiêu lưu tưởng tượng của các bé. Đặc biệt, mũ phù thủy với những họa tiết ánh sao làm cho sản phẩm thêm phần độc đáo và cuốn hút.
                
                Đặc điểm nổi bật:
                
                Thiết kế dễ thương với mũ phù thủy ánh sao đặc trưng của Among Us
                Chất liệu vải mềm mại, an toàn, dễ ôm
                Kích thước vừa phải, dễ dàng mang theo và trưng bày
                Màu sắc nổi bật, thu hút sự chú ý của trẻ em
                Phù hợp cho các fan hâm mộ Among Us và những người yêu thích thú nhồi bông dễ thương
                Thú nhồi bông Mũ phù thủy ánh sao AMONG US AMU10910 là món quà tuyệt vời cho những ai yêu thích trò chơi Among Us và muốn sở hữu một sản phẩm dễ thương, mang đậm phong cách riêng. Thích hợp để làm quà tặng hoặc trang trí phòng ngủ!`,

            brand: 'Among Us',
            suitableAge: 6,
            tag: null
        },
        {
            // 8
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8ea'),
            name: 'Chim Cánh Cụt Con IWAYA 3243-1VN/JS',
            category: 'Đồ chơi cầm tay',

            discount: null,
            price: 399000,
            stock: 20,
            isSale: true,

            description:
                `Mang đến sự dễ thương và ấm áp, Chim Cánh Cụt Con IWAYA 3243-1VN/JS là món đồ chơi nhồi bông lý tưởng cho mọi lứa tuổi. Với thiết kế tỉ mỉ và chất liệu mềm mại, chú chim cánh cụt này không chỉ làm đẹp không gian mà còn là người bạn đồng hành tuyệt vời trong những giờ phút thư giãn. Đặc biệt, sản phẩm được làm từ vải cao cấp, an toàn cho trẻ em và mang lại cảm giác dễ chịu khi ôm ấp.
                
                Chú chim cánh cụt có ngoại hình đáng yêu, với đôi mắt to tròn, bộ lông mềm mượt, và chiếc bụng tròn trịa. Sản phẩm mang đến một món quà dễ thương và đầy ý nghĩa cho những ai yêu thích động vật biển và muốn sở hữu một món đồ chơi nhồi bông đáng yêu.

                Đặc điểm nổi bật:
                
                Thiết kế chi tiết và dễ thương, giống chim cánh cụt thật
                Chất liệu vải mềm mại, an toàn, phù hợp cho trẻ em
                Kích thước vừa phải, dễ dàng ôm và mang theo
                Màu sắc nhẹ nhàng, tạo cảm giác dễ chịu và ấm áp
                Phù hợp làm quà tặng hoặc trang trí phòng ngủ
                Chim Cánh Cụt Con IWAYA 3243-1VN/JS là món quà tuyệt vời dành cho những ai yêu thích động vật biển hoặc đang tìm kiếm một người bạn dễ thương để ôm ấp trong những giây phút thư giãn.`,

            brand: 'Iwaya',
            suitableAge: 8,
            tag: null
        },
        {
            // 9
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8eb'),
            name: 'Bàn chơi Khúc Côn Cầu UNITED SPORT A6030',
            category: 'Đồ chơi vận động',

            discount: null,
            price: 834000,
            stock: 20,
            isSale: true,

            description:
                `Khám phá thế giới thể thao ngay tại nhà với Bàn chơi Khúc Côn Cầu UNITED SPORT A6030! Đây là bộ đồ chơi tuyệt vời giúp trẻ em rèn luyện kỹ năng phản xạ, sự tập trung và khả năng làm việc nhóm qua trò chơi khúc côn cầu hấp dẫn. Với thiết kế chắc chắn, bề mặt bàn trơn tru và các chi tiết tinh tế, A6030 mang đến những trận đấu kịch tính và thú vị, giúp bé tận hưởng những phút giây vui vẻ cùng bạn bè và gia đình.

                Bàn chơi được trang bị đầy đủ các dụng cụ khúc côn cầu như gậy, bóng và khung thành nhỏ gọn, tạo nên không gian thi đấu thú vị ngay tại nhà. Với màu sắc tươi sáng và chất liệu an toàn, sản phẩm không chỉ là một trò chơi mà còn giúp trẻ em phát triển thể chất và tư duy chiến thuật.

                Đặc điểm nổi bật:

                Thiết kế bàn chơi chắc chắn, màu sắc bắt mắt
                Các dụng cụ chơi như gậy và bóng đều được làm từ chất liệu an toàn, bền đẹp
                Kích thước vừa phải, dễ dàng sử dụng và lưu trữ
                Phát triển kỹ năng phản xạ, chiến thuật và làm việc nhóm
                Phù hợp cho trẻ em từ 6 tuổi trở lên, chơi cùng bạn bè hoặc gia đình
                Bàn chơi Khúc Côn Cầu UNITED SPORT A6030 là lựa chọn lý tưởng cho những ai yêu thích thể thao và muốn có những giây phút giải trí vui nhộn cùng người thân.`,

            brand: 'United Sport',
            suitableAge: 3,
            tag: 'new'
        },
        {
            // 10
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8ec'),
            name: 'Bàn chơi Bi Lắc UNITED SPORT A6026',
            category: 'Đồ chơi vận động',

            discount: null,
            price: 834000,
            stock: 20,
            isSale: true,

            description:
                `Mang đến những giờ phút giải trí sôi động và thú vị, Bàn chơi Bi Lắc UNITED SPORT A6026 là sự lựa chọn hoàn hảo cho cả gia đình và bạn bè. Với thiết kế chắc chắn và kích thước phù hợp, sản phẩm này sẽ giúp bé phát triển khả năng phản xạ, tư duy chiến thuật và kỹ năng phối hợp trong các trò chơi nhóm. Bàn chơi được làm từ chất liệu bền đẹp, dễ dàng lau chùi, giúp bạn tận hưởng những trận đấu bi lắc gay cấn ngay tại nhà.

                A6026 có thiết kế đẹp mắt với các chi tiết sắc nét, từ những cần điều khiển đến các nhân vật bi lắc, tất cả đều được làm từ vật liệu an toàn, phù hợp cho trẻ em từ 6 tuổi trở lên. Với các cầu thủ bi lắc có thể di chuyển linh hoạt và dễ dàng, trò chơi trở nên sinh động và hấp dẫn hơn bao giờ hết. Bàn chơi có thể dễ dàng lưu trữ và mang theo khi đi chơi hoặc tổ chức các buổi tiệc.

                Đặc điểm nổi bật:

                Thiết kế bàn chơi chắc chắn, màu sắc bắt mắt và dễ sử dụng
                Các nhân vật bi lắc dễ dàng điều khiển và di chuyển
                Kích thước vừa phải, tiện lợi cho việc lưu trữ và di chuyển
                Phát triển kỹ năng chiến thuật, phản xạ và làm việc nhóm
                Phù hợp với cả trẻ em và người lớn, chơi cùng bạn bè và gia đình
                Bàn chơi Bi Lắc UNITED SPORT A6026 là món quà lý tưởng cho những ai yêu thích trò chơi giải trí, giúp mang lại những phút giây thư giãn, vui vẻ và đầy thử thách cùng người thân.`,

            brand: 'United Sport',
            suitableAge: 3,
            tag: 'new'
        },
        {
            // 11
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8ed'),
            name: 'Xe đạp trẻ em Royal Baby Flying Bear 16 inch Màu Vàng RB16B-9',
            category: 'Đồ chơi vận động',
            discount: null,

            price: 3114000,
            stock: 20,
            isSale: true,

            description:
                `Mang đến sự kết hợp hoàn hảo giữa thiết kế bắt mắt và chất lượng bền bỉ, Xe đạp trẻ em Royal Baby Flying Bear 16 inch Màu Vàng RB16B-9 là lựa chọn tuyệt vời cho các bé yêu thích khám phá thế giới xung quanh. Với khung xe chắc chắn và bộ phận chuyển động mượt mà, chiếc xe đạp này không chỉ đảm bảo an toàn mà còn tạo ra một trải nghiệm thú vị cho trẻ em khi học cách đạp xe.

                Xe đạp Royal Baby Flying Bear có thiết kế nhẹ nhàng, dễ điều khiển, với màu vàng tươi sáng và họa tiết dễ thương, chắc chắn sẽ thu hút sự chú ý của các bé. Bánh xe 16 inch vừa vặn với chiều cao và khả năng điều khiển của trẻ từ 4 đến 6 tuổi, giúp bé dễ dàng làm quen và tự tin trong mỗi chuyến đi.

                Đặc điểm nổi bật:

                Khung xe bằng hợp kim thép chắc chắn, chịu lực tốt
                Bánh xe 16 inch phù hợp cho trẻ em từ 4 đến 6 tuổi
                Màu sắc tươi sáng, thiết kế dễ thương, hấp dẫn các bé
                Phanh trước và sau an toàn, giúp trẻ dễ dàng dừng lại
                Hệ thống bánh xe chịu lực, đảm bảo sự ổn định khi di chuyển
                Bao gồm giỏ xe tiện dụng và chắn bùn giúp bảo vệ trẻ khỏi đất bẩn
                Xe đạp trẻ em Royal Baby Flying Bear 16 inch Màu Vàng RB16B-9 là món quà tuyệt vời để bé có thể vừa học đạp xe, vừa vui chơi ngoài trời, giúp phát triển thể chất và kỹ năng vận động một cách hiệu quả.`,

            brand: 'Bike',
            suitableAge: 4,
            tag: 'hot',
        },
        {
            // 12
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8ee'),
            name: 'Xe đạp trẻ em Royal Baby Freestyle 18 inch Màu Đỏ RB18B-6',
            category: 'Đồ chơi vận động',
            discount: null,
            price: 3018000,
            stock: 20,
            isSale: true,

            description:
                `Khám phá niềm vui đạp xe cùng Xe đạp trẻ em Royal Baby Freestyle 18 inch Màu Đỏ RB18B-6, chiếc xe đạp được thiết kế dành riêng cho các bé yêu thích sự mạnh mẽ và phong cách. Với khung xe chắc chắn, màu sắc nổi bật và tính năng an toàn vượt trội, RB18B-6 sẽ là người bạn đồng hành lý tưởng trong những chuyến đi chơi ngoài trời của trẻ.

                Xe đạp Royal Baby Freestyle được trang bị bánh xe 18 inch phù hợp cho các bé từ 6 đến 9 tuổi, giúp trẻ dễ dàng kiểm soát và điều khiển xe. Với hệ thống phanh trước và sau an toàn, bé có thể dừng lại một cách dễ dàng, tăng cường sự tự tin khi tham gia các hoạt động ngoài trời. Khung xe bằng hợp kim thép bền bỉ cùng thiết kế năng động sẽ giúp bé có những trải nghiệm tuyệt vời và vui vẻ.

                Đặc điểm nổi bật:

                Khung xe hợp kim thép chắc chắn, chịu lực tốt và bền bỉ
                Bánh xe 18 inch phù hợp cho trẻ em từ 6 đến 9 tuổi
                Màu đỏ nổi bật, thiết kế thể thao, hấp dẫn trẻ em
                Hệ thống phanh trước và sau giúp bé dễ dàng điều khiển và an toàn
                Được trang bị giỏ xe tiện dụng và chắn bùn giúp bảo vệ bé khỏi đất bẩn
                Yên xe điều chỉnh được, thoải mái cho bé trong suốt quá trình đạp xe
                Xe đạp trẻ em Royal Baby Freestyle 18 inch Màu Đỏ RB18B-6 là sự lựa chọn tuyệt vời giúp trẻ phát triển thể chất, rèn luyện sự tự tin và khả năng vận động trong những cuộc phiêu lưu ngoài trời cùng gia đình và bạn bè.`,

            brand: 'Bike',
            suitableAge: 5,
            tag: 'hot'
        },
        {
            // 13
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8ef'),
            name: 'Patin Neon Inline Yvolution xanh dương NT07B4-size 4-7 tuổi',
            category: 'Đồ chơi vận động',
            discount: null,

            price: 1521000,
            stock: 20,
            isSale: true,

            description:
                `Khám phá thế giới thể thao sôi động cùng Patin Neon Inline Yvolution Xanh Dương NT07B4 – một lựa chọn tuyệt vời để trẻ em từ 4 đến 7 tuổi phát triển kỹ năng cân bằng và sự linh hoạt. Với thiết kế độc đáo và màu sắc nổi bật, chiếc patin này không chỉ mang đến sự an toàn mà còn giúp bé có những trải nghiệm thú vị, rèn luyện thể lực và tinh thần thể thao.

                Patin Neon Inline Yvolution được trang bị bánh xe êm ái, giúp di chuyển mượt mà trên nhiều bề mặt khác nhau. Giày patin có thể điều chỉnh kích thước linh hoạt, phù hợp với bàn chân đang phát triển của trẻ. Hệ thống khóa chắc chắn giúp cố định chân bé an toàn khi di chuyển, đồng thời tạo sự thoải mái khi sử dụng.

                Đặc điểm nổi bật:

                Thiết kế màu xanh dương tươi sáng, bắt mắt, hấp dẫn trẻ em
                Bánh xe Inline mượt mà, giúp di chuyển ổn định và dễ dàng
                Giày có thể điều chỉnh kích thước linh hoạt từ size 4 đến 7, phù hợp cho trẻ em từ 4 đến 7 tuổi
                Chất liệu bền bỉ, an toàn và thoải mái, phù hợp cho các hoạt động ngoài trời
                Hệ thống khóa an toàn, giúp giữ vững giày khi bé di chuyển
                Patin Neon Inline Yvolution Xanh Dương NT07B4 là món quà tuyệt vời để bé học hỏi và phát triển khả năng thể thao, đồng thời tạo ra những giây phút vui chơi đầy thú vị và năng động.`,

            brand: 'Scooter',
            suitableAge: 4,
            tag: null
        },
        {
            // 14
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8f0'),
            name: 'Xe Scooter 2 bánh Neon Vector Yvolution NT05B2 xanh dương',
            category: 'Đồ chơi vận động',
            discount: null,

            price: 1279000,
            stock: 20,
            isSale: true,

            description:
                `Khám phá niềm vui di chuyển với Xe Scooter 2 bánh Neon Vector Yvolution NT05B2 Xanh Dương – chiếc scooter lý tưởng cho trẻ em yêu thích sự nhanh nhẹn và phong cách. Với thiết kế đẹp mắt, màu sắc nổi bật và tính năng an toàn vượt trội, NT05B2 mang đến những trải nghiệm thú vị và đầy năng lượng cho các bé từ 3 tuổi trở lên.

                Xe Scooter Yvolution được trang bị bánh xe chất lượng cao, giúp di chuyển mượt mà và ổn định trên nhiều bề mặt. Tay cầm thiết kế chắc chắn và dễ điều khiển, cùng với hệ thống phanh an toàn, giúp bé có thể dừng lại dễ dàng khi cần thiết. Xe có thể gập lại gọn gàng, dễ dàng mang theo khi không sử dụng.

                Đặc điểm nổi bật:

                Thiết kế 2 bánh vững chắc, dễ dàng điều khiển
                Màu xanh dương nổi bật, thu hút sự chú ý của trẻ em
                Bánh xe chất lượng cao, di chuyển mượt mà và ổn định trên nhiều bề mặt
                Hệ thống phanh an toàn, giúp bé dễ dàng kiểm soát tốc độ
                Tay cầm chống trượt, tạo cảm giác thoải mái khi sử dụng
                Xe có thể gập lại dễ dàng, thuận tiện cho việc lưu trữ và mang theo
                Xe Scooter 2 bánh Neon Vector Yvolution NT05B2 Xanh Dương là lựa chọn tuyệt vời để bé phát triển kỹ năng vận động, tăng cường sự tự tin và khám phá thế giới xung quanh một cách thú vị.`,

            brand: 'Scooter',
            suitableAge: 8,
            tag: null
        },
        {
            // 15
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8f1'),
            name: 'Đồ chơi Robot bạch tuộc 3 chân điều khiển từ xa (đen) VECTO VT6035',
            category: 'Đồ chơi cầm tay',
            discount: null,

            price: 600000,
            stock: 20,
            isSale: true,

            description:
                `Khám phá một thế giới kỳ diệu với Đồ chơi Robot Bạch Tuộc 3 chân điều khiển từ xa (đen) VECTO VT6035! Đây là món quà tuyệt vời cho các bé yêu thích công nghệ và khám phá các loài động vật, mang lại những giờ phút vui chơi đầy sáng tạo và hấp dẫn. Với thiết kế độc đáo hình bạch tuộc 3 chân, robot này có thể di chuyển linh hoạt, mang đến những trận chiến kịch tính và thú vị ngay tại nhà.

                Được trang bị điều khiển từ xa, robot bạch tuộc VECTO VT6035 có thể xoay 360 độ, tiến lùi, và thực hiện các động tác vũ điệu sống động, dễ dàng điều khiển với thao tác đơn giản. Màu sắc đen bóng bẩy, cùng các chi tiết sắc nét tạo nên một hình dáng robot mạnh mẽ, thu hút sự chú ý của trẻ.

                Đặc điểm nổi bật:

                Robot bạch tuộc 3 chân với khả năng di chuyển linh hoạt và dễ dàng điều khiển từ xa
                Thiết kế độc đáo, tạo hình bạch tuộc sinh động, thu hút trẻ em
                Điều khiển từ xa giúp bé dễ dàng thao tác và khám phá các chức năng
                Chất liệu an toàn, bền bỉ, phù hợp với trẻ em từ 6 tuổi trở lên
                Màu sắc đen bóng bẩy, hiện đại, phù hợp với nhiều sở thích của trẻ
                Đồ chơi Robot Bạch Tuộc 3 chân điều khiển từ xa VECTO VT6035 sẽ giúp bé phát triển khả năng tư duy, sáng tạo và kỹ năng điều khiển qua các hoạt động vui chơi thú vị. Đây là lựa chọn hoàn hảo cho các bé yêu thích công nghệ và robot.`,

            brand: 'Vector',
            suitableAge: 3,
            tag: 'hot',
        },
        {
            // 16
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8f2'),
            name: 'Siêu Robot biến hình TOBOT CYCLONE HAWK thủ lĩnh bầu trời TOBOT 301110',
            category: 'Đồ chơi cầm tay',
            discount: null,

            price: 699000,
            stock: 20,
            isSale: true,

            description:
                `Khám phá một thế giới hành động tuyệt vời với Siêu Robot biến hình TOBOT CYCLONE HAWK - Thủ Lĩnh Bầu Trời TOBOT 301110! Đây là món đồ chơi lý tưởng cho các bé yêu thích sự phiêu lưu, sáng tạo và khám phá những robot hùng mạnh. Với khả năng biến hình độc đáo từ máy bay chiến đấu thành robot khổng lồ, Tobot Cyclone Hawk sẽ mang lại những giờ phút giải trí đầy hấp dẫn và kịch tính.

                Siêu Robot TOBOT Cyclone Hawk được thiết kế tinh xảo với các chi tiết sắc nét, có thể biến hình dễ dàng từ một chiếc máy bay chiến đấu mạnh mẽ thành một chiến binh robot với các động tác chiến đấu đặc biệt. Màu sắc nổi bật, kết hợp với các bộ phận có thể chuyển động linh hoạt, giúp bé tạo ra những trận chiến đầy thú vị, giống như trong các bộ phim hành động.

                Đặc điểm nổi bật:

                Khả năng biến hình: Biến hình từ máy bay chiến đấu thành robot thủ lĩnh, mang đến trải nghiệm chơi sáng tạo và thú vị.
                Chất liệu bền bỉ: Được làm từ vật liệu chắc chắn và an toàn cho trẻ em, giúp bé tha hồ chơi mà không lo hư hỏng.
                Thiết kế chi tiết: Các bộ phận của robot có thể di chuyển và thay đổi linh hoạt, tạo ra những trận chiến kịch tính.
                Màu sắc nổi bật: Màu xanh dương và các chi tiết tinh tế, tạo hình đầy mạnh mẽ của một thủ lĩnh bầu trời.
                Phù hợp cho trẻ em: Lý tưởng cho các bé yêu thích robot, chiến đấu và sự sáng tạo.
                Siêu Robot biến hình TOBOT CYCLONE HAWK là món quà tuyệt vời để bé phát triển khả năng sáng tạo, tư duy chiến thuật và trải nghiệm những cuộc phiêu lưu kỳ thú trong thế giới robot.`,

            brand: 'Tobot',
            suitableAge: 3,
            tag: 'hot'
        },
        {
            // 17
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8f3'),
            name: 'Xe tập đi 3 trong 1 PEEK A BOO EU461542',
            category: 'Đồ chơi vận động',
            discount: null,

            price: 1189000,
            stock: 20,
            isSale: true,

            description:
                `Giúp bé yêu bước những bước đi đầu đời đầy tự tin và an toàn với Xe tập đi 3 trong 1 PEEK A BOO EU461542. Đây là một món đồ chơi đa năng, kết hợp giữa xe tập đi, xe đẩy và ghế ngồi chơi, mang đến sự tiện lợi và thú vị cho các bé từ 6 tháng tuổi trở lên. Với thiết kế dễ sử dụng, xe giúp bé luyện tập khả năng giữ thăng bằng, phát triển cơ bắp và khả năng vận động ngay từ những ngày đầu làm quen với việc đi bộ.

                Xe tập đi PEEK A BOO EU461542 có cấu trúc vững chắc, đảm bảo sự an toàn tối đa cho bé khi sử dụng. Ghế ngồi êm ái, giúp bé cảm thấy thoải mái khi vui chơi hoặc tập đi. Thiết kế thông minh cho phép thay đổi chức năng của xe, từ việc giúp bé tập đi đến việc biến thành một chiếc xe đẩy để bé có thể di chuyển linh hoạt.

                Đặc điểm nổi bật:

                3 trong 1: Xe tập đi, xe đẩy và ghế ngồi chơi, phù hợp với từng giai đoạn phát triển của bé.
                An toàn: Cấu trúc chắc chắn, dễ dàng điều chỉnh để phù hợp với nhu cầu và độ tuổi của trẻ.
                Ghế ngồi êm ái: Tạo sự thoải mái cho bé khi ngồi hoặc chơi.
                Khả năng di chuyển linh hoạt: Bánh xe dễ dàng di chuyển giúp bé tập đi, đồng thời giúp bé có thể di chuyển khắp nhà.
                Thiết kế bắt mắt: Màu sắc tươi sáng và dễ thương, thu hút sự chú ý của trẻ.
                Xe tập đi 3 trong 1 PEEK A BOO EU461542 sẽ là người bạn đồng hành tuyệt vời giúp bé yêu phát triển các kỹ năng vận động cơ bản, đồng thời tạo ra những giây phút vui chơi, khám phá tuyệt vời.`,

            brand: 'Peek A Boo',
            suitableAge: 1,
            tag: null,
        },
        {
            // 18
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8f4'),
            name: 'Đồ chơi nhận dạng hình khối FISHER PRICE MATTEL FFC84',
            category: 'Đồ chơi cầm tay',
            discount: null,

            price: 299000,
            stock: 20,
            isSale: true,

            description:
                `Khám phá thế giới hình học thú vị cùng Đồ chơi nhận dạng hình khối FISHER PRICE MATTEL FFC84 – món đồ chơi lý tưởng giúp bé phát triển khả năng nhận diện hình học, tư duy logic và khả năng phối hợp tay-mắt. Với thiết kế đơn giản nhưng đầy sáng tạo, món đồ chơi này sẽ giúp bé khám phá các hình khối và học cách phân loại màu sắc, hình dạng thông qua những trò chơi vui nhộn.

                Đồ chơi nhận dạng hình khối FISHER PRICE MATTEL FFC84 bao gồm các khối hình với màu sắc rực rỡ, dễ dàng để bé cầm nắm và xếp vào các ô vuông, tròn, tam giác… Đây là cách tuyệt vời để bé rèn luyện kỹ năng phân loại và phát triển khả năng giải quyết vấn đề ngay từ khi còn nhỏ. Ngoài ra, việc thao tác với các hình khối cũng giúp bé tăng cường sự khéo léo và khả năng nhận thức không gian.

                Đặc điểm nổi bật:

                Thiết kế sinh động: Các hình khối màu sắc bắt mắt, dễ dàng thu hút sự chú ý của bé.
                Chất liệu an toàn: Được làm từ nhựa cao cấp, an toàn cho trẻ em, không chứa các chất độc hại.
                Phát triển kỹ năng: Giúp bé nhận dạng hình khối, phân loại màu sắc và rèn luyện khả năng tư duy logic.
                Dễ sử dụng: Các khối hình dễ dàng cầm nắm và lắp vào các ô tương ứng, tạo sự hứng thú khi chơi.
                Thương hiệu uy tín: Sản phẩm đến từ Fisher-Price, một thương hiệu nổi tiếng với các đồ chơi giáo dục chất lượng cao.
                Đồ chơi nhận dạng hình khối FISHER PRICE MATTEL FFC84 là lựa chọn tuyệt vời để bé yêu học hỏi, phát triển kỹ năng tư duy và giải quyết vấn đề trong những năm tháng đầu đời.`,

            brand: 'Fisher Price Mattel',
            suitableAge: 1,
            tag: null
        },
        {
            // 19
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8f5'),
            name: 'Đồ Chơi Lắp Ráp Bộ Sưu Tập Hoa Xương Rồng LEGO BOTANICALS 10329 (758 chi tiết)',
            category: 'Đồ chơi Lego',
            discount: null,

            price: 1147000,
            stock: 20,
            isSale: true,

            description:
                `Khám phá vẻ đẹp tự nhiên qua từng chi tiết với Đồ Chơi Lắp Ráp Bộ Sưu Tập Hoa Xương Rồng LEGO BOTANICALS 10329! Đây là bộ đồ chơi lắp ráp tuyệt vời dành cho những ai yêu thích sự sáng tạo và đam mê với thế giới thực vật. Bộ sưu tập này không chỉ mang đến những giờ phút thư giãn đầy thú vị mà còn giúp bạn tái tạo lại những loài hoa xương rồng độc đáo ngay trong ngôi nhà của mình.

                Với 758 chi tiết, bộ LEGO Botanical 10329 cho phép bạn lắp ráp những loại hoa xương rồng tuyệt đẹp với các màu sắc tươi sáng, chi tiết tinh xảo. Đây là một bộ đồ chơi lắp ráp tuyệt vời, không chỉ giúp phát triển khả năng sáng tạo mà còn mang đến một tác phẩm trang trí tuyệt đẹp để bạn có thể trưng bày trong không gian sống của mình.

                Đặc điểm nổi bật:

                Chi tiết tinh xảo: Bộ đồ chơi bao gồm 758 chi tiết nhỏ, giúp bạn lắp ráp những loài hoa xương rồng chân thực và sắc nét.
                Thiết kế đẹp mắt: Các chi tiết của hoa xương rồng được tái hiện tỉ mỉ, mang đến một tác phẩm trang trí tinh tế cho ngôi nhà của bạn.
                Tăng cường sự sáng tạo: Lắp ráp bộ sưu tập này giúp phát triển khả năng tư duy, sáng tạo và kiên nhẫn của người chơi.
                Chất liệu an toàn: Được làm từ chất liệu nhựa cao cấp, an toàn và bền bỉ trong suốt quá trình sử dụng.
                Lý tưởng cho người yêu thích LEGO và thiên nhiên: Phù hợp với những ai yêu thích đồ chơi lắp ráp và muốn mang vẻ đẹp tự nhiên vào không gian sống.
                Đồ Chơi Lắp Ráp Bộ Sưu Tập Hoa Xương Rồng LEGO BOTANICALS 10329 không chỉ là một bộ đồ chơi thú vị mà còn là món quà tuyệt vời dành cho những ai yêu thích sự sáng tạo, nghệ thuật và thiên nhiên. Hãy tự tay tạo ra một khu vườn hoa xương rồng mini ngay trong ngôi nhà của bạn!`,

            brand: 'Lego Botanicals',
            suitableAge: 18,
            tag: null,
        },
        {
            // 20
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8f6'),
            name: 'Đồ Chơi Lắp Ráp Hoa Khô Trang Trí Lego LEGO BOTANICALS 10314 (812 chi tiết)',
            category: 'Đồ chơi Lego',
            discount: null,

            price: 983000,
            stock: 20,
            isSale: true,

            description:
                `Khám phá một thế giới thiên nhiên đầy sắc màu và tinh tế với Đồ Chơi Lắp Ráp Hoa Khô Trang Trí LEGO BOTANICALS 10314! Đây là bộ đồ chơi lắp ráp hoàn hảo dành cho những ai yêu thích sự sáng tạo và đam mê với vẻ đẹp của tự nhiên. Với 812 chi tiết, bộ LEGO này giúp bạn tạo nên những đóa hoa khô trang trí độc đáo, mang lại không gian sống ấm cúng và gần gũi với thiên nhiên.

                Bộ LEGO BOTANICALS 10314 mang đến cho bạn cơ hội để lắp ráp những loại hoa khô đầy màu sắc, hoàn hảo để trưng bày trong nhà hoặc làm quà tặng. Với từng chi tiết nhỏ được thiết kế tỉ mỉ, bộ đồ chơi không chỉ giúp bạn thư giãn mà còn làm nổi bật sự tinh tế và sắc đẹp của các loài hoa trong tự nhiên.

                Đặc điểm nổi bật:

                Chi tiết sắc nét: Bộ đồ chơi bao gồm 812 chi tiết, giúp bạn lắp ráp các đóa hoa khô đầy màu sắc với độ chi tiết cao.
                Trang trí độc đáo: Sau khi hoàn thành, bộ hoa khô sẽ trở thành một tác phẩm nghệ thuật trang trí tuyệt đẹp cho không gian sống của bạn.
                Phát triển khả năng sáng tạo: Việc lắp ráp từng chi tiết giúp bé và người lớn phát triển khả năng tư duy, sáng tạo và kiên nhẫn.
                Chất liệu an toàn: Các mảnh ghép được làm từ nhựa cao cấp, an toàn cho sức khỏe và bền bỉ theo thời gian.
                Lý tưởng cho người yêu thích thiên nhiên và nghệ thuật: Bộ đồ chơi này thích hợp cho những ai muốn mang vẻ đẹp của hoa khô vào không gian sống của mình.
                Đồ Chơi Lắp Ráp Hoa Khô Trang Trí LEGO BOTANICALS 10314 không chỉ mang đến những giờ phút thư giãn mà còn là món quà tuyệt vời để thêm phần sinh động cho ngôi nhà của bạn. Hãy tạo nên một không gian trang trí đầy nghệ thuật với những bông hoa khô lộng lẫy ngay hôm nay!`,

            brand: 'Lego Botanicals',
            suitableAge: 18,
            tag: null,
        }
    ]

    await Product.create(data);
}

const down = async () => {
    await mongoose.connection.collection('Product').drop();
}

const update = async () => {
    await down();
    await up();
}

export default { up, down, update };