app.controller('CreateUserCtrl', function ($scope, $rootScope, $state, $http, $ionicPopup, $ionicHistory, $firebaseAuth) {

    $scope.name = 'test';
    $scope.description = 'test';



    $scope.submit = function () {
      var userId = $state.params.userId;
      var body = {
        name: $scope.name,
        description: $scope.description
      };
      firebase.database().ref('users/' + userId).set(body).then(function (result) {
        alert('Success !');
      }, function (err) {
        console.error(err);
      });

    };

  });
