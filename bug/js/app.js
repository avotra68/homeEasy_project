angular.module('app',[]).controller('appCtrl', function($scope){
  $scope.ongletAccueil = true;
    $scope.accueil = function() {
     $scope.ongletAccueil = true;
     $scope.ongletConnexionInscription = false;
     $scope.ongletAjoutDepenses = false;
     $scope.ongletAjoutRevenus = false;
     $scope.ongletContact = false;
  };

  $scope.connexionCompte = function() {
    $scope.ongletAccueil = false;
    $scope.ongletConnexionInscription = true;
    $scope.ongletAjoutDepenses = false;
    $scope.ongletAjoutRevenus = false;
    $scope.ongletContact = false;
     };

   $scope.depenses = function() {
     $scope.ongletAccueil = false;
     $scope.ongletConnexionInscription = false;
     $scope.ongletAjoutDepenses = true;
     $scope.ongletAjoutRevenus = false;
     $scope.ongletContact = false;
   };

    $scope.recettes = function() {
      $scope.ongletAccueil = false;
      $scope.ongletConnexionInscription = false;
      $scope.ongletAjoutDepenses = false;
      $scope.ongletAjoutRevenus = true;
      $scope.ongletContact = false;
       };

     $scope.contact = function() {
       $scope.ongletAccueil = false;
       $scope.ongletConnexionInscription = false;
       $scope.ongletAjoutDepenses = false;
       $scope.ongletAjoutRevenus = false;
       $scope.ongletContact = true;
    };

  });
