var http = require('http')
// include external module
var dt = require('./demo_module'); 

// creates the http server
http.createServer(function (req, res){
    // write the header of the request,what kind of data is  to be displayed
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("the current datetime is: " + dt.myDateTime() );
    res.end('Hello World');
}).listen(8000);