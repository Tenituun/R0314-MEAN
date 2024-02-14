var http=require("http");
const { type } = require("os");

http.createServer(function(request, response){
    response.writeHead(200, {'conent-type': 'text/html'});
    if(request.url === "/helloworld"){
        response.write("Hello World!");
    } else if (request.url ===  "/homepage"){
        response.write("Tervetuoa kotisivulle!")
    } else {
        response.write("Kirjoita url perään joko /homepage tai /helloworld")
    }
    response.end(' Hello routes');
}).listen(8081);
console.log("yay, it works");