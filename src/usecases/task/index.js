const Task = require("../../models/tasks").model

const getAll = async() => {
    return await Task.find({}).exec()
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
module.exports = { getAll, create }