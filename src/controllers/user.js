import user from '../services/user';

const findAll = (req, res) => {
    const { filter, page, limit } = req.query;

    user.findAll(filter, page, limit, (users, err) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ users: users, message: 'Ok' })
    });
}

const findOne = async (req, res) => {
    const { id, role } = req.tokenPayload;
}

const getUsers_Admin = async (req, res) => {
    const { query, page, limit } = req.query;

    findAll(query, page, limit, (users, err) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        else return res.status(200).json({
            users: users,
            message: 'Ok'
        })
    });
}

const update = async (req, res) => {
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
    findAll,
    findOne,
    update
}
