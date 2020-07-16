const express = require("express");
const app = express();
app.get('/', (request, response) => {
    response.send("One small step for daniel One Large step for danielKind");
});
app.use(express.static(__dirname + "/static"));
app.listen(8000);

