//creaate file from input 

// console.log(process.argv);
const fs = require('fs');
const input = process.argv;           //DETAILS --> check bottom of this page
fs.writeFileSync(input[2], input[3]); //here we needed to use  writeFileSync()  instead of  writeFile()     ------idkwhy?


//------------------------------------------further we can do more things--------------------------------------------------------
//     const fs = require('fs');
//     const input = process.argv;
//     if (input[2] == 'add') {
//         fs.writeFileSync(input[3], input[4]);
//     } else if (input[2] == 'delete') {
//         fs.unlinkSync(input[3]);
//     }else{
//         console.log('invalid input')
//     }





// #######################################################################################################################################################
//                                      NODEJS  process.argv PROPERTY EXPLAINED
//
// NodeJS has a built-in module called process that provides you with the information related to your currently running NodeJS process.
// The process module is always available by default, so you don’t need to import it into your code using require() function.
//
// The process module has a property named argv that stores all the command-line arguments passed when you issue the command to start the NodeJS process.
//  The command-line arguments are stored as an array inside the property.
//
// the argv property contains a single array.
// The index 0 stores the path of your runnable Node program, while index 1 stores the path to the index.js script.
// The arguments you passed when you start the NodeJS process will be stored from index 2 onward.
//
// EXAMPLE:-
//   console.log(process.argv);  
//
// if i run this, with  $node index.js    --------------------->  [
//                                                                 '/Users/nsebhastian/.nvm/versions/node/v16.3.0/bin/node',
//                                                                 '/Users/nsebhastian/Desktop/test/index.js'
//                                                               ]
//
// and if i run this, with  $node index.js saurav devloper  -------------------->[
//                                                                                '/Users/nsebhastian/.nvm/versions/node/v16.3.0/bin/node',
//                                                                                '/Users/nsebhastian/Desktop/test/index.js',
//                                                                                'saurav',
//                                                                                'developer'
//                                                                              ]
//
// ########################################################################################################################################################
