// post api method  ---->used to enter new data, in database (making new entry in database) 
//                  --->BUT ,From where do we get new data from? ---> from user, (for now, we r using postman for the same purpose)
//                                                                    assume postman retrieved data as ,data from frontend/user  ..


const express = require('express');
const app = express();

const dbConnect = require('./0connectToDb');                                                       //we just get connected to our database   //imported dbconnect fn

               app.use(express.json());        //--------------->to retrieve postman sent data
                                               //--------------->in similar manner, we consume data from react,vew


// app.post('/',(req,resp)=>{                                                                         //get and post method cn hv same route
//                console.log(req.body);       //--------------->to console postman retrieved data

//                //till now ,we consumed data from postman/ similarily from react,frontend user
//                //now ,we just need to save these retrieved data to our database
//                //for that ,we hv been already seen .insertOne method in 6mongoDB directory

//     resp.send({  name:"saurav" });
// })


app.post('/',async (req,resp)=>{                                                                         //get and post method cn hv same route
               console.log(req.body);       //--------------->to console postman sent data

               //till now ,we consumed data from postman/ similarily from react,frontend user
               //now ,we just need to save these retrieved data to our database
               //for that ,we hv been already seen .insertOne method in 6mongoDB directory
               let data = await dbConnect();
               let result = await data.insertOne(req.body);   //with this ,postman/react/frontend/user retrieved data got inserted/saved/posted inside our database
               resp.send(result);
})

app.listen(5002);
