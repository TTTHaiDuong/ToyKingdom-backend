import userServices from '../mongo-services/user.js';
import passport from '../middlewares/passport.js';
import auth from './auth.js';

const findOne = async (req, res) => {
    const userId = req.tokenPayload._id;
    const role = req.tokenPayload.role;
    const { _id } = req.query;

    const targetId = (role === 'admin' || role === 'owner') ? (_id || userId) : userId;

    userServices.findOne(targetId, null, (err, user) => {
        if (err) return res.status(500).json({ message: 'Server error' });

        if (user.role === 'owner' && role === 'admin' || user.role === 'admin' && user.id != userId)
            return res.status(401).json({ message: 'Access denied' });

        return res.status(200).json({ user });
    });
}

const findAll = (req, res) => {
    const { filter, page, limit, order } = req.query;
    const conditions = filter && JSON.parse(filter);

    userServices.findAll(conditions, order, null, page, limit, (err, users) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ users })
    });
}

const update = async (req, res) => {
    const { _id, attributes } = req.body;
    const { role } = req.tokenPayload;
    const { email, phone } = attributes;

    const invalid = await auth.validateRegisterInfo({ email: email, phone: phone });
    if ((email || phone) && invalid) return res.status(400).json({ invalidStack: invalid, message: 'Invalid email or phone' });
    if (!_id) return res.status(400).json({ message: 'Missing _id' });

    userServices.upsert(_id, attributes, async (err, user) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ updated: user })
    });
}

const destroy = async (req, res) => {
    const { ids } = req.body;

    userServices.destroy(ids, (err, result) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ result: result });
    });
}

const changeRole = async (req, res) => {
    const { id, role } = req.body;

    if (passport.userRoles[role] === undefined || role === 'registered')
        return res.status(400).json({ message: 'Invalid role' });

    userServices.upsert(id, { role }, (err, updated) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ message: 'Ok' });
    });
}

export default {
    findAll,
    findOne,
    update,
    destroy,
    changeRole
}
