const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  role: { type: String, required: false, default: "user" },
});

module.exports = {
  schema,
  model: mongoose.model("User", schema),
};
