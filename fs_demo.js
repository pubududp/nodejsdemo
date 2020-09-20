const { timeStamp } = require('console');
const fs = require('fs');
const path = require('path');


//Create directory
fs.mkdir(path.join(__dirname,'/test'), {}, (err) =>{
    if(err) throw err;
    console.log("Folder created...");

});

//Create and write to file
fs.writeFile(
    path.join(__dirname, '/test' ,'test.txt'),
    'Hello world!',
    (err)=>{
    if(err) throw err ;
    console.log('Folder created...');
    console.log('File created...');

//Append to a file
fs.appendFile(
    path.join(__dirname,'/test','test.txt'),
    ' Updated to node.js!',
    (err)=>{
    if(err) throw(err);
    console.log('Appended to file!');
});

//Read file
fs.readFile(
    path.join(__dirname,'/test','test.txt'), 'utf8',
    (err, data) => {
    if(err) throw err;
    console.log(data);
});

 //Rename file   
 fs.rename(
    path.join(__dirname,'/test','test.txt'),
    path.join(__dirname,'/test','helloNode.txt'),
    (err)=>{
        if(err) throw err;
        console.log('File renamed ...');
    }
);


});






