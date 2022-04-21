const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false }
})
module.exports = {
    schema,
    model: mongoose.model('Task', schema),
}