const router = require('express').Router();
const apiRouter = require('express').Router();

const catchAllRoutes = require('./catchAllRoutes');
const taskRoutes = require('./taskRoutes');

router.use('/tasks', taskRoutes);

module.exports = apiRouter.use('/api', router).use(catchAllRoutes);

