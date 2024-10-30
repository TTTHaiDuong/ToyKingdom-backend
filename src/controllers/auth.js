import authServices from '../services/auth';
import passwordServices from '../services/password';
import tokenServices from '../services/token';
import sendEmail from '../services/send-email';

const login = async (req, res) => {
    const { email, phone, password } = req.body;

    if (!email && !phone) return res.status(401).json({ message: 'Missing email or phone' });
    if (!password) return res.status(401).json({ message: 'Missing password' });

    authServices.login({ email, phone }, password, (err, tokenPair) => {
        if (err) return res.status(400).json({ message: 'Failed login' });
        return res.status(200).json({ ...tokenPair, message: 'Ok' });
    });
}

const logout = async (req, res) => {
    const { id } = req.tokenPayload;

    authServices.logout(id, (err) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ message: 'Ok' });
    });
}

// Lấy những phần signup model lên
const signup = async (req, res) => {
    const { email, phone, fullName, password } = req.body;

    authServices.signup(email, phone, fullName, password, (err, user) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ user: user, message: 'Ok' })
    });
}

const changePassword = async (req, res) => {
    const { id } = req.tokenPayload;
    const { oldPassword, newPassword } = req.body;

    const isVerified = await passwordServices.verify(id, oldPassword, (err, result) => {
        if (err || !result) return false; return true;
    });

    if (!isVerified) return res.status(401).json({ message: 'Incorrect password' });

    passwordServices.generate(id, newPassword, (err) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ message: 'Ok' })
    });
}

const refreshAccessToken = async (req, res) => {
    const authHeader = req.headers['authorization'];
    const refreshToken = authHeader && authHeader.split(' ')[1];

    tokenServices.refreshAccessToken(refreshToken, (err, accessToken) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ accessToken: accessToken, message: 'Ok' })
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
    logout,
    signup,
    changePassword,
    refreshAccessToken
}