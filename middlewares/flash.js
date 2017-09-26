module.exports = function (request, response, next) {

  // pour afficher l'erreur dans le formulaire il faut créer une variable flash

  if(request.session.flash){
    response.locals.flash = request.session.flash
    request.session.flash = undefined
  }

  // affiche seulement consolelog
  request.flash = function (type, content) {
    if (request.session.flash === undefined) {
      request.session.flash = {}
    }
    request.session.flash[type] = content
  }
  next()
}
