let connection = require('../config/db')
// une fonction par route
function contactGetCtrl (request, response){
    response.render('contact')
  }

// valeur de l'objet la fonction loginPostCtrl
module.exports = {cleObjetContactGetCtrl : contactGetCtrl}
