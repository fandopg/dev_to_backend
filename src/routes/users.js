const express = require("express");
const user = require("../usecases/user");
const { authHandler } = require("../middlewares/authHandlers");

const router = express.Router();

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const retrievedUser = await user.getById(id);
    res.json({
      success: true,
      payload: retrievedUser,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { userName, email, password, publications } = req.body;

    const userCreated = await user.create(
      userName,
      email,
      password,
      publications
    );

    res.json({
      success: true,
      message: "Usuario creado",
      payload: userCreated,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
