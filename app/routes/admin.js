module.exports = function(app){
    app.post('/estudante/salvar',function(req,res){
        let estudante = req.body;
		let connection = app.config.dbConnection();
		let estudantesModel = app.app.models.estudantesModel;

		estudantesModel.storeEstudante(estudante, connection, function (error, result) {
			res.redirect('/estudantes');
		});
	});
	
	app.post('/conteudoProgramatico/salvar',function(req,res){
        let conteudo = req.body;
		let connection = app.config.dbConnection();
		let conteprogModel = app.app.models.conteudoprogModel;

		conteprogModel.storeConteudoProg(conteudo, connection, function (error, result) {
			res.redirect('/conteudoprogramatico');
		});
	})
	
	app.post('/conteudoProgramatico/excluir', function(req,res){
		let id = req.body.id;
		let connection = app.config.dbConnection();
		let deleteConteProgModel = app.app.models.conteudoprogModel;

		deleteConteProgModel.deleteConteudoProg(id, connection, function(error, result) {
			res.redirect('/conteudoprogramatico');
		});
	})
}