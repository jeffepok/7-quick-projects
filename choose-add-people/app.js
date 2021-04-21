let app = angular.module("TossThemApp", []);
app.controller("MovePeopleController",function($scope){

    $scope.collection = [];
    $scope.addThisOne = function(z){
        $scope.collection.push(z);
    }

    $scope.Leaders = [
        {"pic":"images/avatar1.png", "name":"Alexander"},
        {"pic":"images/avatar2.png", "name":"Amanitore"},
        {"pic":"images/avatar3.png", "name":"Barbarossa"},
        {"pic":"images/avatar4.png", "name":"Chandragupta"},
        {"pic":"images/avatar5.png", "name":"Cleoptra"},
        {"pic":"images/avatar6.png", "name":"Cyrus"},
        {"pic":"images/avatar7.png", "name":"Dido"},
        {"pic":"images/avatar8.png", "name":"Gandhi"},
    ];  
   
}); 