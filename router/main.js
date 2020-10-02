module.exports = function(app){
	app.get('/', function(req, res){
		res.render('index.html')
	});
	
	app.get('/contact', (req, res) =>{
		res.render('contact.html')
	});

	app.get('/list', (req,res) =>{
		res.render('list.html')
	});
}