// ________________________________________________________________________________________________________________________
// CONNECTING TO THE DATABASE:-

const mongodb = require('mongodb');                       // Of course, to use MongoDB in code, we need to import the module
const MongoClient = mongodb.MongoClient;                  // Then, let's instantiate a client

//const MongoClient = require('mongodb').MongoClient;       ----->this one liner works same for above two

//The nodeJS server needs to know where to connect, so we'll supply it with a url and dbName:
const url = 'mongodb://localhost:27017';                  // Connection URL
const dbName = 'e-comm';                                  // Database Name

const client = new MongoClient(url);
    
/////////////////// connecting to the database :-
async function dbConnect(){
    let result = await client.connect();                  // Use the connect method to create a connection w/ the database
    
    let db = result.db(dbName);
    return db.collection('products');
}

module.exports = dbConnect;                            