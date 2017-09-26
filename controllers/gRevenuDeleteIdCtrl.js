let connection = require('../config/db')
// une fonction par route
function deleteRevenuGetCtrl (request, response){

  let Revenu = require('../models/revenu');
  if (request.params.id !=''){
    Revenu.delete(request.params.id, function(){
        response.redirect('/revenu');
    });
  }
  else{
    response.redirect('/revenu');
  }


}
// valeur de l'objet la fonction loginPostCtrl
module.exports = {cleObjetDeleteRevenuGetCtrl : deleteRevenuGetCtrl}
