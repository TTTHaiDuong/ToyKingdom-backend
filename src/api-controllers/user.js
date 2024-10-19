import userServices from '../services/user/get-user'

/**
 * Yêu cầu đăng nhập
 * @param {{id: Number}}
 * @return {{}}
 */
const getOneUser = async (req, res) => {
    const { userId } = req.query;

    if (userId) {
        userServices.getOneUser(userId, (user, err) => {
            if (user) {
                return res.render('user-info.ejs', { user: JSON.stringify(user, null, 2) })
                //return res.status(200).json({ user, message: 'Ok' });
            }
            else return res.status(500).json({ message: 'Server error' });
        });
    }
    else {
        return res.status(401).json({ message: 'Not provided userId' });
    }
}

export default {
    getOneUser
}
