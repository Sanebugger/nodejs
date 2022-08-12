//The Node.js fs module (file system) allows you to work with the file system on your computer.

//Common use of fs module (CRUD): 1. Read files    -----> fs.readFile()
//                                2. Create files  -----> fs.appendFile() ,fs.open(), fs.writeFile()   allows you to create a file and add data. 
//                                3. Update files  -----> fs.appendFile() ,fs.writeFile()
//                                4. Delete files  -----> fs.unlink()
//                                5. Rename files  -----> fs.rename()

// -----------------------------------------------------------------------------------------------------------------------------------------------
// okay ,lets crreate a file (using fs module) :-
var fs = require('fs');

fs.writeFile('mynewfile.txt', 'Hello contenttt!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});