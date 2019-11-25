module.exports = function(app){
	app.get('/conteudoprogramatico', function (req, res) {

        let connection = app.config.dbConnection();
        let conteudoprogModel = app.app.models.conteudoprogModel;

        conteudoprogModel.getConteudoProg(connection, function(error,result){
            res.render('conteudoprogramatico/conteudoprogramatico',{conts:result}); //view/ejs
        })
	});
}