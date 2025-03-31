const http = require('http');

// const url = require('url');

const server = http.createServer((request, response) => {

    //response code
    response.statusCode = 200;

    //set header and charset for Chinese contents
    response.setHeader('content-type','text/html;charset=utf-8');
    response.setHeader('Server','node.js');

    //get request method
    let method = request.method;

    //get path name
    let pathname = new URL(request.url, 'http://127.0.0.1').pathname;

    if(method === 'GET' && pathname === '/login') {
        response.write('Login page loaded');
        response.end();
    }else if(method === 'GET' && pathname === '/reg') {
        response.end('Registration page loaded');
    }else {
        response.statusCode = 404;
        response.statusMessage = "Page Not Found"
        response.end('end');
    }
});

server.listen(9000, ()=>{
    console.log('HTTP server started, listening to port 9000...');
});
