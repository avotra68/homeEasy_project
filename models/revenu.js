let connection = require('../config/db')

class Revenu {
  static create(categories,date,montant,idUser, cb){
    var dateJ = new Date(date);
    var anneeJ = dateJ.getFullYear();
    var moisJ = (dateJ.getMonth())+1;
    // pas oublié le , après la fin de insert ==> date_inscription =?', [nom,prenom,ville,email,motDePasse, new Date()], (error,result)=>{
    connection.query('INSERT INTO revenus SET categories=?, date=?, montant=?, annee=?, mois=?, idUser=?', [categories,date,montant, anneeJ, moisJ, idUser], function (error,result) {
      if (error) throw error;

      cb(result);

    })
  }

  static all(idUser, cb){
    connection.query('SELECT * FROM revenus  WHERE idUser='+ idUser +'  order by date desc', (err, rows) =>{
      if(err) throw err
      cb(rows)
    })
  }

  static revenuAll(cb){
    connection.query('SELECT revenus.*, users.nom, users.prenom FROM revenus INNER JOIN users ON revenus.idUser=users.id ORDER by date DESC', (err, rows) =>{
      if(err) throw err;
      cb(rows)
    })
  }
     static delete(id, cb){
       connection.query('Delete from revenus where id=?', [id], (err,result)=>{
         if (err) throw err;
         cb(result)
       })
     }

     static deleteUserRevenu(idUser, cb){
       connection.query('Delete from revenus where idUser=?', [idUser], (err,result)=>{
         if (err) throw err;
         cb(result)
       })
     }


     static select(id, cb){
       connection.query('SELECT * FROM revenus where id=?', [id], (err,result)=>{
         if (err) throw err;
         cb(result)
       })
     }

/*
     static update(categories, dateRevenu, montant, cb){
       connection.query('UPDATE revenus set categories=?, date=?, montant=? ', [categories, dateRevenu, montant], (err,result)=>{
         if (err) throw console.error()
         cb(result)
       })
     }
*/
}


module.exports = Revenu
