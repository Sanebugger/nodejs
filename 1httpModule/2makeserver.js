//To build routes for our server, we need to use the if statement of javascript to compare the route req.url with the string of the required route. 
// importing the http module of Node JS
const http = require('http')

// Creating the Http Server
const server = http.createServer((req, res) => {
    console.log(req.url)
    // Building the Routes for the server
    if (req.url === '/') {
        res.end("Welcome To Home Page")
    }
    else if (req.url === '/about') {
        res.end("Welcome to the About Page")
    }
    else if (req.url === '/contact') {
        res.end("Welcome to the Contact Page")
    }
    else if (req.url === '/blog') {
        res.end("Welcome to the Blog Page")
    }
    else {
        // If the rout will not match then it will show the following error
        res.writeHead(404)
        res.end('page not found')
    }
})
// Listening the server in the localhost and the port 5002
server.listen(5002)


//Till now, we have built a server that only returns text as a response. 
//But while building a website, we need to send our response in HTML or JSON text (majorly JSON u know).
