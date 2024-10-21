import findUser from '../services/user/get-user';
import updateUser from '../services/user/update-user';
import tokenServices from '../services/token';

const getUserProfile = async (req, res) => {
    const { accessToken } = req.query;

    if (accessToken) {
        const decode = await tokenServices.verifyToken({ accessToken: accessToken });

        findUser({ id: decode.id }, 1, 1, (user, err) => {
            if (user) return res.status(200).json({ user: user[0], message: 'Ok' });
            else return res.status(500).json({ message: 'Server error' });
        });
    }
    else {
        return res.status(401).json({ message: 'No permission' });
    }
}

const getUsers_Admin = async (req, res) => {
    const { query, page, limit } = req.query;

    findUser(query, page, limit, (users, err) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        else return res.status(200).json({
            users: users,
            message: 'Ok'
        })
    });
}

const updateUserProfile = async (req, res) => {
    const accessToken = req.params.accessToken;
    const { email, phone, fullName, createdAt, updatedAt } = req.body;

    if (accessToken) {
        const decode = await tokenServices.verifyToken({ accessToken: accessToken });

        updateUser(decode.id, { email, phone, fullName, createdAt, updatedAt }, (err) => {
            if (err) {
                if (err.name == 'InvalidEmailFormatError') return res.status(401).json({ message: 'Invalid email format' });
                if (err.name == 'InvalidPhoneNumberFormatError') return res.status(401).json({ message: 'Invalid phone number format' });
                if (err.name == 'NoUserUpdatedError') return res.status(401).json({ message: 'No user updated' });
                return res.status(500).json({ message: 'Server error' });
            }
            else return res.status(200).json({ message: 'Ok' });
        });
    }
    else {
        return res.status(401).json({ message: 'No permission' });
    }
}

export default {
    getUserProfile,
    updateUserProfile,
    getUsers_Admin
}
