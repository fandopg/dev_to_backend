const express = require("express");
const app = express();
const db = require("./src/lib/db");
const apiRouter = require("./src/routes");
const port = 3000

app.use(express.json());
apiRouter(app);

app.listen(port, () => {
    console.log(`Running on port: ${port}`);
    db.connect()
        .then(() => {
            console.log('DB connected')
        })
        .catch((err) => {
            console.log('DB connection error', err)
        })
})