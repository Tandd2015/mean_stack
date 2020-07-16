const bodyParser= require('body-parser'),
    express= require('express'),
    serverPort= process.env.PORT || 8000,
    app= express(),
    server= app.listen(serverPort, ()=> console.log(`Daniels sever port is ${serverPort}`));

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/config/taskMongooseConfig');
require('./server/config/taskRoutes')(app);

