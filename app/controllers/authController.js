module.exports = function () {


    this.authenticate = function(app,req,res) {

        let usuario = req.body;

        req.assert("username", "Usuário é obrigatório").notEmpty();
        req.assert("password", "Senha é obrigatória").notEmpty();

        var erros = req.validationErrors();
        if (erros) {
            res.render('admin/login', { erros: erros, usuario: usuario });
            return;
        }

        let db = app.config.dbConnection();
        let usuarioModel = app.app.models.usuarioModel;

        usuarioModel.authenticate(usuario, db, function (error, result) {
            console.log(result);
            if(result){
                res.redirect('/');
                return;
            }            
            res.redirect('/login');
        });
    }

    this.storeUser = function(app,req,res) {

        let usuario = req.body;

        let db = app.config.dbConnection();
        let usuarioModel = app.app.models.usuarioModel;

        usuarioModel.storeUser(usuario, db, function (error, result) {
            console.log(error);
            res.redirect('/');
        });
    }
  
    return this;
}
  