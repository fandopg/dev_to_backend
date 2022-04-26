const express = require("express");
const publication = require("../usecases/publication");
const { authHandler } = require("../middlewares/authHandlers");
const { adminHandler } = require("../middlewares/permissionHandlers");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const publications = await publication.getAll();

    res.json({
      success: true,
      payload: publications,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const payload = await publication.getById(id);

  res.json({ success: true, payload });
});

router.post(
  "/",
  /* authHandler ,*/ async (req, res, next) => {
    try {
      const { title, image, content, date, tags } = req.body;

      const publicationCreated = await publication.create({
        title,
        image,
        content,
        date,
        tags,
      });

      res.json({
        success: true,
        message: "Post creado",
        payload: publicationCreated,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/:id",
  /* authHandler, */ async (req, res, next) => {
    try {
      const { id } = req.params;

      const { title, image, content, date, tags } = req.body;

      const publicationUpdated = await publication.update(id, {
        title,
        image,
        content,
        date,
        tags,
      });

      res.json({
        success: true,
        message: `Post ${id} actualizado`,
        payload: publicationUpdated,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:id",
  /* authHandler, */ async (req, res, next) => {
    try {
      const { id } = req.params;

      const publicationUpdated = await publication.patch(id, { ...req.body });

      res.json({
        success: true,
        message: `Post ${id} actualizado`,
        payload: publicationUpdated,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  /* authHandler, */ async (req, res, next) => {
    try {
      const { id } = req.params;

      const publicationDeleted = await publication.del(id);

      res.json({
        success: true,
        message: `Post ${id} eliminado`,
        payload: publicationDeleted,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
