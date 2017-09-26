let connection = require('../config/db')
// une fonction par route
function logoutGetCtrl (request, response){

    request.session.destroy(function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log('utilisateur déconnecté!');
        response.redirect('/login');
      }
    });

}
// valeur de l'objet la fonction loginPostCtrl
module.exports = {cleObjetLogoutGetCtrl : logoutGetCtrl}
