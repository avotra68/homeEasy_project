let connection = require('../config/db')
// une fonction par route
function deleteProfilGetCtrl (request, response){
  console.log("log= " + request.params.idUser );
  if (request.params.idUser != '') {
      console.log('appel');
      let User = require('../models/user')
      let Revenu = require('../models/revenu')
      let Depense = require('../models/depense')
      let pIdUser = request.params.idUser;
      Revenu.deleteUserRevenu(pIdUser, function(){
        Depense.deleteUserDepense(pIdUser, function(){
          User.deleteProfil(pIdUser, function(){
            response.redirect('/logout')
          })
        })
      })
  }
}

// valeur de l'objet la fonction loginPostCtrl
module.exports = {cleObjetDeleteProfilGetCtrl : deleteProfilGetCtrl}
