app.controller('CreatePostCtrl', function ($scope, $rootScope, $state, $http, $ionicPopup, $ionicHistory,$firebaseObject, $firebaseAuth,me) {
    
    $scope.me = me;
    $scope.post = {
        content: ''
    };
    $scope.items = [{
        name: ''
    }];
    
    $scope.onItemNameChanged = function(index){

    };
    $scope.canDeleteItem = function(index){
        return index < $scope.items.length-1;
    };
    $scope.deleteItem = function(index){

    };
    $scope.init = function(){
        
    };
    $scope.init();

});
