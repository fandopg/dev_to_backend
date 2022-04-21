const express = require("express");
const task = require("../usecases/task");
const router = express.Router();
router.get("/", async(req, res, next) => {
    try {
        const tasks = await task.getAll();
        res.json({
            success: true,
            payload: tasks
        })
    } catch (error) {
        next(error)
    }
})
router.post("/", async(req, res, next) => {
    try {
        const { title, description, completed } = req.body
        const taskCreated = await task.create({ title, description, completed })
        res.json({
            success: true,
            message: "Task created successfully",
            payload: taskCreated
        })
    } catch (error) {
        next(error)
    }
})
module.exports = router