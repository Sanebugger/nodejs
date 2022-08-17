/////////////////////////////////////////in this page ,we gonna delete the data in database//////////////////////////////////////////////////

const dbConnect = require('./0connectMongoDb');         //we just get connected to our database   //imported dbconnect fn



const deleteData = async () =>{
    let data = await dbConnect();
    let result =  await data.deleteOne(                //this will delete the very first ( having name "mi4") document inside database.
        {name:'mi4'}
    );
    console.warn(result);
}
deleteData();
