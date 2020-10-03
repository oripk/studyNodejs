var fileControl = require('../module/fileControl');

module.exports = function(app){
	//to give readdir.js 
	app.get('/', function(req, res){
		fileControl.readFilelist(req, res);
	});
	
	app.get('/create', (req,res) => {
		create();
	});

	app.get('/contact', (req, res) => {
		res.render('contact')
	});

	app.get('/list', (req,res) => {
		res.render('list')
	});
}