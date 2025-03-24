const http = require('http');

const server = http.createServer((request, response) => {
    let body = '';
    request.on('data', chunk => {
        body += chunk;
    });
    response.setHeader('content-type','text/html;charset=utf-8');
    // response.end('君子向阳而生');
    request.on('end', () => {
        console.log(body);
        response.end('Response ended.')
    });

});

server.listen(9000, ()=>{
    console.log('HTTP server started!');
});
