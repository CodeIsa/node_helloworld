
module.exports = function(){
    this.getEstudantes = function(connection,callback){
        let sql = 'select * from estudantes';
        connection.query(sql,callback);
    }

    this.getEstudantesId1 = function(connection,callback){
        let sql = 'select * from estudantes where idestudantes = 1';
        connection.query(sql,callback);
    }

    this.storeEstudante = function(estudante, connection, callback){
        connection.query('insert into estudantes set ?',estudante, callback);
    }

    return this;
}
