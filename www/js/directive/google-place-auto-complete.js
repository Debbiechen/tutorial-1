app.directive('googlePlaceAutoComplete', function () {
  return {
    require: 'ngModel',
    link: function (scope, element, attrs, model) {
      var options = {
        types: ['establishment']
      };
      scope.googlePlaceAutoComplete = new google.maps.places.Autocomplete(element[0], options);

      scope.googlePlaceAutoComplete.addListener('place_changed', function () {
        var place = autocomplete.getPlace();
        scope.$apply(function () {
            model.$setViewValue(place);
            scope.$broadcast('googlePlaceAutoComplete.placeChanged');
        });
      });
    }
  };
});
