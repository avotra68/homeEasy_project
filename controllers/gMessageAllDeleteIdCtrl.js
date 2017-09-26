let connection = require('../config/db')
// une fonction par route
function deleteMessageAllGetCtrl (request, response){

  if (request.params.id != '') {
    let Message = require('../models/message')
    Message.delete(request.params.id, function(){
      response.redirect('/messageAll')
    })
  }


}
// valeur de l'objet la fonction deleteMessageAllGetCtrl
module.exports = {cleObjetDeleteMessageAllGetCtrl : deleteMessageAllGetCtrl}
