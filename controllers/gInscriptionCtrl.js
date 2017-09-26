let connection = require('../config/db')
// une fonction par route
function inscriptionGetCtrl (request, response){

    response.render('inscription');
}
// valeur de l'objet la fonction deleteMessageAllGetCtrl
module.exports = {cleObjetInscriptionGetCtrl : inscriptionGetCtrl}
