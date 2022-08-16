// we made this index3.js page ,just to learn middleWare fns ,coz i don wanna make mess in index.js
//here we gonna implement ROUTE LEVEL MIDDLEWARE :
//with this kind middleWare, we gonna apply middleware on a perticular route ,OR  on a desired group of routes  //(rather wht we hv seen  in application level middleware,where 1 middleware blocking all routes)
// suppose we hv 40 routes in our website ,but we need to apple  middleWare in 2 or 3 routes only ,how we gonna do that:-

///////////////////////////////////////////APPLY MIDDLEWARE ON A SINGLE ROUTE:-//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
            //app.use(reqModi);                               //app.use() MEANS it is application level mdilleware, MEANS it gonna block/check all routes present here in application


app.get('/', function(req, res){                        
    res.send("Hello from index2");                    
 });
app.get('/new',reqModi, function(req, res){                   //middleWare is applied only on this route /////////////
    res.send("Hello new");                                    //user cant be able to access this route, untill next fn being called (untill authentication is done succesfully) in above code snippet
 });                                                          // http://localhost:3001/new?age=19
 app.get('/new2', function(req, res){                   
    res.send("Hello new2");                             
 });

app.listen(3003);