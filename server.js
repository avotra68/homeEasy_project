
// Les modules à utiliser

// création serveur web
const http = require("http");

//express et ejs à installer avec npm
const express = require("express");

// appeler module contentant la connexion avec la BD
const connection = require('./config/db');

// express-session à installer avec npm
const session = require('express-session');
const cookieParser = require('cookie-parser')

// serveStatic est un module permet une navigation facile  =>npm install serve-static--save, permet de servir tous les fichier static de l'application
// il prend en paramète request response next lors de use(serveStatic)
const serveStatic =require("serve-static");

// c'est un module permet de piocher modifuer des élements du body  =>npm install body-parser --save,
const bodyParser = require("body-parser")

// fin modules à utiliser


// configuration

// créer une instance de la variable experss
var app = express();

// ejs à installer avec npm
app.set('view engine', 'ejs');



var PORT = 3030;

http.createServer(app).listen(PORT);

// Début middlewares
app.use(serveStatic(__dirname +"/views"));


// pour que l'application puisse gérer les donnees des formulaire
/* bodyParser n'est pas une fonction mais c'est un objet qui contient 2 fonctions :
urlenconded(): permet de permet de révuperer en request.body le contenu post en clé et valeur
json(): permet de récupérer le contenu post en json*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(session({
    secret: 'codeSecretPourCrypterLeCookie',
    resave: false,
    saveUninitialized : true
  })
);



app.use(function(req, res, next) {
  if (typeof req.session != 'undefined'){
    if(req.session.connected==="TRUE"){
        res.locals.user = req.session;
        console.log('Control ok : connected=TRUE');
        next();
    }
    else{
        console.log('Control ok : connected<>TRUE');
      next();
    }
  }
  else {
    console.log('Control ok : Pas de session');
     next();
  }
});


//Une fonction pour vérifier si un utilisateur est déjà connecté
//Sinon : çaa renvoie vers la page d'accueil
function connectionNeeded(req, res, next){
  console.log(JSON.stringify(req.session) + ' req.session.connected='+ req.session.connected);
  if(req.session && (req.session.email) && (req.session.connected==="TRUE")){
    next();
  }
  else{
    res.redirect('/login');
  }
}


function adminRightNeeded(req, res, next){
  if(req.session && (req.session.email) && (req.session.connected==="TRUE")  && (req.session.isAdmin==="TRUE")){
    next();
  }
  else{
    res.redirect('/accueil');
  }
}


// routes
//Affichage page de login
app.get("/login", (request, response)=>{
  response.render("login");
})

app.get("/logout", (request, response)=>{
  request.session.destroy(function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log('utilisateur déconnecté!');
      response.redirect('/login');
    }
  });
})

  //beigin app.post(login)
  app.post('/login',function(req, res){
    req.session.userId=''
    req.session.email = ''
    req.session.name = ''
    req.session.connected = 'FALSE'
    req.session.isAdmin = "FALSE"
    req.session.error = '';

    var email = req.body.email;
    var password = req.body.password;
    req.session.email = email;

    connection.query('SELECT * FROM users WHERE email = ? and motDePasse=?',[email, password], function (error, results, fields) {
      if (error) {
        console.log("error ocurred",error);
        req.session.userId=''
        req.session.email = ''
        req.session.name = ''
        req.session.connected = 'FALSE'
        req.session.isAdmin = "FALSE"
        req.session.error = '';
        req.session.user.error = "Erreur lors de l'authentication";
        res.locals.user = req.session;
        res.render("login")
      }
      else{
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
          res.locals.user = req.session;
          res.render("login")
        }
      }
    });
  });
  //end app.post (login)


  app.get("/", (request, response) => {
    // pour récuperer message all crée db.js parite vue aussi à modif
    response.render('accueil')
  })

  app.get("/accueil", (request, response) => {
    // pour récuperer message all crée db.js parite vue aussi à modif
    response.render('accueil')
  })

  // debut connexionInscription ===> inscription
  app.get("/connexionInscription", (request, response) => {
    response.render('connexionInscription');
  })

  app.post('/connexionInscription',(request,response) => {
      connection.query('INSERT INTO users SET nom=?, prenom=?, ville=?,email=?, motDePasse=?, date_inscription =?', [request.body.nom, request.body.prenom, request.body.ville, request.body.email, request.body.motDePasse, new Date()], function (err,result) {
      if (err) throw console.error();
      console.log(result);
      response.redirect('/connexionInscription');
    });
  });

    // fin connexionInscription ===> inscription

  app.get("/revenu",connectionNeeded, (request, response) => {
      let Revenu = require('./models/revenu');
      console.log('ID = ' + request.session.id);
      Revenu.all(request.session.userId, function(listRevenus){
        // pour récuperer message all crée db.js parite vue aussi à modif
        response.render('revenu', {listRevenu : listRevenus});
      })
    });

  app.post("/revenu", connectionNeeded, (request, response) => {
      let Revenu = require('./models/revenu');
      Revenu.create(request.body.categories, request.body.date, request.body.montant,request.session.userId, function(){
        response.redirect('/revenu');
        });
    });


  app.get("/revenu/delete/:id",connectionNeeded, (request, response) => {
    let Revenu = require('./models/revenu');
    if (request.params.id !=''){
      Revenu.delete(request.params.id, function(){
          response.redirect('/revenu');
      });
    }
    else{
      response.redirect('/revenu');
    }
  });

  app.get("/revenuAll",connectionNeeded,adminRightNeeded, (request, response) => {
      let Revenu = require('./models/revenu');
      console.log('ID = ' + request.session.id);
      Revenu.revenuAll(function(listRevenus){
        // pour récuperer message all crée db.js parite vue aussi à modif
        response.render('revenuAll', {listRevenu : listRevenus});
      })
    });

    app.get("/revenuAll/delete/:id",connectionNeeded,adminRightNeeded, (request, response) => {
      let Revenu = require('./models/revenu');
      if (request.params.id !=''){
        Revenu.delete(request.params.id, function(){
            response.redirect('/revenuAll');
        });
      }
      else{
        response.redirect('/revenuAll');
      }
    });

  app.get("/depense",connectionNeeded, (request, response) => {
    //On crée une instance de l'objet Depense
    let Depense = require('./models/depense');
    //On appelle la fonction ALL qui renvoie toute la liste des depenses
    // Cet appel mettra le resultat dans la variable listDepenses
    Depense.all(request.session.userId, function(listDepenses){
      //on affiche la page en passant en paramètre une donnée nommé listDepense
      response.render('depense', {listDepense : listDepenses});
    })
  });


  app.post("/depense", connectionNeeded, (request, response) => {
    let Depense = require('./models/depense')
    Depense.create(request.body.categories, request.body.date_depense, request.body.montant,request.session.userId, function(){
      response.redirect('/depense')
    });
  });

  app.get("/depense/delete/:id", connectionNeeded, (request, response) => {
      let Depense = require('./models/depense');
      if (request.params.id !=''){
        Depense.delete(request.params.id, function(){
          response.redirect('/depense');
      });
    }
    else{
      response.redirect('/depense');
    }
  });

  app.get("/depenseAll",connectionNeeded,adminRightNeeded, (request, response) => {
    //On crée une instance de l'objet Depense
    let Depense = require('./models/depense');
    //Appeler la fonction static depenseAll qui se trouve dans le modele depense
    //Lui passer en paramètre de la fonction Callback une variable pour récuperer les résultats de la requête
    Depense.depenseAll(function(listDepenses){
      //Au retour du Callback, on appelle la page depenseAll avec un objet en paramètre. dans l'objet
      //on renvoie à la page via unz variable quelconque (ici listDepense sans s) le résultats du Callback : listDepenses
      response.render('depenseAll', {listDepense : listDepenses});
    })
  });

  app.get("/depenseAll/delete/:id", connectionNeeded,adminRightNeeded, (request, response) => {
      let Depense = require('./models/depense');
      if (request.params.id !=''){
        Depense.delete(request.params.id, function(){
          response.redirect('/depenseAll');
      });
    }
    else{
      response.redirect('/depenseAll');
    }
  });


  app.get("/donnees",connectionNeeded, (request, response) => {
    let Donnees = require('./models/donnees');
    Donnees.selectRevenu(request.session.userId, function(listRevenus){
      Donnees.selectDepense(request.session.userId, function(listDepenses){
        response.render('donnees', {listRevenu : listRevenus, listDepense : listDepenses});
        // pour récuperer message all crée db.js parite vue au
      })
    })
  });


  app.get("/contact", (request, response) => {
    response.render('contact')
  })



  app.post('/contact',(request,response)=>{
    let Message = require('./models/message')
    Message.create(request.body.adresse_mail, request.body.motif_message, request.body.message, function(){
      response.redirect('/contact')
    })
  })

  app.get('/messageAll/delete/:id', connectionNeeded,adminRightNeeded, (request,response)=>{
    if (request.params.id != '') {
      let Message = require('./models/message')
      Message.delete(request.params.id, function(){
        response.redirect('/messageAll')
      })
    }
  })


  app.get("/messageAll",connectionNeeded,adminRightNeeded, (request, response) => {
    //On crée une instance de l'objet Depense
    let Message = require('./models/message');
    Message.messageAll(function(listMessages){
      response.render('messageAll', {listMessage : listMessages});
    })
  });
