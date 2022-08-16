// we made this index4.js page ,just to learn middleWare fns ,coz i don wanna make mess in index.js
//here we gonna implement ROUTE LEVEL MIDDLEWARE :
//with this kind middleWare, we gonna apply middleware on a perticular route ,OR  on a desired group of routes  //(rather wht we hv seen  in application level middleware,where 1 middleware blocking all routes)
// suppose we hv 40 routes in our website ,but we need to apple  middleWare in 2 or 3 routes only ,how we gonna do that:-

//////////////////////////////////////////// MAKE MIDDLEWARE IN A DIFFERENT FILE //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////  THEN  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////  APPLY MIDDLEWARE ON A GROUP OF ROUTE:- //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const express = require('express');     
const app = express();

const reqModi = require('./middleWare');                      //reqModi is middleware fn ,which we stored in a file,n here we just imported that here...it made our code ,easy to manage ,looks good ;)
                                               
app.get('/', function(req, res){                        
    res.send("Hello from index2");                    
 });

app.get('/new',reqModi, function(req, res){                   //middleWare is applied only on this route /////////////
    res.send("Hello new");                                    //user cant be able to access this route, untill next fn being called (untill authentication is done succesfully) in above code snippet
 });                                                          // http://localhost:3001/new?age=19

 app.get('/new2', function(req, res){                   
    res.send("Hello new2");                             
 });


 app.get('/route01',reqModi, function(req, res){                   
    res.send("something to type here idkn dkasndkdsakldna");                             
 });
 app.get('/route02',reqModi, function(req, res){                   
    res.send("something to type here idkn dkasndkdsakldna");                             
 });
 app.get('/route03',reqModi, function(req, res){                   
    res.send("something to type here idkn dkasndkdsakldna");                             
 });
 app.get('/route04', function(req, res){                   
    res.send("something to type here idkn dkasndkdsakldna");                             
 });
 app.get('/route05',reqModi, function(req, res){                   
    res.send("something to type here idkn dkasndkdsakldna");                             
 });


 

app.listen(3004);