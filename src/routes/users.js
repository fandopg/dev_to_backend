const express = require('express');
const user = require('../usecases/user');
const router = express.Router();
// const { authHandler } = require('../middlewares/authHandlers');

router.get("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const retrievedUser = await user.getById(id)
        res.json({ succes: true, payload: retrievedUser });
    } catch (error) {
        next(error)
    }
})
router.post("/", async(req, res, next) => {
    try {
        const { firstName, email, password, tasks } = req.body;
        const userCreated = await user.create(firstName, email, password, tasks);
        res.json({
            succes: true,
            message: "user created",
            payload: userCreated
        });
    } catch (error) {
        next(error);
    }
})
module.exports = router;