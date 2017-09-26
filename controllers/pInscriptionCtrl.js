let connection = require('../config/db')
// une fonction par route
function inscriptionPostCtrl (request, response){
  
  connection.query('INSERT INTO users SET nom=?, prenom=?, ville=?,email=?, motDePasse=?, date_inscription =?', [request.body.nom, request.body.prenom, request.body.ville, request.body.email, request.body.motDePasse, new Date()], function (err,result) {
  if (err) throw console.error();
  console.log(result);

  request.flash('success' , "Votre inscription est bien été enregistrée")
  response.redirect('/inscription');
  });
}
// valeur de l'objet la fonction loginPostCtrl
module.exports = {cleObjetInscriptionPostCtrl : inscriptionPostCtrl}
