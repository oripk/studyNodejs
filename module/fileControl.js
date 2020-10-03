var fs = require('fs');

function readFilelist (req, res) {
    fs.readdir('./public/text',(err, filelist) => {
        if (err instanceof Error){
            return 'err';
        }
        res.render('index', {
            filelist : filelist
        });
    });
};

exports.readFilelist = readFilelist;