//mongoose is almost lyk mongodb,as we learned in previous lessons..
//with mongoose ,we can add more functionality to our mongo datatBase ,lyk now with mongoose ,we can specify/make schemas (only perticular specified entries to be allowed in DB)
//here ,we gonna see crud operation with nodejs and mongoose :

const mongus = require('mongoose');

mongus.connect('mongodb://localhost:27017/e-comm');

const productSchema = new mongus.Schema({
    name:String,
    price:Number,
    brand:String
})

                    const saveInDb = async () =>{
                        // const product = mongus.model('products',productSchema);
                        const product = mongus.model('colddrinks',productSchema);
                    
                        let data = new product({name:'slice',price:575,brand:"coke"});
                        const result = await data.save();
                        console.log(result);
                    }
                    saveInDb();

//similarily, we can updateInDb,deleteInDb, .......and so on others as well....basically we doing crud operation.....................

            //       const updateInDb = async () =>{
            //           const product = mongus.model('colddrinks',productSchema);
            //
            //           let data = await product.updateOne(
            //               {name:"fanta"},
            //               {$set:{name:"mirinda",price:0}}     
            //           )
            //           console.log(data);
            //       }
            //       updateInDb();


            //       const deleteInDb = async () =>{
            //           const product = mongus.model('colddrinks',productSchema);
            //           let data = await product.deleteOne(
            //               {name:"fanta"} 
            //           )
            //           console.log(data);
            //       }
            //       deleteInDb();


            //      const findInDb = async () =>{
            //          const product = mongus.model('colddrinks',productSchema);
            //          let data = await product.findOne(
            //              {name:"mirinda"} 
            //          )
            //          console.log(data);
            //      }
            //      findInDb();