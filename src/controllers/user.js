import userServices from '../services/user';
import { userRoles } from '../middlewares/passport';

const findOne = async (req, res) => {
    const userId = req.tokenPayload.id;
    const role = req.tokenPayload.role;
    const { id } = req.query;

    const targetId = (role === 'admin' || role === 'owner') ? (id || userId) : userId;

    userServices.findOne(targetId, null, (err, user) => {
        if (err) return res.status(500).json({ message: 'Server error' });

        if (user.role === 'owner' && role === 'admin' || user.role === 'admin' && user.id != userId)
            return res.status(401).json({ message: 'Access denied' });

        return res.status(200).json({ user });
    });
}

const findAll = (req, res) => {
    const { filter, page, limit } = req.query;
    const conditions = filter && JSON.parse(filter);

    userServices.findAll(conditions, page, limit, (err, users) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ users })
    });
}

const update = async (req, res) => {
    const { id, attributes } = req.body;
    const { role } = req.tokenPayload;

    const invalid = await validateRegisterInfo({ email: attributes.email, phone: attributes.phone });
    if (invalid) return res.status(400).json({ invalidStack: invalid, message: 'Invalid email or phone' });
    if (!id) return res.status(400).json({ message: 'Missing id' });

    userServices.upsert(id, attributes, async (err, user) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ updated: user })
    });
}

const destroy = async (req, res) => {
    const { ids } = req.body;

    userServices.destroy(ids, (err, deleted) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ deleted: deleted });
    });
}

const changeRole = async (req, res) => {
    const { id, role } = req.body;

    if (userRoles[role] === undefined || role === 'registered')
        return res.status(400).json({ message: 'Invalid role' });

    userServices.upsert(id, { role }, (err, updated) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ message: 'Ok' });
    });
}

export default {
    create,
    findAll,
    findOne,
    update,
    destroy,
    changeRole
}
