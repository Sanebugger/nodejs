//////////////////////////////////////////////in this page ,we gonna read data from database//////////////////////////////////////////////////


const dbConnect = require('./0connectMongoDb');         //we just get connected to our database   //imported dbconnect fn

// find the data available in database:-
dbConnect().then((resp)=>{

    resp.find({}).toArray().then((data)=>{
        console.warn(data);
    })
})
