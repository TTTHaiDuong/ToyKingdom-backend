import authServices from '../services/auth';
import passwordServices from '../services/password';
import tokenServices from '../services/token';
import sendEmail from '../services/send-email';
import validator from 'validator';

const validateRegisterInfo = async ({ email, phone }, callback) => {
    try {
        if (!email && !phone) {
            if (callback) return callback(['Missing email or phone']);
            throw err;
        }

        const errors = [];

        if (email && !validator.isEmail(email)) errors.push('Invalid email');
        if (phone && !validator.isMobilePhone(phone, 'any')) errors.push('Invalid phone');

        const existing = await db.User.findOne({
            where: {
                ...(email && (uniqueEmail || uniqueEmail === undefined) && { email: email }),
                ...(phone && (uniquePhone || uniquePhone === undefined) && { phone: phone })
            }
        });

        if (existing) {
            if (email && email === existing.email) errors.push('Existing email');
            if (phone && phone === existing.phone) errors.push('Existing phone');
        }

        const result = errors.length !== 0 ? errors : null;
        if (callback) return callback(null, result);
        return result;
    }
    catch (err) {
        if (callback) return callback(err, null);
        throw err;
    }
}

const login = async (req, res) => {
    const { email, phone, password } = req.body;

    if (!email && !phone) return res.status(400).json({ message: 'Missing email or phone' });
    if (!password) return res.status(400).json({ message: 'Missing password' });

    authServices.login({ email, phone }, password, (err, tokenPair) => {
        if (err) {
            if (err instanceof CustomError && err.paramInfo.variable === 'emailOrPhone')
                return res.status(404).json({ message: `Not existing ${email ? 'email' : 'phone'}` });

            if (err instanceof CustomError && err.paramInfo.variable === 'password')
                return res.status(401).json({ message: 'Incorrect password' });

            return res.status(500).json({ message: 'Server error' });
        }
        return res.status(200).json({ ...tokenPair });
    });
}

const logout = async (req, res) => {
    const { id } = req.tokenPayload;

    authServices.logout(id, (err) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ message: 'Ok' });
    });
}

const signup = async (req, res) => {
    const { email, phone, fullName, password } = req.body;

    const invalid = await validateRegisterInfo({ email, phone });
    if (invalid) return res.status(400).json({ invalidStack: invalid, message: 'Invalid email or phone' });

    authServices.signup(email, phone, fullName, password, (err, user) => {
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

    const isVerified = await passwordServices.verify(id, oldPassword);
    if (!isVerified) return res.status(401).json({ message: 'Incorrect old password' });

    passwordServices.generate(id, newPassword, (err) => {
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

    tokenServices.refreshAccessToken(refreshToken, (err, accessToken) => {
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
    validateRegisterInfo,
    login,
    logout,
    signup,
    changePassword,
    refreshAccessToken
}