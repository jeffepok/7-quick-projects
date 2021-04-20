var app = angular.module("RankingLeadersApp", []);

app.controller("RankController", function($scope){

    $scope.Leaders = [
        {"pic" : "images/BARBAROSSA.png", "rank" : 1},
        {"pic" : "images/GANGHI.png", "rank" : 1},
        {"pic" : "images/GENSHI_KHAN.png", "rank" : 1},
        {"pic" : "images/PERICLES.png", "rank" : 2},
        {"pic" : "images/TOMYRIS.png", "rank" : 2},
        {"pic" : "images/VICTORIA.png", "rank" : 2},
        {"pic" : "images/LAUTARO.png", "rank" : 3},
        {"pic" : "images/QIN.png", "rank" : 3},
        {"pic" : "images/SALADIN.png", "rank" : 3}
    ]
    
});