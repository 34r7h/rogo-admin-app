var adolfCtrl = function ($scope, service) {
    $scope.wordListObject = service.data.wordListObject;
    $scope.wordListArray = service.data.wordListArray;
    $scope.textObj = service.data.textObj;
    $scope.wordSave = service.api.wordSave;
    $scope.remove = service.api.remove;
    $scope.update = service.api.update;
    $scope.new = service.models.newWord;
    $scope.wordListObject.$bindTo($scope,'data');
    $scope.textObj.$bindTo($scope,'text');
};

angular.module('rogoadmin').controller('MyPartialCtrl', adolfCtrl);
