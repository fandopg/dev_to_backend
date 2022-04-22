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
router.get("/:id", async(req, res, next) => {
    const { id } = req.params
    const payload = await task.getByID(id)
    res.json({ success: true, payload })
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
router.put("/:id", async(req, res, next) => {

    try {
        const { id } = req.params
        const { title, description, completed } = req.body
        const taskUpdated = await task.update(id, { title, description, completed })
        res.json({
            success: true,
            message: "Task updated successfully",
            payload: taskUpdated
        })
    } catch (error) {
        next(error)
    }
})
router.delete("/:id", async(req, res, next) => {
    try {
        const { id } = req.params
        const taskDeleted = await task.del(id)
        res.json({
            success: true,
            message: "Task deleted successfully",
            payload: taskDeleted
        })
    } catch (error) {
        next(error)
    }
})
module.exports = router