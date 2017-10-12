(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ['$scope','$filter'];

  function LunchCheckController ($scope, $filter) {

    $scope.checkIfTooMuch = function (itemList){
      $scope.message = itemList;
      
      if(itemList != ''){
        var itemArray = itemList.split(',');
        var itemArrayLength = itemArray.length;

        if(itemArrayLength <= 3){
          $scope.message = "Enjoy!";
        }else{
          $scope.message = "Too much!";
        }
      }else{
        $scope.message = "Please enter data first";
      }

    };



  };

})();