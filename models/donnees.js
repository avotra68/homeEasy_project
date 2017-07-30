
let connection = require('../config/db')

class Donnees {

   static selectDepense(idUser, cb){
     connection.query('SELECT annee, mois, categories, sum(montant) as montant FROM depenses WHERE idUser='+ idUser +' group by annee, mois, categories ORDER by  annee DESC, mois DESC, categories', (err, rows) =>{
       if(err) throw err
       cb(rows)
     })
   }

   static selectRevenu(idUser, cb){
     connection.query('SELECT annee, mois, categories, sum(montant) as montant FROM revenus  WHERE idUser='+ idUser +' group by  annee, mois, categories ORDER by  annee DESC, mois DESC, categories', (err, rows) =>{
       if(err) throw err
       cb(rows)
     })
   }


}


module.exports = Donnees
