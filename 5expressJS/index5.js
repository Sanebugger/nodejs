// we made this index5.js page ,just to learn middleWare fns ,coz i don wanna make mess in index.js
//here we gonna implement ROUTE LEVEL MIDDLEWARE :

///////////////////////////////////////////// a more SLICK WAY to apply middleware is :- ///////////////////////////////////////////////////////////////////////////////////////

const express = require('express');     
const app = express();

                      const routeMW = express.Router();                             //NEWLY ADDED

const reqModi = require('./middleWare');                      //reqModi is middleware fn ,which we stored in a file,n here we just imported that here...it made our code ,easy to manage ,looks good ;)

                      routeMW.use(reqModi);                                         //NEWLY ADDED

app.get('/', function(req, res){                              //this route ll not ask to authenticate 
    res.send("Hello from index2");                    
 });

app.get('/new',reqModi, function(req, res){                   //middleWare is applied only on this route /////////////
    res.send("Hello new");                                    //user cant be able to access this route, untill next fn being called (untill authentication is done succesfully) in above code snippet
 });                                                          // http://localhost:3001/new?age=19

 app.get('/new2', function(req, res){                   
    res.send("Hello new2");                                   //this route ll not ask to authenticate 
 });


 routeMW.get('/route01', function(req, res){                   
    res.send("something to type here idkn dkasndkdsakldna");                             
 });
 routeMW.get('/route02', function(req, res){                   
    res.send("something to type here idkn dkasndkdsakldna");                             
 });
 routeMW.get('/route03', function(req, res){                   
    res.send("something to type here idkn dkasndkdsakldna");                             
 });
 app.get('/route04', function(req, res){                         //this route ll not ask to authenticate 
    res.send("something to type here idkn dkasndkdsakldna");                             
 });
 routeMW.get('/route05', function(req, res){                   
    res.send("something to type here idkn dkasndkdsakldna");                             
 });


                        app.use('/',routeMW);                                        //NEWLY ADDED -- important --


 app.listen(3005);