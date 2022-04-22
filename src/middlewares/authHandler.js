const jwt = require('../lib/jwt');
const autHhandler = (req, res, next) => {
    try {
        const { token } = req.headers;
        const verifiedToken = jwt.verify(token, 'secret');
        req.params.tokenPayload = verifiedToken;
        next()
    } catch (error) {
        console.log('error')
        res.status(401).json({
            success: false,
            message: 'Invalid token'
        })
    }
}
module.exports = { autHhandler }