const express = require("express");
const cors = require("cors");
const apiRouter = require("./src/routes");
const { errorHandler, logErrors } = require("./src/middlewares/errorHandler");
const db = require("./src/lib/db");
const config = require("./src/lib/config");
const app = express();
const port = config.app.port;

app.use(cors());

app.use(express.json());

apiRouter(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log(
    `La aplicacion ${config.app.name} se esta ejecutando en el puerto ${port}`
  );

  db.connect()
    .then(() => {
      console.log("DB conectada");
    })
    .catch((err) => {
      console.log("Error en la conexion con la DB:", err);
    });
});
