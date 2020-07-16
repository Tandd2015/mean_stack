const express= require('express');
    serverPort= process.env.PORT || 8000;
    fs= require('fs');
    app= express();
    server=app.listen(serverPort, ()=> console.log(`Well Daniel meets himself again anew at the PORT${serverPort}`));

    app.use(express.json());

    require('./server/config/mongooseConfig');
    require('./server/config/routesConfig')(app);

