require('./app.css')
require ('angular');

var entryDetails = angular.module("entryDetails", []);

entryDetails.filter("checkedItems", function () {
    return function (items, showComplete) {
        var resultArr = [];
        angular.forEach(items, function (item) {
            if (item.IsHidden == false || showComplete == true) {
                resultArr.push(item);
            }
        });
        return resultArr;
    }
});

function DetailsController ($scope) {
    $scope.details = model;

    $scope.incompleteCount = function () {
        var count = 0;
        angular.forEach($scope.details.Items, function (item) {
            if (!item.IsHidden) { count++ }
        });
        return count;
    }

    $scope.warningLevel = function () {
        return $scope.incompleteCount() < 3 ? "label-success" : "label-warning";
    }

    $scope.addNewItem = function (keyText) {
        $scope.details.Items.push({ Key: keyText, IsHidden: false });
    }

}


entryDetails.controller('DetailsCtrl', DetailsController);

module.exports = entryDetails;