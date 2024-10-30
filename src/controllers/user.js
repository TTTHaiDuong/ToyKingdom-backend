import userServices from '../services/user';

const findOne = async (req, res) => {
    const userId = req.tokenPayload.id;
    const role = req.tokenPayload.role;
    const { id } = req.query;

    const targetId = (role === 'admin' || role === 'owner') ? (id || userId) : userId;

    userServices.findOne(targetId, null, (err, user) => {
        if (err) return res.status(500).json({ message: 'Server error' });

        if (user.role === 'owner' && role === 'admin' || user.role === 'admin' && user.id != userId)
            return res.status(401).json({ message: 'Access denied' });

        return res.status(200).json({ user: user, message: 'Ok' });
    });
}

const findAll = (req, res) => {
    const { filter, page, limit } = req.query;
    const conditions = filter && JSON.parse(filter);

    userServices.findAll(conditions, page, limit, (err, users) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ users: users, message: 'Ok' })
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

const destroy = async (req, res) => {

}

const changeRole = async (req, res) => {
    const { id, role } = req.body;

}

export default {
    findAll,
    findOne,
    update,
    destroy
}
