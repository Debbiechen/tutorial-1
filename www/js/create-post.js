app.controller('CreatePostCtrl', function ($scope, $rootScope, $state, $http, $ionicPopup, $ionicHistory, $firebaseObject, $firebaseAuth, me, Guid) {


  $scope.me = me;
  $scope.content = '';
  $scope.items = [{
    name: ''
  }];

  $scope.onItemNameChanged = function (index) {
    if ($scope.items[index].name.length == 0 && index < $scope.items.length) {
      $scope.deleteItem(index);
    } else if (index == $scope.items.length - 1) {
      $scope.items.push({
        name: ''
      });
    }

  };
  $scope.canDeleteItem = function (index) {
    return index < $scope.items.length - 1 && $scope.items[index].name.length > 0;
  };
  $scope.deleteItem = function (index) {
    $scope.items.splice(index, 1);
  };
  $scope.init = function () {

  };
  $scope.init();

});
