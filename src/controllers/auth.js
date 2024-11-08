import authSv from '../services/auth.js';
import passwordSv from '../services/password.js';
import tokenSv from '../services/token.js';
import sendEmail from '../old-services/send-email.js';
import CustomError from '../services/custom-error.js';

const login = async (req, res) => {
    const { email, phone, password } = req.body;

    if (!email && !phone) return res.status(400).json({ message: 'Missing email or phone' });
    if (!password) return res.status(400).json({ message: 'Missing password' });

    authSv.login({ email, phone }, password, (err, tokenPair) => {
        if (err) {
            if (err instanceof CustomError && err.name === 'UserNotFoundError')
                return res.status(404).json({ message: `Not existing ${email ? 'email' : 'phone'}` });

            if (err instanceof CustomError && err.name === 'IncorrectPasswordError')
                return res.status(401).json({ message: 'Incorrect password' });

            return res.status(500).json({ message: 'Server error' });
        }
        return res.status(200).json({ ...tokenPair });
    });
}

const logout = async (req, res) => {
    const { id } = req.tokenPayload;

    authSv.logout(id, (err) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ message: 'Ok' });
    });
}

const signup = async (req, res) => {
    const { email, phone, fullName, password } = req.body;

    const invalid = await validateRegisterInfo({ email, phone });
    if (invalid) return res.status(400).json({ invalidStack: invalid, message: 'Invalid email or phone' });

    authSv.signup(email, phone, fullName, password, (err, user) => {
        if (err) {
            if (err instanceof CustomError && err.paramInfo.variable === 'password')
                return res.status(400).json({ message: 'Missing password' });

            return res.status(500).json({ message: 'Server error' });
        }
        return res.status(200).json({ created: user })
    });
}

const changePassword = async (req, res) => {
    const { id } = req.tokenPayload;
    const { oldPassword, newPassword } = req.body;

    const isVerified = await passwordSv.verify(id, oldPassword);
    if (!isVerified) return res.status(401).json({ message: 'Incorrect old password' });

    passwordSv.generate(id, newPassword, (err) => {
        if (err) {
            if (err instanceof CustomError && err.paramInfo.variable === 'password')
                return res.status(400).json({ message: 'Missing new password' });

            return res.status(500).json({ message: 'Server error' });
        }
        return res.status(200).json({ message: 'Ok' })
    });
}

const refreshAccessToken = async (req, res) => {
    const authHeader = req.headers['x-refresh-token'];
    const refreshToken = authHeader && authHeader.split(' ')[1];

    tokenSv.refreshAccessToken(refreshToken, (err, accessToken) => {
        if (err) {
            if (err instanceof CustomError && err.paramInfo.variable === 'tokenPair')
                return res.status(400).json({ message: 'Missing refresh token' });

            if (err instanceof CustomError && err.name === 'TokenNotFoundError' && err.paramInfo.variable === 'tokenPair')
                return res.status(404).json({ message: 'Invalid refresh token' });

            return res.status(500).json({ message: 'Server error' });
        }
        return res.status(200).json({ accessToken })
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