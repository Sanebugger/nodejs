/////////////////////////////////////////in this page ,we gonna update the existing data in database//////////////////////////////////////////////////

const dbConnect = require('./0connectMongoDb');         //we just get connected to our database   //imported dbconnect fn



const updateData = async () =>{
    let data = await dbConnect();
    let result =  await data.updateOne(                //this will update "poco x3" TO "poco x3 pro"
        {name:'poco x3'},                     
        {
            $set:
            {    name:'poco x3 PRO'    }
        }
    );
    console.warn(result);
}
updateData();
