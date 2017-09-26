let connection = require('../config/db')

// une fonction par route
function loginGetCtrl (request, response){
  response.render("login");
}
// valeur de l'objet la fonction loginGettCtrl
module.exports = {cleObjetLoginGetCtrl: loginGetCtrl}
