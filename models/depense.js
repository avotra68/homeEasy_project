
let connection = require('../config/db')

class Depense {
  static create(categories, date_depense, montant, idUser, cb){
    var dateJ = new Date(date_depense);
    var anneeJ = dateJ.getFullYear();
    var moisJ = (dateJ.getMonth())+1;
    // pas oublié le , après la fin de insert ==> date_inscription =?', [nom,prenom,ville,email,motDePasse, new Date()], (error,result)=>{
    connection.query('INSERT INTO depenses SET categories=?, date_depense=?, montant=?, annee=?, mois=?, idUser=?', [categories, date_depense, montant, anneeJ, moisJ, idUser], function (error,result) {
      if (error) throw error;

      cb(result);

    })
  }

   static all(idUser, cb){
     connection.query('SELECT * FROM depenses  WHERE idUser='+ idUser +'  ORDER BY date_depense DESC', (err, rows) =>{
       if(err) throw err
       cb(rows)
     })
   }

   static depenseAll(cb){
     connection.query('SELECT depenses.*, users.nom, users.prenom FROM depenses INNER JOIN users ON depenses.idUser=users.id ORDER BY date_depense DESC', (err, rows) =>{
       if(err) throw err
       cb(rows)
     })
   }



   static delete(id, cb){
     connection.query('Delete from depenses where id=?', [id], (err,result)=>{
       if (err) throw console.error()
       cb(result)
     })
   }

   static select(id, cb){
     connection.query('SELECT * FROM depenses where id=?', [id], (err,result)=>{
       if (err) throw console.error()
       cb(result)
     })
   }

/*
   static update(categories, date_depense, montant, cb){
     connection.query('UPDATE depenses set categories=?, date_depense=?, montant=? ', [categories, date_depense, montant], (err,result)=>{
       if (err) throw console.error()
       cb(result)
     })
   }*/

}


module.exports = Depense
