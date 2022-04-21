const taskSRouter = require('./tasks')
const apiRouter = (app) => {
    app.use('/tasks', taskSRouter)
}
module.exports = apiRouter