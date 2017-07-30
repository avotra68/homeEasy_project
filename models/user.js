let connection = require('./../config/db')

class UserInscription {
  static create(nom, prenom, ville, email, motDePasse, date_inscription, fcb){
    // pas oublié le , après la fin de insert ==> date_inscription =?', [nom,prenom,ville,email,motDePasse, new Date()], (error,result)=>{
    connection.query('INSERT INTO users SET nom=?, prenom=?, ville=?, email=?, motDePasse=?, date_inscription =?', [nom,prenom,ville,email,motDePasse, new Date()],  (err,result) => {

      if (err) throw console.error();

      fcb(result);


  })

})


module.exports = UserInscription
