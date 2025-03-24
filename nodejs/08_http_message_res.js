const http = require('http');

// const url = require('url');

const server = http.createServer((request, response) => {

    response.statusCode = 200;
    response.setHeader('content-type','text/html;charset=utf-8');

    let method = request.method;

    let pathname = new URL(request.url, 'http://127.0.0.1').pathname;

    if(method === 'GET' && pathname === '/login') {
        response.end('登录页面');
    }else if(method === 'GET' && pathname === '/reg') {
        response.end('注册页面');
    }else {
        response.statusCode = 404;
        response.statusMessage = "Page Not Found"
        response.end('end');
    }
});

server.listen(9000, ()=>{
    console.log('HTTP server started, listening to port 9000...');
});
