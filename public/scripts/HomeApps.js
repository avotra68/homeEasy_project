
var HomeApps = angular.module('HomeApps', []);

HomeApps.controller('AppsHomeController',  ['$scope', function($scope){

  var regex1=/^([a-zA-Z0-9])+([a-zA-Z0-9._%+-])+@([a-zA-Z0-9_.-])+\.(([a-zA-Z]){2,6})$/;

// regex ngPattern
$scope.regexInscription= regex1;
$scope.regexEditProfil=regex1;
}]); // FIN angularjs
// [a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}
  // animation pur JS

var chaine = 'Home Easy Management';
var nb_car = chaine.length;
var tableau = chaine.split("");
texte = new Array;
var txt = '';
var nb_msg = nb_car - 1;
for (i=0; i<nb_car; i++) {
texte[i] = txt+tableau[i];
var txt = texte[i];
}

actual_texte = 0;
function changeMessage()
{
document.getElementById("devise").innerHTML = texte[actual_texte];
actual_texte++;
if(actual_texte >= texte.length)
actual_texte = nb_msg;
}
if(document.getElementById)

setInterval("changeMessage()",100) /* la vitesse de defilement (plus on a une valeur faible plus
texte s'affiche rapidement) */

// FIN navigation


// Début directive pour comparer 2 password
