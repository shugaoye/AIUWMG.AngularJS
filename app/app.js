require('./app.css')
require ('angular');

var entryDetails = angular.module("entryDetails", []);

entryDetails.filter("checkedItems", function () {
    return function (items, showComplete) {
        var resultArr = [];
        angular.forEach(items, function (item) {
            if (item.done == false || showComplete == true) {
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
        angular.forEach($scope.details.items, function (item) {
            if (!item.done) { count++ }
        });
        return count;
    }

    $scope.warningLevel = function () {
        return $scope.incompleteCount() < 3 ? "label-success" : "label-warning";
    }

    $scope.addNewItem = function (keyText) {
        $scope.details.items.push({ key: keyText, done: false });
    }

}


entryDetails.controller('DetailsCtrl', DetailsController);

module.exports = entryDetails;