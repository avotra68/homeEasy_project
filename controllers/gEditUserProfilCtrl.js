let connection = require('../config/db')
// une fonction par route
function editUserProfilGetCtrl (request, response){
  //On crée une instance de l'objet Depense
  let User = require('../models/user');


  User.selectProfil(request.session.userId, function(profilUser){
    //Au retour du Callback, on appelle la page depenseAll avec un objet en paramètre. dans l'objet
    //on renvoie à la page via unz variable quelconque (ici listDepense sans s) le résultats du Callback : listDepenses
    console.log('profilUser = ' + JSON.stringify(profilUser));
    response.render('editUserProfil', {profilUser : profilUser});
  })

}

// valeur de l'objet la fonction loginPostCtrl
module.exports = {cleObjetEditUserProfilGetCtrl : editUserProfilGetCtrl}
