const { TaskzController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/', TaskzController.index)
  .post('/', TaskzController.create)
  .get('/:taskx_id', TaskzController.show)
  .put('/:taskx_id', TaskzController.update)
  .delete('/:taskx_id', TaskzController.destroy);
