const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.method);
    console.log(request.url);
    console.log(request.httpVersion);
    console.log(request.headers.host);
    response.setHeader('content-type','text/html;charset=utf-8');
    response.end('君子向阳而生');

});

server.listen(9000, ()=>{
    console.log('HTTP server started!');
});
