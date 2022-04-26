const publicationsRouter = require("./publications");
const usersRouter = require("./users");
const authRouter = require("./auth");
const apiRouter = (app) => {
  app.use("/publications", publicationsRouter);
  app.use("/users", usersRouter);
  app.use("/auth", authRouter);
};
module.exports = apiRouter;
