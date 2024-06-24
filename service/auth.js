const jwt = require('jsonwebtoken')
const secretKey = "Mridul@Maikhuri$123"

function setUser(user) {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email   
    }, secretKey)
}

function getUser(token) {
    if (!token) return null;
    try {
        return jwt.verify(token, secretKey);
    } catch (err) {
        return null;
    }
}

module.exports = {
    setUser,
    getUser
}