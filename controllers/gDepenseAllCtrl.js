let connection = require('../config/db')
// une fonction par route
function depenseAllGetCtrl (request, response){

    //On crée une instance de l'objet Depense
    let Depense = require('../models/depense');
    //Appeler la fonction static depenseAll qui se trouve dans le modele depense
    //Lui passer en paramètre de la fonction Callback une variable pour récuperer les résultats de la requête
    Depense.depenseAll(function(listDepenses){
      //Au retour du Callback, on appelle la page depenseAll avec un objet en paramètre. dans l'objet
      //on renvoie à la page via unz variable quelconque (ici listDepense sans s) le résultats du Callback : listDepenses
      response.render('depenseAll', {listDepense : listDepenses});
    })


}
// valeur de l'objet la fonction depenseAllGetCtrl
module.exports = {cleObjetDepenseAllGetCtrl : depenseAllGetCtrl}
