const express = require('express');
require('./config');                         //connected to Db
const Product = require('./products');       //implemented schemas from here

const app =express();

app.use(express.json());                    //this ll automatically convert the data(dt ll come through req) INTO json

// app.post('/create',(req,resp)=>{         //creating normal server route
//     console.log(req.body);
//     resp.send('done')
// });

app.post('/create', async (req,resp)=>{
    let data = new Product(req.body);
    const result = await data.save();       //this ll save data(dt ll come through req), to our database in expected collection which we hv mentioned in schema file
    console.log(result);
    resp.send(result)
});                                         //this is our post API

app.get('/getList', async (req,resp)=>{
    let data = await Product.find();
    console.log(data);
    resp.send(data)                         //this is our get API
});                                        

app.listen(5000);  