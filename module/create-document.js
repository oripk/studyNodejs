var fs = require('fs');

fs.readdir('./public/text', (err, filelist) => {
    console.log(filelist);
});