let connection = require('../config/db')
// une fonction par route
function contactPostCtrl (request, response){

  let Message = require('../models/message')
  Message.create(request.body.adresseMail, request.body.motifMessage, request.body.message, function(){
    request.flash('success' , "Votre message a bien été envoyé")
    response.redirect('/contact')
  })

  }

// valeur de l'objet la fonction loginPostCtrl
module.exports = {cleObjetContactPostCtrl : contactPostCtrl}
