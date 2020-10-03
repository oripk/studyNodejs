var fs = require('fs');
var defaultDirectory = './public/html/'

function readFilelist (req, res) {
    fs.readdir('./public/html',(err, filelist) => {
        if (err){
            return console.log(err);
        }
        res.render('index', {
            filelist : filelist
        });
    });
};

function createDocument(req, res, data){	
	
	fs.writeFile(defaultDirectory + data.title, data.content, (err) => {
		if(err) res.render(err);
		console.log(data);
		readFilelist(req, res);
	})
};

exports.createDocument = createDocument;
exports.readFilelist = readFilelist;