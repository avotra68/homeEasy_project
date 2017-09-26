let connection = require('../config/db')
// une fonction par route
function depensePostCtrl (request, response){

  let Depense = require('../models/depense')
  Depense.create(request.body.categories, request.body.date_depense, request.body.montant,request.session.userId, function(){
    response.redirect('/depense')
  });


}
// valeur de l'objet la fonction loginPostCtrl
module.exports = {cleObjetDepensePostCtrl : depensePostCtrl}
