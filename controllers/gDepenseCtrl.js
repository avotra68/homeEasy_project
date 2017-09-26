let connection = require('../config/db')
// une fonction par route
function depenseGetCtrl (request, response){

  //On crée une instance de l'objet Depense
  let Depense = require('../models/depense');
  //On appelle la fonction ALL qui renvoie toute la liste des depenses
  // Cet appel mettra le resultat dans la variable listDepenses
  Depense.all(request.session.userId, function(listDepenses){
    //on affiche la page en passant en paramètre une donnée nommé listDepense
    response.render('depense', {listDepense : listDepenses});
  })


}
// valeur de l'objet la fonction loginPostCtrl
module.exports = {cleObjetDepenseGetCtrl : depenseGetCtrl}
