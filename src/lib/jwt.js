const jsonwebtoken = require("jsonwebtoken")

const sign = async(payload) => {
    return await jsonwebtoken.sign(payload, 'secret', {
        expiresIn: '1h'
    })
}
const verify = async(token) => {
    return await jsonwebtoken.verify(token, 'secret')
}
module.exports = { sign, verify }