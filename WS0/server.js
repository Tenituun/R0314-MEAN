var http = require("http");
http.createServer(function (request, response){
    // send the http header. http status 200 = ok
    // content type: text/plain    
    response.writeHead(200, {'Content-Type': 'text/html'});
    // send the response body as "Hello world"
    response.write('<h1>This is a test. </h1>');
    var data = "<table border='2'><tr><th>Eka osio</th><th style='background-color:lightblue;'>Toka osio</th></tr><tr><td>Ekan osion data</td><td><a href='https://www.laurea.fi/'>Tokan osion linkki laurean sivuille</a></td></tr></table>" 
    response.write(data);

    response.end('Hello World\n');
}).listen(8081);

// Creating a webserver like this is pretty convenient but writing everything into response tags is super cumbersome. There is probably a better way

console.log('server runnning at http://127.0.0.1:8081/')