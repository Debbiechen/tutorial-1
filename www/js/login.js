angular.module('login', ['ionic'])
  .controller('LoginCtrl', function ($scope, $rootScope, $state, $http, $ionicPopup, $ionicHistory, $firebaseAuth) {

    $scope.loginFacebook = function () {
      // login with Facebook
      $firebaseAuth().$signInWithPopup("facebook").then(function (firebaseUser) {
        console.log("Signed in as:", firebaseUser);
        var uid = firebaseUser.user.uid;
        firebase.database().ref('/users/' + uid).once('value').then(function (snapshot) {
          if (snapshot.val()) {
            // already has profile
          }
          else{
            // no profile
            $state.go('create-user',{userId: uid});
          }
          
        });
      }).catch(function (error) {
        console.log("Authentication failed:", error);
      });
    };




  });
