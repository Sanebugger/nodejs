const express = require('express');     // Set express as Node.js web application
const app = express();
                     
                          app.set('view engine', 'ejs');// Set EJS as templating engine

         const path = require('path');
         const publicpath = path.join(__dirname,'public');
         // console.log(publicpath);     ---->D:\node.js-SERVER\5expressJS\public
         // console.log(__dirname);      ---->D:\node.js-SERVER\5expressJS

app.get('/', function(req, res){
   //let,when their is no req from user,then byDefault we response them below code:-
   res.send("Hello word!");
});

                          app.get('/home', (req, res)=>{
                             res.render('home');             // The render method takes the name of the HTML page to be rendered as input
                          });                                // This page should be in the views folder in the root directory.
      
                          app.get('/home2', (req, res)=>{    // This page should be in the views folder in the root directory.
                           var data = {name:'Akashdeep',
                                       hobbies:['playing football', 'playing chess', 'cycling']}
                          res.render('home2', {data:data}); 
                          }); 

app.get('/htmldata', function(req, res){ 
   res.send(`<h1>Hello word!</h1>
            <a href="/about">go to about page</a>`);  //serve html 
});

         app.use(express.static(publicpath));         //serve whole html file .....just type this url in browser -->http://localhost:3000/htmlfile.html
                                                                                   //                            -->http://localhost:3000/trending.html

app.get('/about', function(req, res){
//    console.log("request from user :",req.query.name)
   res.send("about page");
});
app.get('/jsondata', function(req, res){
   res.send({                                      //serve json data
    name:"saurav",
    email:"saur@gmail.com"
   });
});

app.listen(3000);