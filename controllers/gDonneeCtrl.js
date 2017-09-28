let connection = require('../config/db')
// une fonction par route
function donneeGetCtrl (request, response){

    let Donnees = require('../models/donnees');
    Donnees.selectRevenu(request.session.userId, function(listRevenus){

      Donnees.selectDepense(request.session.userId, function(listDepenses){
        response.render('donnees', {listRevenu : listRevenus, listDepense : listDepenses});

      });
    });


  }

// valeur de l'objet la fonction loginPostCtrl
module.exports = {cleObjetDonneeGetCtrl : donneeGetCtrl}
