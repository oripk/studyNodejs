var fs = require('fs'); 


fs.readdir('../text', (err, filelist) => {
    console.log(filelist);
})

fs.readFile('../text/1','utf8',(err,data) => {
    console.log(data); 
});
