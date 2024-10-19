import { ConnectionRefusedError } from 'sequelize';
import loginServices from '../services/login'
import sendEmail from '../services/send-email'

let getHomePage = (req, res) => {
    return res.render('home-page.ejs')
}

/**
 * Yêu cầu đăng nhập
 * @param {{email: String?, phone: String?, password: String}} req.body
 * @return {{refreshToken: String, accessToken: String, message: String}}
 */
const submitLogin = async (req, res) => {
    const { email, phone, password } = req.body;

    if ((email || phone) && password) {
        loginServices.handlePasswordLogin({ email, phone }, password, (tokenPair, err) => {
            if (tokenPair) {
                // Đăng nhập thành công, HTTP status: 200
                return res.status(200).json({ ...tokenPair, message: 'Ok' });
            }
            else if (err instanceof ConnectionRefusedError) {
                // Lỗi kết nối CSDL, HTTP status: 500
                return res.status(500).json({ message: 'Server error' })
            }
            else {
                // Đăng nhập thất bại, HTTP status: 401
                return res.status(401).json({ message: 'Failed login' });
            }
        });
    }
    else {
        // Phần thân của request không có email hoặc số điện thoại và mật khẩu
        return res.status(401).json({ message: 'Not provided email or phone and password fields' });
    }
}

/**
 * Yêu cầu gửi mã otp
 */
let requestOtpVieEmail = async (req, res) => {
    const { email } = req.body;
    await sendEmail()
}

export default {
    getHomePage,
    submitLogin,
    requestOtpVieEmail
}