const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
  title: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: String, required: true },
  tags: { type: String, required: true },
});

module.exports = {
  schema,
  model: mongoose.model("Publication", schema),
};
