const router = require('express').Router();

const path = require('path');

module.exports = router.all('*', function(request, response) {

  console.log('Entering this Route: ', request.url);

  const filePath = path.resolve('dist/project-product-management/index.html');

  response.sendFile(filePath);
});
