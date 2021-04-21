let app = angular.module("LeaderFilterApp", []);
app.controller("LeaderController",function($scope){

    $scope.collection = [];
    $scope.addThisOne = function(z){
        $scope.collection.push(z);
    }

    $scope.Leaders = [
        {"name":"Cleopatra","pic":"images/image1.png"},
        {"name":"Dido", "pic":"images/image2.png"},
        {"name":"Gandhi", "pic":"images/image3.png"},
        {"name":"Gilgamesh", "pic":"images/image4.png"},
        {"name":"Gorgo", "pic":"images/image5.png"},
        {"name":"Hardrada", "pic":"images/image6.png"},
        {"name":"Hojo", "pic":"images/image7.png"},
        {"name":"Krestina", "pic":"images/image8.png"},
        {"name":"mykhill", "pic":"images/image9.png"},
    ];  
   
}); 