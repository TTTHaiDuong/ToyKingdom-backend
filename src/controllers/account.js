import accountServices from '../services/account';
import passwordServices from '../services/password';
import sendEmail from '../services/send-email';

/**
 * Yêu cầu đăng nhập
 * @param {{email: String?, phone: String?, password: String}} req.body
 * @return {{refreshToken: String, accessToken: String, message: String}}
 */
const login = async (req, res) => {
    const { email, phone, password } = req.body;

    if (!email && !phone) return res.status(401).json({ message: 'Missing email or phone' });
    if (!password) return res.status(401).json({ message: 'Missing password' });

    accountServices.login({ email, phone }, password, (tokenPair, err) => {
        if (err) return res.status(400).json({ message: 'Failed login' });
        return res.status(200).json({ ...tokenPair, message: 'Ok' });
    });
}

// Lấy những phần signup model lên
const signup = async (req, res) => {
    const { email, phone, fullName, password } = req.body;

    accountServices.signup(email, phone, fullName, password, (user, err) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ user: user, message: 'Ok' })
    });
}

const changePassword = async (req, res) => {
    const { id } = req.tokenPayload;
    const { oldPassword, newPassword } = req.body;

    const isVerified = await passwordServices.verify(id, oldPassword, (result, err) => {
        if (err || !result) return false; return true;
    });

    if (!isVerified) return res.status(401).json({ message: 'Incorrect password' });

    passwordServices.generate(id, newPassword, (err) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ message: 'Ok' })
    });
}

/**
 * Yêu cầu gửi mã otp
 */
let requestOtpVieEmail = async (req, res) => {
    const { email } = req.body;
    await sendEmail()
}

export default {
    login,
    signup,
    changePassword,
    requestOtpVieEmail
}