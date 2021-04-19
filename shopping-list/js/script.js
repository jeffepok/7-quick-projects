var app = angular.module("MockingJay's List App", []);

app.controller("ListController", function ($scope) {
    $scope.list = ["milk", "cheese", "egg"];
    $scope.deleted = [];
    $scope.addItem = function (z) {
        $scope.list.push(z);
        $scope.newItem = "";
    }
    $scope.remove = function ($event, y) { 
        if($event.target.id === "activeDelBtn"){
            var removeItem = $scope.list.indexOf(y);
            $scope.list.splice(removeItem,1);
            $scope.deleted.push(y);
        }else{
            var removeItem = $scope.deleted.indexOf(y);
            $scope.deleted.splice(removeItem,1);
            $scope.list.push(y);
        }
        
    }
});