
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
const bodyParser = require("body-parser");

// fin modules à utiliser


// configuration

// créer une instance de la variable experss
var app = express();

// ejs à installer avec npm
app.set('view engine', 'ejs');



var PORT = 3030;

http.createServer(app).listen(PORT);

// Début middlewares
app.use(serveStatic(__dirname +"/public"));


// pour que l'application puisse gérer les donnees des formulaire
/* bodyParser n'est pas une fonction mais c'est un objet qui contient 2 fonctions :
urlenconded(): permet de permet de révuperer en request.body le contenu post en clé et valeur
json(): permet de récupérer le contenu post en json*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// secret sert à chiffrer les cookies, cookie:secure false parce que c'est pas du https apour effet d'identifier de manière unique chaque utilisateur
app.use(session({
    secret: 'codeSecretPourCrypterLeCookie',
    resave: false,
    saveUninitialized : true
  })
);

// creer middleware pour les message flash TOUJOURS METTRE MIDDLEWARE SESSION AVANT CELUI DE FLASH
app.use(require('./middlewares/flash'))

// middleware: si la session existe , j'affecte à la session en cours  à l'utilisateur
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


//Une fonction qui sera appelée en call back dans les routes qui requièrent une connexion utilisateur

function connectionNeeded(req, res, next){
  console.log(JSON.stringify(req.session) + ' req.session.connected='+ req.session.connected);
  if(req.session && (req.session.email) && (req.session.connected==="TRUE")){
    next();
  }
  else{
    res.redirect('/login');
  }
}

//Une fonction qui sera appelée en call back dans les routes qui requièrent une connexion administrateur

function adminRightNeeded(req, res, next){
  if(req.session && (req.session.email) && (req.session.connected==="TRUE")  && (req.session.isAdmin==="TRUE")){
    next();
  }
  else{
    res.redirect('/accueil');
  }
}


// Début routes

  // appeler module contentant la route pour aller vers la racine
  const rootRacineGetCtrl = require('./controllers/gRacineCtrl');

  app.get("/", rootRacineGetCtrl.cleObjetRacineGetCtrl)

  // appeler module contentant la route pour aller vers la racine
  const rootAccueilGetCtrl = require('./controllers/gAccueilCtrl');

  app.get("/accueil",rootAccueilGetCtrl.cleObjetAccueilGetCtrl )

  // appeler module contentant la route get inscription
  const rootInscriptionGetCtrl = require('./controllers/gInscriptionCtrl');

  // debut  inscription
  app.get("/inscription",rootInscriptionGetCtrl.cleObjetInscriptionGetCtrl);

    // appeler module contentant la route post inscription
  const rootInscriptionPostCtrl = require('./controllers/pInscriptionCtrl');

  app.post('/inscription', rootInscriptionPostCtrl.cleObjetInscriptionPostCtrl);

  //Affichage page de login
  // appeler module contentant la route post Login
  const rootLoginGetCtrl = require('./controllers/gLoginCtrl');

  app.get("/login", rootLoginGetCtrl.cleObjetLoginGetCtrl)

  // appeler module contentant la route post Login
  const rootLoginPostCtrl = require('./controllers/pLoginCtrl');
  //beigin app.post(login)

  app.post('/login',rootLoginPostCtrl.cleObjetLoginPostCtrl);
  //end app.post (login)

  // appeler module contentant la route get logout
  const rootLogoutGetCtrl = require('./controllers/gLogoutCtrl');

  app.get("/logout", rootLogoutGetCtrl.cleObjetLogoutGetCtrl);

// fin connexionInscription ===> inscription

// appeler module contentant la route get Revenu
  const rootRevenuGetCtrl = require('./controllers/gRevenuCtrl');

  app.get("/revenu",connectionNeeded, rootRevenuGetCtrl.cleObjetRevenuGetCtrl);


  // appeler module contentant la route Post Revenu
  const rootRevenuPostCtrl = require('./controllers/pRevenuCtrl');

  app.post("/revenu", connectionNeeded,rootRevenuPostCtrl.cleObjetRevenuPostCtrl);

  // appeler module contentant la route get Delete Revenu:id
  const rootDeleteRevenuGetCtrl = require('./controllers/gRevenuDeleteIdCtrl');

  app.get("/revenu/delete/:id",connectionNeeded, rootDeleteRevenuGetCtrl.cleObjetDeleteRevenuGetCtrl);

  // appeler module contentant la route get revenuAll
  const rootRevenuAllGetCtrl = require('./controllers/gRevenuAllCtrl');

  app.get("/revenuAll",connectionNeeded,adminRightNeeded,rootRevenuAllGetCtrl.cleObjetRevenuAllGetCtrl );

  // appeler module contentant la route get Delete RevenuAll:id
  const rootDeleteRevenuAllGetCtrl = require('./controllers/gRevenuAllDeleteIdCtrl');

  app.get("/revenuAll/delete/:id",connectionNeeded,adminRightNeeded,rootDeleteRevenuAllGetCtrl.cleObjetDeleteRevenuAllGetCtrl);

  // appeler module contentant la route get depense
  const rootDepenseGetCtrl = require('./controllers/gDepenseCtrl');

  app.get("/depense",connectionNeeded, rootDepenseGetCtrl.cleObjetDepenseGetCtrl);

  // appeler module contentant la route post depense
  const rootDepensePostCtrl = require('./controllers/pDepenseCtrl');

  app.post("/depense", connectionNeeded, rootDepensePostCtrl.cleObjetDepensePostCtrl);

  // appeler module contentant la route get Delete Revenu:id
  const rootDeleteDepenseGetCtrl = require('./controllers/gDepenseDeleteIdCtrl');

  app.get("/depense/delete/:id", connectionNeeded, rootDeleteDepenseGetCtrl.cleObjetDeleteDepenseGetCtrl);
  // appeler module contentant la route get DepenseAll:id

  const rootDepenseAllGetCtrl = require('./controllers/gDepenseAllCtrl');

  app.get("/depenseAll",connectionNeeded,adminRightNeeded, rootDepenseAllGetCtrl.cleObjetDepenseAllGetCtrl);

  // appeler module contentant la route get Delete DepenseAll:id
  const rootDeleteDepenseAllGetCtrl = require('./controllers/gDepenseAllDeleteIdCtrl');

  app.get("/depenseAll/delete/:id", connectionNeeded,adminRightNeeded, rootDeleteDepenseAllGetCtrl.cleObjetDeleteDepenseAllGetCtrl);


  // appeler module contentant la route get donnee
  const rootDonneeGetCtrl = require('./controllers/gDonneeCtrl');

  app.get("/donnees",connectionNeeded, rootDonneeGetCtrl.cleObjetDonneeGetCtrl );


  // appeler module contentant la route get contact
  const rootContactGetCtrl = require('./controllers/gContactCtrl');

  app.get("/contact",rootContactGetCtrl.cleObjetContactGetCtrl )

  // appeler module contentant la route post contact
  const rootContactPostCtrl = require('./controllers/pContactCtrl');

  app.post('/contact',rootContactPostCtrl.cleObjetContactPostCtrl)

  // appeler module contentant la route post all messsages
  const rootMessageAllGetCtrl = require('./controllers/gMessageAllCtrl');

  app.get("/messageAll",connectionNeeded,adminRightNeeded,rootMessageAllGetCtrl.cleObjetMessageAllGetCtrl );

  // appeler module contentant delete/messageAll:id
  const rootDeleteMessageAllGetCtrl = require('./controllers/gMessageAllDeleteIdCtrl');

  app.get('/messageAll/delete/:id', connectionNeeded,adminRightNeeded,rootDeleteMessageAllGetCtrl.cleObjetDeleteMessageAllGetCtrl)


  // appeler module contentant get edit profil
  const rootEditUserProfilGetCtrl = require('./controllers/gEditUserProfilCtrl');

  app.get("/editUserProfil",connectionNeeded,rootEditUserProfilGetCtrl.cleObjetEditUserProfilGetCtrl);

  const rootEditUserProfilPostCtrl = require('./controllers/pEditUserProfilCtrl');

  // appeler module contentant post edit profil
  app.post("/editUserProfil",connectionNeeded,rootEditUserProfilPostCtrl.cleObjetEditUserProfilPostCtrl);

  const rootDeleteProfilGetCtrl = require('./controllers/gDeleteProfilCtrl');

  app.get("/editUserProfil/delete/:idUser", connectionNeeded,rootDeleteProfilGetCtrl.cleObjetDeleteProfilGetCtrl )
  // Fin routes
