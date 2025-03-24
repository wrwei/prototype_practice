const http = require('http');

const url = require('url');

const server = http.createServer((request, response) => {
    let res = url.parse(request.url, true);

    let pathname = res.pathname;

    let query = res.query;
    
    let keyword = res.query.keyword;

    console.log(keyword);

    response.end('url');
    });

server.listen(9000, ()=>{
    console.log('HTTP server started!');
});
