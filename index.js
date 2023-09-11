var http = require('http');

console.log("Startuje serwer...");

http.createServer(function (request, response){
    //tu jest funkcja createServer
    response.writeHead(418, {'Content-Type': 'text/html'});
    response.write("Jestem ImbryCzkiem");
    response.end();
}).listen(8080);