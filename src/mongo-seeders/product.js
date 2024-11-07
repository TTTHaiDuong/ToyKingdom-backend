import { Product } from "../models.js";
import mongoose from "mongoose";

const up = async () => {
    const products = [
        {
            // 1
            _id: new mongoose.Types.ObjectId('672cf21818c76bacb3ae7440'),
            name: 'Xe điều khiển 1:24 Lamborghini Aventador SVJ màu Vàng RASTAR R96100',
            categories: ['Xe điều khiển'],

            discount: null,
            price: 479000,
            stock: 20,
            isSale: true,

            images: [
                {
                    url: 'https://drive.google.com/file/d/1gtaIxpH92PA6UL0z0l_nhqd9ErgETrOR/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1SFP-P8J0cUY48w1R9OnJdxyNeEdNn56y/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1K3yF-JhJQblYAUkU-6DEdOfKsFPsUD5B/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1wcpfAswrUjB9OH_mgoNv9opuVsD2G09X/view?usp=drive_link',
                    altText: null,
                }
            ],
            description: null,
            brand: 'Rastar',
            suitableAge: 6,
            tag: 'new'
        },
        {
            // 2
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8e4'),
            name: 'Đồ chơi trực thăng Avatar VECTO VTYD-718',
            categories: ['Trực thăng'],

            discount: null,
            price: 999000,
            stock: 20,
            isSale: true,

            images: [
                {
                    url: 'https://drive.google.com/file/d/1Fx8Z385H5O1HHNFSKGpVKobTCOXmmxZm/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1wHVrtlQJrVaIZj96hDTy9Skalv7QBp2c/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1s8031nkHtMIPWx--pE6FiyfvgF28LTe9/view?usp=drive_link',
                    altText: null,
                }
            ],
            description: null,
            brand: 'Vector',
            suitableAge: 8,
            tag: 'new'
        },
        {
            // 3
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8e5'),
            name: 'Đồ chơi lắp ráp Rồng nguyên tố đối đầu chiến giáp đế vương LEGO NINJAGO 71796',
            categories: ['Đồ chơi lắp ghép'],

            discount: null,
            price: 2309000,
            stock: 20,
            isSale: true,

            images: [
                {
                    url: 'https://drive.google.com/file/d/15J4F2kDhPyPN6lSz09JBSKJq5cLbqHpn/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1F2fOpGIX_fOg3LFb-0C__0O9Wl_Ea-ZC/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1vLDTil5QwZP0Lsv0QISnNexPAqxZwVcg/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1BMyB8tI2DqfSZl8dhKzFOaUHLNMBsg3v/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1fRCt-fDF3p091aw8pezqBuF3dAevrkZ8/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1UZuJUOPTM1-ru08c2d3RdfNbw92S-SKT/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1j9a3_pTF5jA9NpX_7a86PY9URGqSlrm5/view?usp=drive_link',
                    altText: null,
                }
            ],
            description: null,
            brand: 'Lego Ninjago',
            suitableAge: 9,
            tag: null
        },
        {
            // 4
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8e6'),
            name: 'Đồ chơi lắp ráp Tàu thám hiểm bắc cực LEGO CITY 60368',
            categories: ['Đồ chơi lắp ghép'],

            discount: null,
            price: 3275000,
            stock: 20,
            isSale: true,

            images: [
                {
                    url: 'https://drive.google.com/file/d/1EPvEVQYixsS0rLEPeGZHXFbeIMTzlc1U/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1UKpu82TlsmcQajsjog-q89GJ0ywg6UlZ/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1NtPg-G0-pw4j6ODqs8UYKORod9MxNtHe/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1o9rflzVquIxWmkEPzw23BNdsajJbvLkg/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1tTw6ZLlO82t7NOsQc28cl_-YUlyP_35n/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1hauA5lpzxrCQ3baA9Fy5M9Uy_-_Z2nv6/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1ZhyF1QxRUlrGxbUNpPaNolzfodExHcjh/view?usp=drive_link',
                    altText: null,
                }
            ],
            description: null,
            brand: 'Lego City',
            suitableAge: 7,
            tag: null
        },
        {
            // 5
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8e7'),
            name: 'Vali nhà bếp di động 3 trong 1 SWEET HEART SH8121',
            categories: ['Đồ chơi lắp ghép', 'Đồ chơi nhà bếp'],

            discount: null,
            price: 659000,
            stock: 20,
            isSale: true,

            images: [
                {
                    url: 'https://drive.google.com/file/d/1M1QkK2lPGfp8c7OneO-ItOeVqTOjAJda/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1NA1fLHQ7_gRV7OI3nhvHhS14fQ8irGmk/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1J0Vjf3axmg8WCmWExHzYU4Tt_uEKfa3i/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/17s5Q9683295h3zGlpBq4pHCTS9QS6abU/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1et-6CmpdCJ1eo5_10pZIAqwseWswCW9p/view?usp=drive_link',
                    altText: null,
                }
            ],
            description: null,
            brand: 'Sweet Heart',
            suitableAge: 3,
            tag: 'hot'
        },
        {
            // 6
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8e8'),
            name: 'Bộ đồ chơi bác sĩ BATTAT BT2537Z',
            categories: ['Đồ chơi bác sĩ'],

            discount: null,
            price: 439000,
            stock: 20,
            isSale: true,

            images: [
                {
                    url: 'https://drive.google.com/file/d/1j5ttRbeWk69PRxZv3sd2Orv0UnWKJqyb/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1uir4T738eButj7-2fuOD_qgcwtYFv4yy/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1t5pLGQr0v9RXmnyu4R0L2iDgOi2nOyRB/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1MGlxE--CHf1YOqIma_-X-em0T1sRQtkw/view?usp=drive_link',
                    altText: null,
                }
            ],
            description: null,
            brand: 'Battat',
            suitableAge: 3,
            tag: 'hot'
        },
        {
            // 7
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8e9'),
            name: 'Thú nhồi bông Mũ phù thủy ánh sao AMONG US AMU10910',
            categories: ['Thú bông'],

            discount: null,
            price: 329000,
            stock: 20,
            isSale: true,

            images: [
                {
                    url: 'https://drive.google.com/file/d/1xSo4AZJxPAKi-KlqY9SRynMMcaGxveBF/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1G_zZgJVVsiz4PqORTuwxUSmBHoTenfQx/view?usp=drive_link',
                    altText: null,
                }
            ],
            description: null,
            brand: 'Among Us',
            suitableAge: 6,
            tag: null
        },
        {
            // 8
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8ea'),
            name: 'Chim Cánh Cụt Con IWAYA 3243-1VN/JS',
            categories: ['Thú bông'],

            discount: null,
            price: 399000,
            stock: 20,
            isSale: true,

            images: [
                {
                    url: 'https://drive.google.com/file/d/1DDXaB6F-vLTcMVhoVbRizMHTU6z-zYLf/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1vKLSHYrGcfnJw2WEXfgySC5ppzJbes01/view?usp=drive_link',
                    altText: null,
                }
            ],
            description: null,
            brand: 'Iwaya',
            suitableAge: 8,
            tag: null
        },
        {
            // 9
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8eb'),
            name: 'Bàn chơi Khúc Côn Cầu UNITED SPORT A6030',
            categories: ['Đồ chơi vận động'],

            discount: null,
            price: 834000,
            stock: 20,
            isSale: true,

            images: [
                {
                    url: 'https://drive.google.com/file/d/1kLqrTCGnATZQqJjQt15jgiLz-it3Te7L/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1gQS9PM9W0ovabkNCwTdgeNdqQrjFmKl5/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1o12ygm2bOFhYFnF9ztCNbIwir5jQc2tA/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1latvsKx4Ph9J71FhiekQwUMQJENeJp08/view?usp=drive_link',
                    altText: null,
                }
            ],
            description: null,
            brand: 'United Sport',
            suitableAge: 3,
            tag: 'new'
        },
        {
            // 10
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8ec'),
            name: 'Bàn chơi Bi Lắc UNITED SPORT A6026',
            categories: ['Đồ chơi vận động'],

            discount: null,
            price: 834000,
            stock: 20,
            isSale: true,
            images: [
                {
                    url: 'https://drive.google.com/file/d/1pmpMI1qh4w9_cfxuuoc626ndM8rAqPJp/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1dZpDe2fpaz0jLY77eSon0GejhDvAyLbh/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1HVJCb2GEYGLKgmmNLOG-NmCodQ72AZGx/view?usp=drive_link',
                    altText: null,
                }
            ],
            description: null,
            brand: 'United Sport',
            suitableAge: 3,
            tag: 'new'
        },
        {
            // 11
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8ed'),
            name: 'Xe đạp trẻ em Royal Baby Flying Bear 16 inch Màu Vàng RB16B-9',
            categories: ['Xe đạp'],
            discount: null,

            price: 3114000,
            stock: 20,
            isSale: true,
            images: [
                {
                    url: 'https://drive.google.com/file/d/1J3WifyzY7qF2imJ99WV9Q1LAIqs7xjQF/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1NwcMzERTcUmbqSz7JQcDSSlkNCHVIRor/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1cjpAkWGQPG6LZ8PDMJkRV7i8ilIJam3R/view?usp=drive_link',
                    altText: null,
                }
            ],
            description: null,
            brand: 'Bike',
            suitableAge: 4,
            tag: 'hot',
        },
        {
            // 12
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8ee'),
            name: 'Xe đạp trẻ em Royal Baby Freestyle 18 inch Màu Đỏ RB18B-6',
            categories: ['Xe đạp'],
            discount: null,
            price: 3018000,
            stock: 20,
            isSale: true,
            images: [
                {
                    url: 'https://drive.google.com/file/d/1Y1at7Ci_eON4MjMdAWdlMu6e96RD3QTL/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1qJ0Dh_hYJ2YZ8ltAiBTEszTBr-6Kmz0d/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1zRBG5KfBT3729Tg8VI7j8a1imLcSiWj6/view?usp=drive_link',
                    altText: null,
                }
            ],
            description: null,
            brand: 'Bike',
            suitableAge: 5,
            tag: 'hot'
        },
        {
            // 13
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8ef'),
            name: 'Patin Neon Inline Yvolution xanh dương NT07B4-size 4-7 tuổi',
            categories: ['Đồ chơi vận động'],
            discount: null,

            price: 1521000,
            stock: 20,
            isSale: true,
            images: [
                {
                    url: 'https://drive.google.com/file/d/1-maBGkg55LCjendwo47oR9HdPTmQYbrS/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1OyQiit1llW5Gmu4WKSncB5WhCpoUZfkd/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1VAyjdoy2xKrC641KL6Y5kDTsXY02XByp/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1ZAgxQ26qOSrZq6QvjifWZRIWskPwyY1m/view?usp=drive_link',
                    altText: null,
                }
            ],
            description: null,
            brand: 'Scooter',
            suitableAge: 4,
            tag: null
        },
        {
            // 14
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8f0'),
            name: 'Xe Scooter 2 bánh Neon Vector Yvolution NT05B2 xanh dương',
            categories: ['Đồ chơi vận động'],
            discount: null,

            price: 1279000,
            stock: 20,
            isSale: true,
            images: [
                {
                    url: 'https://drive.google.com/file/d/1NXl0M5sUd9dg2uxZ8-Z0_FNMSKGPsqTO/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1UtOJie1YEzCAQtbMt2nAlZ7-Q7YeMNkA/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1Ijnop89suVmj4_ky9FwYRVNCYdehoIlu/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1bv43acgNuFWLfDc6e93hmLGrLvURDjLK/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1cT9O0nZkxXROaFbQ7J3EAFYE5R3Dwxtw/view?usp=drive_link',
                    altText: null,
                }
            ],
            description: null,
            brand: 'Scooter',
            suitableAge: 8,
            tag: null
        },
        {
            // 15
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8f1'),
            name: 'Đồ chơi Robot bạch tuộc 3 chân điều khiển từ xa (đen) VECTO VT6035',
            categories: ['Đồ chơi lắp ghép', 'Robot'],
            discount: null,

            price: 600000,
            stock: 20,
            isSale: true,
            images: [
                {
                    url: 'https://drive.google.com/file/d/15m1MtBkqoaspO8McUJY_-NVeBsN0sS4E/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1FvNM7mztTEUP7sR8PnTMdN6nQ4f-oWKD/view?usp=drive_link',
                    altText: null,
                }
            ],
            description: null,
            brand: 'Vector',
            suitableAge: 3,
            tag: 'hot',
        },
        {
            // 16
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8f2'),
            name: 'Siêu Robot biến hình TOBOT CYCLONE HAWK thủ lĩnh bầu trời TOBOT 301110',
            categories: ['Đồ chơi lắp ghép', 'Robot'],
            discount: null,

            price: 699000,
            stock: 20,
            isSale: true,
            images: [
                {
                    url: 'https://drive.google.com/file/d/1sweBmfThPvuIYfJJDIfFPxyDzQzR2Sz0/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1ropMR0qrSceKU6YBiRG-aOMBBHOFSNeQ/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1HnWXk0Uy480olITa9wpuZs_zs1DpAf-z/view?usp=drive_link',
                    altText: null,
                }
            ],
            description: null,
            brand: 'Tobot',
            suitableAge: 3,
            tag: 'hot'
        },
        {
            // 17
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8f3'),
            name: 'Xe tập đi 3 trong 1 PEEK A BOO EU461542',
            categories: ['Đồ chơi sơ sinh', 'Đồ chơi giáo dục'],
            discount: null,

            price: 1189000,
            stock: 20,
            isSale: true,
            images: [
                {
                    url: 'https://drive.google.com/file/d/1stPyiaxg2tyx8YH9Be6QB6W_oE4h-_VQ/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1Qpn1sUWFzsgNWmdFEEFi_Y0vJe588TSB/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1fR_scTan_yKPk1SGhZ1duv-if24UcONj/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1zpJLvvagWVaoMgDPSpgdbx0rnj2pnYpe/view?usp=drive_link',
                    altText: null,
                }
            ],
            description: null,
            brand: 'Peek A Boo',
            suitableAge: 1,
            tag: null,
        },
        {
            // 18
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8f4'),
            name: 'Đồ chơi nhận dạng hình khối FISHER PRICE MATTEL FFC84',
            categories: ['Đồ chơi giáo dục'],
            discount: null,

            price: 299000,
            stock: 20,
            isSale: true,
            images: [
                {
                    url: 'https://drive.google.com/file/d/1KEy6uSVKL0aqsQf8JQFNi1uqCcmc3fb4/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1a6l0SyFC1HK2vZWC1fDr3PMUBTSdIkMA/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1E0bzqbBkTQ4Rp6H1Np5S2-OWfVUUOLoB/view?usp=drive_link',
                    altText: null,
                }
            ],
            description: null,
            brand: 'Fisher Price Mattel',
            suitableAge: 1,
            tag: null
        },
        {
            // 19
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8f5'),
            name: 'Đồ Chơi Lắp Ráp Bộ Sưu Tập Hoa Xương Rồng LEGO BOTANICALS 10329 (758 chi tiết)',
            categories: ['Đồ chơi lắp ghép'],
            discount: null,

            price: 1147000,
            stock: 20,
            isSale: true,
            images: [
                {
                    url: 'https://drive.google.com/file/d/11LZoV-BG2T04tJP4BUJVkGMhchI2i59r/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1_kZZL-6LvuTtgi9hjzMEsM3SrieZrJku/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1GyfkabBTjhcDyWWw2zGAR8U_3Xg2UN8O/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1hXQnkmPyyauVJiXl_h28B3APjaijmdMf/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1Qt2JQh0jBo780I4AGBFWvJvVFomEJPyN/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/19qZLYQ4ZF6DkjRIxNbyCujVXhYnYu4xI/view?usp=drive_link',
                    altText: null,
                }
            ],
            description: null,
            brand: 'Lego Botanicals',
            suitableAge: 18,
            tag: null,
        },
        {
            // 20
            _id: new mongoose.Types.ObjectId('672cf37d408d47bba322d8f6'),
            name: 'Đồ Chơi Lắp Ráp Hoa Khô Trang Trí Lego LEGO BOTANICALS 10314 (812 chi tiết)',
            categories: ['Đồ chơi lắp ghép'],
            discount: null,

            price: 983000,
            stock: 20,
            isSale: true,
            images: [
                {
                    url: 'https://drive.google.com/file/d/1R8F18okFdb5q6Pyjk1wB6t7rExax0WBI/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1WJG6Pr11s7bQbyn3ksItD_Ketrv6jTje/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1OgPfB5-xBdTvb0GI2T8fZ4dBm08G9emQ/view?usp=drive_link',
                    altText: null,
                },
                {
                    url: 'https://drive.google.com/file/d/1vx2kWmpV8ZD8JO4O2yWyGqwjwfAqhhs3/view?usp=drive_link',
                    altText: null,
                }
            ],
            description: null,
            brand: 'Lego Botanicals',
            suitableAge: 18,
            tag: null,
        }
    ]

    await Product.create(products);
}

const down = async () => {
    await mongoose.connection.collection('Product').drop();
}

const update = async () => {
    await down();
    await up();
}

export default { up, down, update };