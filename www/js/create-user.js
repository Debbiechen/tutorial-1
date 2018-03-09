angular.module('user', ['ionic'])
  .controller('CreateUserCtrl', function ($scope, $rootScope, $state, $http, $ionicPopup, $ionicHistory, $firebaseAuth) {

    $scope.name = null;
    $scope.description = null;



    $scope.submit = function () {
      var userId = $state.params.userId;
      firebase.database().ref('users/' + userId).set({
        name: $scope.name,
        description: $scope.description
      }).then(function(result){
        alert('Success !');
      },function (err){
        console.error(err);
      });
      
    };

  });
