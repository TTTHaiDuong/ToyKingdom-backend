import createUser from '../services/user/sign-up'

const signUp = async (req, res) => {
    const { email, phone, fullName, password } = req.body;

    createUser(email, phone, fullName, password, 'user', (err) => {
        if (err) {
            if (err.name == 'InvalidEmailFormatError') return res.status(401).json({ message: 'Invalid email format' });
            if (err.name == 'InvalidPhoneNumberFormatError') return res.status(401).json({ message: 'Invalid phone number format' });
            if (err.name == 'InvalidPasswordError') return res.status(401).json({ message: 'Invalid password' });
            return res.status(500).json({ message: 'Server error' });
        }
    });

    return res.status(200).json({ message: 'Ok' });
}

export default signUp;
