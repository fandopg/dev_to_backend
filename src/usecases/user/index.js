const User = require("../../models/user").model;
const encrypt = require("../../lib/encrypt");

const getById = async (id) => {
  return await User.findById(id).exec();
};

const getByEmail = async (email) => {
  return await User.findOne({ email }).exec();
};

const authenticate = async (user, password) => {
  hash = user.password;

  return await encrypt.verifyPassword(password, hash);
};

const create = async (userName, email, password, publications) => {
  const hash = await encrypt.hashPassword(password);

  const user = new User({ userName, email, password: hash, publications });

  return await user.save();
};

module.exports = {
  getById,
  create,
  getByEmail,
  authenticate,
};
