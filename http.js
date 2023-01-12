const http = require('http');
const path = require('path');
const fs = require('fs');


//create server
const server = http.createServer((req, res) => {
    if(req.url == '/'){
        fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type' : 'text/html' });
            res.write(data);


        });





    }
    if(req.url == '/user'){
        res.write("Welcome to the user page");
    }
    res.end();
});

//listen

server.listen(3000, () => {
    console.log('Server is up and running.')
});


