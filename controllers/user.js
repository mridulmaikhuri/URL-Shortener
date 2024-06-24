const user = require('../models/user')
const { setUser } = require('../service/auth')

const createNewUser = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({success: false})
    }
    try {
        const entry = await user.create({
            name,
            email,
            password
        });
        const token = setUser(entry)
        res.cookie("uid", token)

        return res.status(201).json({success: true})
    } catch (error) {
        return res.status(400).json({success: false});
    }
    

    
}

const handleUserLogin = async (req, res) => {
    const { email, password } = req.body
    const entry = await user.findOne({ email, password })

    if (!entry) return res.json({ success : false});

    const token = setUser(entry)
    res.cookie("uid", token)

    return res.json({success: true});
}

module.exports = {
    createNewUser,
    handleUserLogin
}