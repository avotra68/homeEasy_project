let connection = require('../config/db')
// une fonction par route
function accueilGetCtrl (request, response){

  response.render('accueil')

}
// valeur de l'objet la fonction deleteMessageAllGetCtrl
module.exports = {cleObjetAccueilGetCtrl : accueilGetCtrl}
