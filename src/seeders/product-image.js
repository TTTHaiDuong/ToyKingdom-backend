'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await this.down(queryInterface, Sequelize);
        await queryInterface.sequelize.query('ALTER TABLE ProductImages AUTO_INCREMENT = 1');

        return queryInterface.bulkInsert('ProductImages', [
            {
                productId: 1,
                url: 'https://drive.google.com/file/d/1gtaIxpH92PA6UL0z0l_nhqd9ErgETrOR/view?usp=drive_link',
                altText: null,
                order: 1
            },
            {
                productId: 1,
                url: 'https://drive.google.com/file/d/1SFP-P8J0cUY48w1R9OnJdxyNeEdNn56y/view?usp=drive_link',
                altText: null,
                order: 2
            },
            {
                productId: 1,
                url: 'https://drive.google.com/file/d/1K3yF-JhJQblYAUkU-6DEdOfKsFPsUD5B/view?usp=drive_link',
                altText: null,
                order: 3
            },
            {
                productId: 1,
                url: 'https://drive.google.com/file/d/1wcpfAswrUjB9OH_mgoNv9opuVsD2G09X/view?usp=drive_link',
                altText: null,
                order: 4
            },
            {
                productId: 2,
                url: 'https://drive.google.com/file/d/1Fx8Z385H5O1HHNFSKGpVKobTCOXmmxZm/view?usp=drive_link',
                altText: null,
                order: 1
            },
            {
                productId: 2,
                url: 'https://drive.google.com/file/d/1wHVrtlQJrVaIZj96hDTy9Skalv7QBp2c/view?usp=drive_link',
                altText: null,
                order: 2
            },
            {
                productId: 2,
                url: 'https://drive.google.com/file/d/1s8031nkHtMIPWx--pE6FiyfvgF28LTe9/view?usp=drive_link',
                altText: null,
                order: 3
            },
            {
                productId: 3,
                url: 'https://drive.google.com/file/d/15J4F2kDhPyPN6lSz09JBSKJq5cLbqHpn/view?usp=drive_link',
                altText: null,
                order: 1
            },
            {
                productId: 3,
                url: 'https://drive.google.com/file/d/1F2fOpGIX_fOg3LFb-0C__0O9Wl_Ea-ZC/view?usp=drive_link',
                altText: null,
                order: 2
            },
            {
                productId: 3,
                url: 'https://drive.google.com/file/d/1vLDTil5QwZP0Lsv0QISnNexPAqxZwVcg/view?usp=drive_link',
                altText: null,
                order: 3
            },
            {
                productId: 3,
                url: 'https://drive.google.com/file/d/1BMyB8tI2DqfSZl8dhKzFOaUHLNMBsg3v/view?usp=drive_link',
                altText: null,
                order: 4
            },
            {
                productId: 3,
                url: 'https://drive.google.com/file/d/1fRCt-fDF3p091aw8pezqBuF3dAevrkZ8/view?usp=drive_link',
                altText: null,
                order: 5
            },
            {
                productId: 3,
                url: 'https://drive.google.com/file/d/1UZuJUOPTM1-ru08c2d3RdfNbw92S-SKT/view?usp=drive_link',
                altText: null,
                order: 6
            },
            {
                productId: 3,
                url: 'https://drive.google.com/file/d/1j9a3_pTF5jA9NpX_7a86PY9URGqSlrm5/view?usp=drive_link',
                altText: null,
                order: 7
            },
            {
                productId: 4,
                url: 'https://drive.google.com/file/d/1EPvEVQYixsS0rLEPeGZHXFbeIMTzlc1U/view?usp=drive_link',
                altText: null,
                order: 1
            },
            {
                productId: 4,
                url: 'https://drive.google.com/file/d/1UKpu82TlsmcQajsjog-q89GJ0ywg6UlZ/view?usp=drive_link',
                altText: null,
                order: 2
            },
            {
                productId: 4,
                url: 'https://drive.google.com/file/d/1NtPg-G0-pw4j6ODqs8UYKORod9MxNtHe/view?usp=drive_link',
                altText: null,
                order: 3
            },
            {
                productId: 4,
                url: 'https://drive.google.com/file/d/1o9rflzVquIxWmkEPzw23BNdsajJbvLkg/view?usp=drive_link',
                altText: null,
                order: 4
            },
            {
                productId: 4,
                url: 'https://drive.google.com/file/d/1tTw6ZLlO82t7NOsQc28cl_-YUlyP_35n/view?usp=drive_link',
                altText: null,
                order: 5
            },
            {
                productId: 4,
                url: 'https://drive.google.com/file/d/1hauA5lpzxrCQ3baA9Fy5M9Uy_-_Z2nv6/view?usp=drive_link',
                altText: null,
                order: 6
            },
            {
                productId: 5,
                url: 'https://drive.google.com/file/d/1ZhyF1QxRUlrGxbUNpPaNolzfodExHcjh/view?usp=drive_link',
                altText: null,
                order: 1
            },
            {
                productId: 5,
                url: 'https://drive.google.com/file/d/1M1QkK2lPGfp8c7OneO-ItOeVqTOjAJda/view?usp=drive_link',
                altText: null,
                order: 2
            },
            {
                productId: 5,
                url: 'https://drive.google.com/file/d/1NA1fLHQ7_gRV7OI3nhvHhS14fQ8irGmk/view?usp=drive_link',
                altText: null,
                order: 3
            },
            {
                productId: 5,
                url: 'https://drive.google.com/file/d/1J0Vjf3axmg8WCmWExHzYU4Tt_uEKfa3i/view?usp=drive_link',
                altText: null,
                order: 4
            },
            {
                productId: 5,
                url: 'https://drive.google.com/file/d/17s5Q9683295h3zGlpBq4pHCTS9QS6abU/view?usp=drive_link',
                altText: null,
                order: 5
            },
            {
                productId: 5,
                url: 'https://drive.google.com/file/d/1et-6CmpdCJ1eo5_10pZIAqwseWswCW9p/view?usp=drive_link',
                altText: null,
                order: 6
            },
            {
                productId: 6,
                url: 'https://drive.google.com/file/d/1j5ttRbeWk69PRxZv3sd2Orv0UnWKJqyb/view?usp=drive_link',
                altText: null,
                order: 1
            },
            {
                productId: 6,
                url: 'https://drive.google.com/file/d/1uir4T738eButj7-2fuOD_qgcwtYFv4yy/view?usp=drive_link',
                altText: null,
                order: 2
            },
            {
                productId: 6,
                url: 'https://drive.google.com/file/d/1t5pLGQr0v9RXmnyu4R0L2iDgOi2nOyRB/view?usp=drive_link',
                altText: null,
                order: 3
            },
            {
                productId: 6,
                url: 'https://drive.google.com/file/d/1MGlxE--CHf1YOqIma_-X-em0T1sRQtkw/view?usp=drive_link',
                altText: null,
                order: 4
            },
            {
                productId: 7,
                url: 'https://drive.google.com/file/d/1xSo4AZJxPAKi-KlqY9SRynMMcaGxveBF/view?usp=drive_link',
                altText: null,
                order: 1
            },
            {
                productId: 7,
                url: 'https://drive.google.com/file/d/1G_zZgJVVsiz4PqORTuwxUSmBHoTenfQx/view?usp=drive_link',
                altText: null,
                order: 2
            },
            {
                productId: 8,
                url: 'https://drive.google.com/file/d/1DDXaB6F-vLTcMVhoVbRizMHTU6z-zYLf/view?usp=drive_link',
                altText: null,
                order: 1
            },
            {
                productId: 8,
                url: 'https://drive.google.com/file/d/1vKLSHYrGcfnJw2WEXfgySC5ppzJbes01/view?usp=drive_link',
                altText: null,
                order: 2
            },
            {
                productId: 9,
                url: 'https://drive.google.com/file/d/1kLqrTCGnATZQqJjQt15jgiLz-it3Te7L/view?usp=drive_link',
                altText: null,
                order: 1
            },
            {
                productId: 9,
                url: 'https://drive.google.com/file/d/1gQS9PM9W0ovabkNCwTdgeNdqQrjFmKl5/view?usp=drive_link',
                altText: null,
                order: 2
            },
            {
                productId: 9,
                url: 'https://drive.google.com/file/d/1o12ygm2bOFhYFnF9ztCNbIwir5jQc2tA/view?usp=drive_link',
                altText: null,
                order: 3
            },
            {
                productId: 9,
                url: 'https://drive.google.com/file/d/1latvsKx4Ph9J71FhiekQwUMQJENeJp08/view?usp=drive_link',
                altText: null,
                order: 4
            },
            {
                productId: 10,
                url: 'https://drive.google.com/file/d/1pmpMI1qh4w9_cfxuuoc626ndM8rAqPJp/view?usp=drive_link',
                altText: null,
                order: 1
            },
            {
                productId: 10,
                url: 'https://drive.google.com/file/d/1dZpDe2fpaz0jLY77eSon0GejhDvAyLbh/view?usp=drive_link',
                altText: null,
                order: 2
            },
            {
                productId: 10,
                url: 'https://drive.google.com/file/d/1HVJCb2GEYGLKgmmNLOG-NmCodQ72AZGx/view?usp=drive_link',
                altText: null,
                order: 3
            },
            {
                productId: 11,
                url: 'https://drive.google.com/file/d/1J3WifyzY7qF2imJ99WV9Q1LAIqs7xjQF/view?usp=drive_link',
                altText: null,
                order: 1
            },
            {
                productId: 11,
                url: 'https://drive.google.com/file/d/1NwcMzERTcUmbqSz7JQcDSSlkNCHVIRor/view?usp=drive_link',
                altText: null,
                order: 2
            },
            {
                productId: 11,
                url: 'https://drive.google.com/file/d/1cjpAkWGQPG6LZ8PDMJkRV7i8ilIJam3R/view?usp=drive_link',
                altText: null,
                order: 3
            },
            {
                productId: 12,
                url: 'https://drive.google.com/file/d/1Y1at7Ci_eON4MjMdAWdlMu6e96RD3QTL/view?usp=drive_link',
                altText: null,
                order: 1
            },
            {
                productId: 12,
                url: 'https://drive.google.com/file/d/1qJ0Dh_hYJ2YZ8ltAiBTEszTBr-6Kmz0d/view?usp=drive_link',
                altText: null,
                order: 2
            },
            {
                productId: 12,
                url: 'https://drive.google.com/file/d/1zRBG5KfBT3729Tg8VI7j8a1imLcSiWj6/view?usp=drive_link',
                altText: null,
                order: 3
            },
            {
                productId: 13,
                url: 'https://drive.google.com/file/d/1-maBGkg55LCjendwo47oR9HdPTmQYbrS/view?usp=drive_link',
                altText: null,
                order: 1
            },
            {
                productId: 13,
                url: 'https://drive.google.com/file/d/1OyQiit1llW5Gmu4WKSncB5WhCpoUZfkd/view?usp=drive_link',
                altText: null,
                order: 2
            },
            {
                productId: 13,
                url: 'https://drive.google.com/file/d/1VAyjdoy2xKrC641KL6Y5kDTsXY02XByp/view?usp=drive_link',
                altText: null,
                order: 3
            },
            {
                productId: 13,
                url: 'https://drive.google.com/file/d/1ZAgxQ26qOSrZq6QvjifWZRIWskPwyY1m/view?usp=drive_link',
                altText: null,
                order: 4
            },
            {
                productId: 14,
                url: 'https://drive.google.com/file/d/1NXl0M5sUd9dg2uxZ8-Z0_FNMSKGPsqTO/view?usp=drive_link',
                altText: null,
                order: 1
            },
            {
                productId: 14,
                url: 'https://drive.google.com/file/d/1UtOJie1YEzCAQtbMt2nAlZ7-Q7YeMNkA/view?usp=drive_link',
                altText: null,
                order: 2
            },
            {
                productId: 14,
                url: 'https://drive.google.com/file/d/1Ijnop89suVmj4_ky9FwYRVNCYdehoIlu/view?usp=drive_link',
                altText: null,
                order: 3
            },
            {
                productId: 14,
                url: 'https://drive.google.com/file/d/1bv43acgNuFWLfDc6e93hmLGrLvURDjLK/view?usp=drive_link',
                altText: null,
                order: 4
            },
            {
                productId: 14,
                url: 'https://drive.google.com/file/d/1cT9O0nZkxXROaFbQ7J3EAFYE5R3Dwxtw/view?usp=drive_link',
                altText: null,
                order: 5
            },
            {
                productId: 15,
                url: 'https://drive.google.com/file/d/15m1MtBkqoaspO8McUJY_-NVeBsN0sS4E/view?usp=drive_link',
                altText: null,
                order: 1
            },
            {
                productId: 15,
                url: 'https://drive.google.com/file/d/1FvNM7mztTEUP7sR8PnTMdN6nQ4f-oWKD/view?usp=drive_link',
                altText: null,
                order: 2
            },
            {
                productId: 16,
                url: 'https://drive.google.com/file/d/1sweBmfThPvuIYfJJDIfFPxyDzQzR2Sz0/view?usp=drive_link',
                altText: null,
                order: 1
            },
            {
                productId: 16,
                url: 'https://drive.google.com/file/d/1ropMR0qrSceKU6YBiRG-aOMBBHOFSNeQ/view?usp=drive_link',
                altText: null,
                order: 2
            },
            {
                productId: 16,
                url: 'https://drive.google.com/file/d/1HnWXk0Uy480olITa9wpuZs_zs1DpAf-z/view?usp=drive_link',
                altText: null,
                order: 3
            },
            {
                productId: 17,
                url: 'https://drive.google.com/file/d/1stPyiaxg2tyx8YH9Be6QB6W_oE4h-_VQ/view?usp=drive_link',
                altText: null,
                order: 1
            },
            {
                productId: 17,
                url: 'https://drive.google.com/file/d/1Qpn1sUWFzsgNWmdFEEFi_Y0vJe588TSB/view?usp=drive_link',
                altText: null,
                order: 2
            },
            {
                productId: 17,
                url: 'https://drive.google.com/file/d/1fR_scTan_yKPk1SGhZ1duv-if24UcONj/view?usp=drive_link',
                altText: null,
                order: 3
            },
            {
                productId: 17,
                url: 'https://drive.google.com/file/d/1zpJLvvagWVaoMgDPSpgdbx0rnj2pnYpe/view?usp=drive_link',
                altText: null,
                order: 4
            },
            {
                productId: 18,
                url: 'https://drive.google.com/file/d/1KEy6uSVKL0aqsQf8JQFNi1uqCcmc3fb4/view?usp=drive_link',
                altText: null,
                order: 1
            },
            {
                productId: 18,
                url: 'https://drive.google.com/file/d/1a6l0SyFC1HK2vZWC1fDr3PMUBTSdIkMA/view?usp=drive_link',
                altText: null,
                order: 2
            },
            {
                productId: 18,
                url: 'https://drive.google.com/file/d/1E0bzqbBkTQ4Rp6H1Np5S2-OWfVUUOLoB/view?usp=drive_link',
                altText: null,
                order: 3
            },
            {
                productId: 19,
                url: 'https://drive.google.com/file/d/11LZoV-BG2T04tJP4BUJVkGMhchI2i59r/view?usp=drive_link',
                altText: null,
                order: 1
            },
            {
                productId: 19,
                url: 'https://drive.google.com/file/d/1_kZZL-6LvuTtgi9hjzMEsM3SrieZrJku/view?usp=drive_link',
                altText: null,
                order: 2
            },
            {
                productId: 19,
                url: 'https://drive.google.com/file/d/1GyfkabBTjhcDyWWw2zGAR8U_3Xg2UN8O/view?usp=drive_link',
                altText: null,
                order: 3
            },
            {
                productId: 19,
                url: 'https://drive.google.com/file/d/1hXQnkmPyyauVJiXl_h28B3APjaijmdMf/view?usp=drive_link',
                altText: null,
                order: 4
            },
            {
                productId: 19,
                url: 'https://drive.google.com/file/d/1Qt2JQh0jBo780I4AGBFWvJvVFomEJPyN/view?usp=drive_link',
                altText: null,
                order: 5
            },
            {
                productId: 20,
                url: 'https://drive.google.com/file/d/19qZLYQ4ZF6DkjRIxNbyCujVXhYnYu4xI/view?usp=drive_link',
                altText: null,
                order: 1
            },
            {
                productId: 20,
                url: 'https://drive.google.com/file/d/1R8F18okFdb5q6Pyjk1wB6t7rExax0WBI/view?usp=drive_link',
                altText: null,
                order: 2
            },
            {
                productId: 20,
                url: 'https://drive.google.com/file/d/1WJG6Pr11s7bQbyn3ksItD_Ketrv6jTje/view?usp=drive_link',
                altText: null,
                order: 3
            },
            {
                productId: 20,
                url: 'https://drive.google.com/file/d/1OgPfB5-xBdTvb0GI2T8fZ4dBm08G9emQ/view?usp=drive_link',
                altText: null,
                order: 4
            },
            {
                productId: 20,
                url: 'https://drive.google.com/file/d/1vx2kWmpV8ZD8JO4O2yWyGqwjwfAqhhs3/view?usp=drive_link',
                altText: null,
                order: 5
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('ProductImages', null, {});
    }
};

