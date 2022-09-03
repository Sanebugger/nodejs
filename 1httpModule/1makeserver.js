//SERVER --> we create a server, to handle the request from client/frontend and serve response to them.  
//           A common task of a web server is to open a file on the server and return the content to the client.

//How to create a server using NodeJS?
// We will use the HTTP module of NodeJs, to send requests and receive responses in our server. 
// The http is one of the built-in packages of NodeJs, and it provides functions to create our server.

const htt =require ('http');
htt.createServer((req,resp)=>{

  resp.end('hello from server');
}).listen(5001);

// The first line of the code is used to import the HTTP module into our code. Next, the require() function in NodeJS is used to grab a package in our code.
//  It is similar to the import or include statement in other programming languages.
//  The require() function accepts a string as the name of the package and returns the package. 

// In the next line of the code, we created an http server using the createServer() function of the http module.
// The http.createServer() method turns your computer into an HTTP server.
// The http.createServer() method creates an HTTP Server object.
// The HTTP Server object can listen to ports on your computer and execute a function, a requestListener, each time a request is made.



// At the last line of code, we used the listen() method of the server object with the argument 5001, so the server will listen at port 5001.


//We can check the server by visiting the URL http://127.0.0.1:5001/
//The Server we made works fine, but it has only one route, i.e., http://127.0.0.1:5001/,
// But while building a website, we need to use different routes for pages like the about page, contact page, etc. 