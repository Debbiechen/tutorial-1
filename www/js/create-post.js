app.controller('CreatePostCtrl', function ($scope, $rootScope, $state, $http, $ionicPopup, $ionicHistory, $firebaseObject, $firebaseAuth, me, Guid, $ionicModal) {


  $scope.me = me;
  $scope.content = '';
  $scope.items = [{
    name: ''
  }];
  $scope.place = null;
  $scope.placePickerModal = null;


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


  $scope.openGooglePlaceAutoPicker = function () {
    $scope.placePickerModal.show();
  };
  $scope.closeGooglePlaceAutoPicker = function () {
    $scope.placePickerModal.hide();
  };


  $scope.$on('$destroy', function () {
    $scope.placePickerModal.remove();
  });
  $scope.$on('modal.hidden', function (event, modal) {
    if(modal === $scope.placePickerModal){

    }
  });
  $scope.$on('googlePlaceAutoComplete.placeChanged',function(){
    $scope.placePickerModal.hide();
    console.log($scope.place);
  });

  $scope.init = function () {

    
    $ionicModal.fromTemplateUrl('template/place-auto-complete-picker.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.placePickerModal = modal;
    });




  };
  $scope.init();

});
