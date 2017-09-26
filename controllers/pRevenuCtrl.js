let connection = require('../config/db')
// une fonction par route
function revenuPostCtrl (request, response){

  let Revenu = require('../models/revenu');
  Revenu.create(request.body.categories, request.body.date, request.body.montant,request.session.userId, function(){
    response.redirect('/revenu');
    });
}
// valeur de l'objet la fonction loginPostCtrl
module.exports = {cleObjetRevenuPostCtrl : revenuPostCtrl }
