const {check, validationResult } = require('express-validator');

module.exports = function(app){
    app.post('/estudante/salvar',[
		//check('email').isEmail().withMessage(email)
	], (req,res) => {
		const errors = validationResult(req)
		let estudante = req.body;
		if(!errors.isEmpty()) {
			erros = errors.array();
			res.render('admin/insere_estudante', {erros:erros, estudante:estudante});
			return;
		}
		let connection = app.config.dbConnection();
		let estudantesModel = app.app.models.estudantesModel;

		estudantesModel.storeEstudante(estudante, connection, function (error, result) {
			if(error) {
				console.log("Erro");
				console.log(error);
			}
			res.redirect('/estudantes');
		});
	});
	
	app.post('/conteudoProgramatico/salvar',[
		check('conteudo').isLength({ min: 5}).withMessage('Este campo não deve estar vazio!(Mínimo de 5 caracteres..)'),
		check('data').isLength({ min:1}).withMessage('Data é obrigatório!')

	], (req,res) => {
		const errors = validationResult(req)
		let result = req.body;
		let connection = app.config.dbConnection();
		let conteprogModel = app.app.models.conteudoprogModel;
		if (!errors.isEmpty()) {
			erros = errors.array();
			conteprogModel.getConteudoProg(connection, function (error, result) {
				res.render('conteudoprogramatico/conteudoprogramatico', {erros: erros, conts:result});
			});
			
			//res.render('/conteudoprogramatico', {erros: erros, conts:result});
			return;
		}
		

		conteprogModel.storeConteudoProg(result, connection, function (error, result) {
			if (error) {
				console.log("Erro");
				console.log(error);
			}

			res.redirect('conteudoprogramatico/conteudoprogramatico');
		});
	});
	
	app.post('/conteudoProgramatico/excluir', function(req,res){
		let id = req.body.id;
		let connection = app.config.dbConnection();
		let deleteConteProgModel = app.app.models.conteudoprogModel;

		deleteConteProgModel.deleteConteudoProg(id, connection, function(error, result) {
			res.redirect('/conteudoprogramatico');
		});
	})

	app.post('/usuario/cadastrar',function(req,res){
		let controller = app.app.controllers.authController;
		//chama o controller
		controller.storeUser(app,req,res);
	})
}