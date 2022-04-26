const Publication = require("../../models/publication").model;
const User = require("../../models/user").model;

const getAll = async () => {
  return await Publication.find({}).exec();
};

const getById = async (id) => {
  const publication = await Publication.findById(id).exec();

  return publication;
};

const create = async (publicationData) => {
  const { title, image, content, date, tags } = publicationData;

  const newPublication = new Publication({
    title,
    image,
    content,
    date,
    tags,
  });

  const savedPublication = await newPublication.save();

  return savedPublication;
};

const update = async (id, publicationData) => {
  const { title, image, content, date, tags } = publicationData;

  const updatedPublication = await Publication.findByIdAndUpdate(
    id,
    {
      title,
      image,
      content,
      date,
      tags,
    },
    { new: true }
  ).exec();

  return updatedPublication;
};

const patch = async (id, publicationData) => {
  return await Publication.findByIdAndUpdate(
    id,
    { ...publicationData },
    { new: true }
  ).exec();
};

const del = async (id) => {
  return await Publication.findByIdAndDelete(id).exec();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  del,
  patch,
};
