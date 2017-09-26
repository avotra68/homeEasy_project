let connection = require('../config/db')
// une fonction par route
function revenuGetCtrl (request, response){

  let Revenu = require('../models/revenu');
  console.log('ID = ' + request.session.id);
  Revenu.all(request.session.userId, function(listRevenus){
    // pour récuperer message all crée db.js parite vue aussi à modif
    response.render('revenu', {listRevenu : listRevenus});
  })

}
// valeur de l'objet la fonction loginPostCtrl
module.exports = {cleObjetRevenuGetCtrl : revenuGetCtrl}
