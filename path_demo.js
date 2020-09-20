const path = require('path');

//File name
console.log(path.basename(__filename));

//Directory name
console.log(path.basename(__dirname));

//Path object
console.log(path.parse(__filename).ext);

//Concatenate paths
console.log(path.join(__dirname,'test','demo.html'));