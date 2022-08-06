const fs = require('fs');
const path = require('path');
// console.log(__filename);             ----------------> D:\node.js-SERVER\3pathModule\1path.js              {even it works without path or fs module}
// console.log(__dirname);              ----------------> D:\node.js-SERVER\3pathModule                       {even it works without path module}

// const dirKaPath = path.join(__dirname);   
// console.log(dirKaPath);                    -------> D:\node.js-SERVER\3pathModule

const dirKaPath2 = path.join(__dirname,'filess');   
// console.log(dirKaPath2);                   -------> D:\node.js-SERVER\3pathModule\filess
fs.writeFileSync('filess1.txt','simple text filess1');                         //------------>this will create file in this current directory only.
fs.writeFileSync(dirKaPath2 + '/fil2.txt','simple text fil2');                 //------------>this will create file in filess directory.


//******************AND IN THIS WAY ,WE HAVE HAD USED PATH MODULE TO SWITCH ACROSS DIRECTORIES,and created a file there.....****************************

// now,lets create multiple number of files in ,other directory (say,in filess folder):-

for (let i = 0; i < 4; i++) {
    fs.writeFileSync(dirKaPath2 + `/Mfile${i}.txt`,'this is a text file');      //it'll create 4 files,in filess folder :) n yayyyyyyyyyyyyyyy
}

