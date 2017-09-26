let connection = require('../config/db')
// une fonction par route
function messageAllGetCtrl (request, response){

    //On crée une instance de l'objet Depense
    let Message = require('../models/message');
    Message.messageAll(function(listMessages){
      response.render('messageAll', {listMessage : listMessages});
    })

}
// valeur de l'objet la fonction messageAllGetCtrl
module.exports = {cleObjetMessageAllGetCtrl : messageAllGetCtrl}
