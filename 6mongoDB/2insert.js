//////////////////////////////////////////////in this page ,we gonna insert data from database//////////////////////////////////////////////////

const dbConnect = require('./0connectMongoDb');         //we just get connected to our database   //imported dbconnect fn



// const insert = () =>{
//     const whtever = dbConnect();
//     console.log(whtever);                    //this will return "Promise { <pending> }"  //we ll handle this promise below          
    
//     console.log("insert fn");
// }
// insert();



// const insert = async () =>{
//     const whtever = await dbConnect();
//     const result =  await whtever.insertOne(
//         {
//             name:'note5',brand:'vivo',category:'mobile'           //actual me ye data ,postman/user/react se aa rha hoga ,we ll see this in next tutorial(in 7apiMongoDB directory -->post method api)
//         }
//     )
// }
// insert();



// if you want to insert multiple documents in your collection in database 
const insert = async () =>{
    const whtever = await dbConnect();
    const result =  await whtever.insert(
        [
            {
                name:'mi4',brand:'xiomi',category:'mobile'           //actual me ye data ,postman/user/react se aa rha hoga ,we ll see this in next tutorial(in 7apiMongoDB directory -->post method api)
            },
            {
                name:'mi3',brand:'xiomi',category:'mobile'
            },
            {
                name:'mi6',brand:'xiomi',category:'mobile'
            },
            {
                name:'mi7',brand:'xiomi',category:'mobile'
            }
        ]
    );
}
insert();