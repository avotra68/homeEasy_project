let connection = require('../config/db')
// une fonction par route
function deleteRevenuAllGetCtrl (request, response){

  let Revenu = require('../models/revenu');
  if (request.params.id !=''){
    Revenu.delete(request.params.id, function(){
        response.redirect('/revenuAll');
    });
  }
  else{
    response.redirect('/revenuAll');
  }
  


}
// valeur de l'objet la fonction loginPostCtrl
module.exports = {cleObjetDeleteRevenuAllGetCtrl : deleteRevenuAllGetCtrl}
