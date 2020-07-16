const router = require('express').Router();
const path= require('path');

module.exports = router.all('*', function (request, response) {
  console.log(`caught ${request.url} route.`, request.url);

  const filePath = path.resolve('dist/main-model-task/index.html');
  response.sendFile(filePath);
});
