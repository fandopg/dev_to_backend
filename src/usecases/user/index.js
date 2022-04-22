const User = require('../../models/user').model
const encrypt = require('../../lib/encrypt')

const getById = async(id) => {
    return await User.findById(id).exec()
}
const getByEmail = async(email) => {
    return await User.findOne({ email }).exec()
}
const authenticate = async(user, password) => {
    const hash = user.password
    return await encrypt.veryfyPassword(password, hash)
}
const create = async(firstName, email, password, tasks) => {
    const hash = await encrypt.hashPassword(password);
    const newUser = new User({
        firstName,
        email,
        password: hash,
        tasks
    })
    return await newUser.save();
}
module.exports = {
    getById,
    getByEmail,
    authenticate,
    create
}