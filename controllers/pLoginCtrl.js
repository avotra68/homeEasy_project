let connection = require('../config/db')

// une fonction par route
function loginPostCtrl (req, res){
  // associer des informations à la session
  req.session.userId=''
  req.session.email = ''
  req.session.name = ''
  req.session.ville = ''
  req.session.psswd = ''
  req.session.connected = 'FALSE'
  req.session.isAdmin = "FALSE"
  req.session.error = ''
  req.session.flash = ""

  var email = req.body.email;
  var password = req.body.password;
  req.session.email = email;

  connection.query('SELECT * FROM users WHERE email = ? and motDePasse=?',[email, password], function (error, results) {
    console.log('toto');
    console.log(error);
    if (error) {

      console.log("error ocurred",error);
      req.session.userId=''
      req.session.email = ''
      req.session.name = ''
      req.session.ville = ''
      req.session.psswd = ''
      req.session.connected = 'FALSE'
      req.session.isAdmin = "FALSE"
      req.session.user.error = "Erreur lors de l'authentication";
      req.session.flash = "Il y a une erreur dans votre adresse email ou mot de passe";
      console.log("Il y a une erreur dans votre adresse email ou mot de passe");
      res.locals.user = req.session;
      // req.session.flash('error', "Il y a une erreur dans votre adresse email ou mot de passe") OU req.session.user.error = "Erreur lors de l'authentication";;
      res.redirect("/login");

    }
    else{
      console.log('passe dans else');
       console.log('Resultat controle existance de l\'utilisateur : ', results);
      if(results.length >0){
          console.log("connexion reussie");
          req.session.userId = results[0].id;
          req.session.email = results[0].email;
          if(req.session.email==='avofeno@yahoo.fr'){
              req.session.isAdmin = "TRUE"
          }
          else {
            req.session.isAdmin = "FALSE"
          }
          req.session.name = results[0].nom + ' ' + results[0].prenom;
          req.session.connected = "TRUE";
          req.session.error = ""
          req.session.flash = "Connexion réussie";
          res.locals.user = req.session;

          res.render("accueil")
      }
      else{
        req.session.userId=''
        req.session.email = ''
        req.session.name = ''
        req.session.connected = 'FALSE'
        req.session.isAdmin = "FALSE"
        req.session.error = '';
        req.session.flash = "Les informations saisies ne sont correctes. Veuillez recommencer!";
        res.locals.user = req.session;
        res.render("login")
      }
    }
  });
}
// valeur de l'objet la fonction loginPostCtrl
module.exports = {cleObjetLoginPostCtrl: loginPostCtrl}
