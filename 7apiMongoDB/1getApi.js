const express = require('express');
const app = express();

const dbConnect = require('./0connectToDb');     //we just get connected to our database   //imported dbconnect fn

//remember our usual routing
// app.get('/',(req,resp)=>{
//     resp.send({  name:"saurav" })
// });
// app.listen(5000);


//get api method      ---->used to get/read  data, from database, and then serve it to user  
app.get('/',async (req,resp)=>{
    let data = await dbConnect();
    data = await data.find({}).toArray();
    console.log(data);
    // resp.send({  name:"saurav" })
    resp.send(data);                            // and this is our GET API
});

app.listen(5000);

