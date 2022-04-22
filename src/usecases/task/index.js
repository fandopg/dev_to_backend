const Task = require("../../models/tasks").model

const getAll = async() => {
    return await Task.find({}).exec()
}
const getByID = async(id) => {
    return await Task.findById(id).exec()
}
const create = async(taskData) => {
    const { title, description, completed } = taskData
    const newTask = new Task({
        title,
        description,
        completed
    })
    return await newTask.save()
}
const update = async(id, taskData) => {
    const { title, description, completed } = taskData
    const updatedTask = await Task.findByIdAndUpdate(id, {
        title,
        description,
        completed
    }, { new: true }).exec()
    return updatedTask
}
const del = async(id) => {
    return await Task.findByIdAndRemove(id).exec()
}
module.exports = { getAll, getByID, create, update, del }