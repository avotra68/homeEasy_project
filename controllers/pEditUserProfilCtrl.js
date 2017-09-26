let connection = require('../config/db')
// une fonction par route
function editUserProfilPostCtrl (request, response){

  let UserP = require('../models/user');
  console.log('on est dans editUserProfilPostCtrl debut : ' + request.body.nom);
  UserP.updateProfil(request.body.nom, request.body.prenom, request.body.ville, request.body.email, request.body.motDePasse, request.session.userId, function(){
    request.flash('success' , "Votre modification est bien été enregistrée");
    response.redirect('/editUserProfil');
  })
};

// valeur de l'objet la fonction loginPostCtrl
module.exports = {cleObjetEditUserProfilPostCtrl : editUserProfilPostCtrl}
