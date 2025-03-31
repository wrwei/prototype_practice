// import http module
const http = require('http');
const fs = require('fs');

// const url = require('url');

const server = http.createServer((request, response) => {

    let response_text = fs.readFileSync('./table.html');
    response.end(response_text);

});

server.listen(9000, () => {
    console.log('HTTP server started, listening to port 9000...');
});
