const mongoose = require('mongoose');
const connect = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(
            `mongodb+srv://zzinue:f4EaH0f6B0UDqaqr@cluster0.g7pem.mongodb.net/todoTasks?retryWrites=true&w=majority`
        )
        const db = mongoose.connection
        db.on('open', () => {
            console.log('Successfully connected to MongoDB');
            resolve(mongoose)
        })
        db.on('error', (err) => {
            console.log('error connecting to MongoDB', err);
            reject(err)
        })
    })
}
module.exports = { connect }