let connection = require('./../config/db')

class UserInscription {
  static create(nom, prenom, ville, email, motDePasse, date_inscription, fcb){
    // pas oublié le , après la fin de insert ==> date_inscription =?', [nom,prenom,ville,email,motDePasse, new Date()], (error,result)=>{
    connection.query('INSERT INTO users SET nom=?, prenom=?, ville=?, email=?, motDePasse=?, date_inscription =?', [nom,prenom,ville,email,motDePasse, new Date()],  (err,result) => {

      if (err) throw err;

      fcb(result);


  })

}

static selectProfil(id, cb){

  connection.query(" SELECT * FROM users WHERE id =?", [id],  (err,result)=>{
    if (err) throw console.error()
    cb(result)
  })
}

  static deleteProfil(id, cb){

    connection.query('DELETE FROM users WHERE id =?',[id], (err,result)=>{
      console.log(id);
      if (err) throw console.error()
      cb(result)
    })
  }

  static updateProfil(nom, prenom, ville, email, motDePasse, id, cb){
    console.log('nom=' + nom);

    connection.query(" UPDATE users SET nom=?, prenom=?, ville=?, email=?, motDePasse=?, date_MiseAjour =? WHERE id = ?", [nom,prenom,ville,email,motDePasse, new Date(), id],  (err,result)=>{
      if (err) throw console.error()
      cb(result)
    })
  }

}

module.exports = UserInscription
