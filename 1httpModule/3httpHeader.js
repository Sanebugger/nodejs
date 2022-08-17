//***************************************************  HTTP MODULE   ****************************************************************************/
// ---------------------------------------------------------------------------------------------------------------------------------------------//

// If the response from the HTTP server is supposed to be a plain text,then there is no need to include HTTP header with any such content type :

//        var http = require('http');
//        http.createServer(function (req, res) {
//          res.write('Hello World!'); //write a response to the client
//          res.end(); //end the response
//        }).listen(8080); //the server object listens on port 8080

// ---------------------------------------------------------------------------------------------------------------------------------------------//

// If the response from the HTTP server is supposed to be displayed as HTML,then
//  you should include an HTTP header with the correct content type:

//         var http = require('http');
//         http.createServer(function (req, res) {
//           res.writeHead(200, {'Content-Type': 'text/html'});      --> THIS LINE INCLUDES HTTP HEADER
//           res.write('Hello World!');
//           res.end();
//         }).listen(8080);

// ---------------------------------------------------------------------------------------------------------------------------------------------//
    
// If the response from the HTTP server is supposed to be json data,then
//  you should include an HTTP header with the correct content type:

const htt =require ('http');
htt.createServer((req,resp)=>{
    resp.writeHead(200,{'content-Type':'application\json'});   // --> THIS LINE INCLUDES HTTP HEADER

    //  var jsObj = {name:'saurav',emial:'jkahsdi.com'};      -------this is js object-------
    resp.write(JSON.stringify({name:'saurav',emial:'jkahsdi.com'})) 
   // { "name": "saurav", "emial": "jkahsdi.com" }        -------this is json ,which is what converted by JSON.stringify()-------
    resp.end();

}).listen(5003);
