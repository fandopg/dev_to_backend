const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({
    firstName: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
})
module.exports = {
    schema,
    model: mongoose.model('User', schema),
}