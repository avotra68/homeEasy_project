let connection = require('../config/db')
// une fonction par route
function racineGetCtrl (request, response){

  response.render('accueil')
  
}
// valeur de l'objet la fonction deleteMessageAllGetCtrl
module.exports = {cleObjetRacineGetCtrl : racineGetCtrl}
