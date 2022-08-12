const fs = require('fs');
const path = require('path');

// fs.writeFileSync('fileinCrud.txt','this is normal test content inside fileincrud.txt file');   -----> create 1crud.js with given content in it

// const crudDirPath = path.join(__dirname,'crud');             //-----> path of crud directory
// fs.writeFileSync(`${crudDirPath}/fileinCrudDir.txt`,'this is normal test content inside fileincrud.txt file');  

const crudDirPath = path.join(__dirname,'crud');                //-----> path of crud directory
const fileInCrudDirPath = `${crudDirPath}/file_2_inCrudDir.txt` //-----> path of file inside crud directory    //we jsut extracted it to simplify our code
fs.writeFileSync(fileInCrudDirPath,'this is normal test content inside fileincrud.txt file'); 


//----------------till now ,we only created file in various directories, LETS perform READ operation-----------------------------------------------

            // fs.readFile(fileInCrudDirPath,(err,item)=>{
            //     console.log(item);                                          //----->   <Buffer 74 68 69 73 20 69 73 20 6e ......... bytes>
            // })                                                              // buffer ? -->temporary memory location 

            fs.readFile(fileInCrudDirPath,'utf8',(err,item)=>{
                console.log(item);                                             //----->  this is normal test content inside fileincrud.txt file
            })

//----------------LETS perform UPDATE operation----------------------------------------------------------------------------------------------------

            fs.appendFile(fileInCrudDirPath,'__________and this what we updated the file,with help of fs.appendfile() method',(err)=>{
                if(!err)console.log('file is updated.');
            }); 

//----------------LETS perform RENAME operation----------------------------------------------------------------------------------------------------
        fs.writeFileSync(`${crudDirPath}/file_3.txt`,'this is another txt file we created for learning RENAME operation'); // first ,let create a new file
        //----------------------------------we gonna rename above created file----------------------------------------------------------------
        fs.rename(`${crudDirPath}/file_3.txt`,`${crudDirPath}/renamed_file_3.txt`,(err)=>{
            if(!err)console.log('file is renamed.');
        })

//---------------DELETE Opertion--------------------------------------------------------------------------------------------------------------------
        fs.writeFileSync(`${crudDirPath}/file_4.txt`,'this is another txt file we created for learning DELETE operation'); // first ,let create a new file
        //----------------------------------we gonna rename above created file----------------------------------------------------------------
        // fs.unlinkSync(`${crudDirPath}/file_4.txt`)
        