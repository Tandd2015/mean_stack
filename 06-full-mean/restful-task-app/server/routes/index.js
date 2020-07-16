const router = require('express').Router();
const apiRouter = require('express').Router();

const catchAllRoutes = require('./catch-all.routes');
const TaskRoutes = require('./task.routes');
const TaskzRoutes = require('./taskz.routes');

router
  .use('/tasks', TaskRoutes)
  .use('/taskz', TaskzRoutes);

module.exports = apiRouter.use('/api', router).use(catchAllRoutes);
