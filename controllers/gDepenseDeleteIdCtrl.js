let connection = require('../config/db')
// une fonction par route
function deleteDepenseGetCtrl (request, response){

      let Depense = require('../models/depense');
      if (request.params.id !=''){
        Depense.delete(request.params.id, function(){
          response.redirect('/depense');
      });
    }
    else{
      response.redirect('/depense');
    }

}
// valeur de l'objet la fonction loginPostCtrl
module.exports = {cleObjetDeleteDepenseGetCtrl : deleteDepenseGetCtrl}
