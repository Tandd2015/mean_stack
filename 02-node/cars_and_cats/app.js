const http= require('http');
const fs= require('fs');
const server= http.createServer((request,response) =>{
    if(request.url === '/cars'){ // cars route es6
        fs.readFile('./views/cars.html', 'utf8',(errors, contents) =>{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cats'){ // cats route es5
        fs.readFile('./views/cats.html', 'utf8',(errors, contents) =>{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cars/new'){ // new car form route es6
        fs.readFile('./views/carForm.html', 'utf8', (errors, contents) =>{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/stylesheets/style'){ //css style file route es5
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/car1'){ // car1 image es5
        fs.readFile('./images/car1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/car2'){ // car2 image es6
        fs.readFile('./images/car2.jpg',(errors, contents) =>{
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/car3'){ // car3 image es6
        fs.readFile('./images/car3.jpg',(errors, contents) =>{
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/cat1'){ // cat1 image es6
        fs.readFile('./images/cat1.jpg',(errors, contents) =>{
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/cat2'){ // cat2 image es6
        fs.readFile('./images/cat2.jpg',(errors, contents) =>{
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/cat3'){ // cat3 image es6
        fs.readFile('./images/cat3.jpg',(errors, contents) =>{
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else{
        fs.readFile('./views/error.html', 'utf8', (errors, contents) => {
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write(contents);
        response.end();
        });
    };
});
server.listen(6789)
console.log("Listening on port 6789");
// tell your server which port to run on