let connection = require('../config/db')
// une fonction par route
function revenuAllGetCtrl (request, response){

  let Revenu = require('../models/revenu');
  console.log('ID = ' + request.session.id);
  Revenu.revenuAll(function(listRevenus){
    // pour récuperer message all crée db.js parite vue aussi à modif
    response.render('revenuAll', {listRevenu : listRevenus});
  })

}
// valeur de l'objet la fonction loginPostCtrl
module.exports = {cleObjetRevenuAllGetCtrl : revenuAllGetCtrl}
