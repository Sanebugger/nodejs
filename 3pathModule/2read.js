//in this tutorial,we understand how to read a directory {by using readdir method of fs module} 
//                    and similarily, we can read a file {by using readfile method of fs module}     
//we will see alot such things in CURD OPERATION TUTORIAL :) peace

const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'filess');
console.log(dirpath);                           //-----> D:\node.js-SERVER\3pathModule\filess

//   fs.readdir(dirpath,(err,filess)=>{
//       console.log(filess)                         //-----> [ 'fil2.txt', 'Mfile0.txt', 'Mfile1.txt', 'Mfile2.txt', 'Mfile3.txt' ]
//   })

fs.readdir(dirpath,(err,filess)=>{
     filess.forEach((items)=>{
        console.log("file name is : ",items);        //------> file name is :  fil2.txt
    })                                               //        file name is :  Mfile0.txt
})                                                   //        file name is :  Mfile1.txt
                                                     //        file name is :  Mfile2.txt
                                                     //        file name is :  Mfile3.txt
