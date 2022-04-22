const taskSRouter = require('./tasks')
const usersRouter = require('./users')
const authRouter = require('./auth')
const apiRouter = (app) => {
    app.use('/tasks', taskSRouter)
    app.use('/users', usersRouter)
    app.use('/auth', authRouter)
}
module.exports = apiRouter