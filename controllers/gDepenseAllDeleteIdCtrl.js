let connection = require('../config/db')
// une fonction par route
function deleteDepenseAllGetCtrl (request, response){

  let Depense = require('../models/depense');
  if (request.params.id !=''){
    Depense.delete(request.params.id, function(){
      response.redirect('/depenseAll');
  });
}
else{
  response.redirect('/depenseAll');
}
}
// valeur de l'objet la fonction loginPostCtrl
module.exports = {cleObjetDeleteDepenseAllGetCtrl : deleteDepenseAllGetCtrl}
