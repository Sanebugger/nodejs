// we made this index2.js page ,just to learn middleWare fns ,coz i don wanna make mess in index.js

/////////////////////////////////////////////////////APPLY MIDDLEWARE///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const express = require('express');     
const app = express();

            const reqModi = (req,resp,next)=>{                //here,reqModi fn is middleWare fn,taking 3 param- req,res,next
               if(!req.query.age)                             //here,only we write logic to check authentications n others........
               {
                  resp.send("please enter your age")
               }  
               else if(req.query.age < 18){
                   resp.send("you cant access the page")
               }
               else{
                  next();                                     //next fn let us use other routes below it 
               }
            }
            app.use(reqModi);                                 //app.use() MEANS it is application level mdilleware, MEANS it gonna block/check all routes present here in application


app.get('/', function(req, res){                        //user cant be able to access this route, untill next fn being called (untill authentication is done succesfully) in above code snippet
    res.send("Hello from index2");                      //http://localhost:3001/?age=19
 });
app.get('/new', function(req, res){                     //user cant be able to access this route, untill next fn being called (untill authentication is done succesfully) in above code snippet
    res.send("Hello new");                              // http://localhost:3001/new?age=19
 });
 app.get('/new2', function(req, res){                   //user cant be able to access this route, untill next fn being called (untill authentication is done succesfully) in above code snippet
    res.send("Hello new2");                             // http://localhost:3001/new2?age=50
 });

app.listen(3002);