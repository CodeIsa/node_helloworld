module.exports = function(){
    this.getConteudoProg = function(connection,callback){
        let sql = 'select * from conteudoprogramatico';
        connection.query(sql,callback);
    }

    this.storeConteudoProg = function(conteudoprogramatico, connection, callback){
        connection.query('insert into conteudoprogramatico set ?',conteudoprogramatico, callback);
    }
    
    this.deleteConteudoProg = function(id, connection, callback){
        connection.query('delete from conteudoprogramatico where idconteudoprogramatico = ?', id, callback);
    }


    return this;
}
