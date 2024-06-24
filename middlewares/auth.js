const { getUser } = require('../service/auth');

async function isUserLoggedIn(req, res, next) {
    try {
        const token = req.cookies?.uid;

        if (!token) {
            console.log('No token found, redirecting to login');
            return res.redirect('/login');
        }

        const user = await getUser(token); 
        if (!user) {
            console.log('Invalid token, redirecting to login');
            return res.redirect('/login');
        }

        //console.log(user);
        req.user = user;
        next();
    } catch (error) {
        console.error('Error in isUserLoggedIn middleware:', error);
        return res.redirect('/login');
    }
}

module.exports = {
    isUserLoggedIn
};