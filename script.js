/**
 * Created by Tam Le on 24/04/2016.
 */


var app = angular.module('mycv', ["xeditable"]);
app.run(function(editableOptions) {
    editableOptions.theme = 'bs3';
});
app.controller('Ctrller', function($scope, $http) {
    $http.get("JSON/data.json")
        .then(function(response) {
            $scope.myData = response.data.profile;

        });

    $http.get("JSON/summary.json")
        .then(function(response){
            $scope.mySummary= response.data.summary;
        });
    $http.get("JSON/experience.json")
        .then(function(response){
            $scope.myExperience = response.data.experience;
        });
    $http.get("JSON/language.json")
        .then(function(response){
            $scope.myLanguage = response.data.language;
        });
    $http.get("JSON/images.json")
        .then(function(response){
            $scope.myimage = response.data.images;
        });
    $http.get("JSON/skill.json")
        .then(function(response){
            $scope.myskill = response.data.skill;
        });
    $http.get("JSON/project.json")
        .then(function(response){
            $scope.myproject = response.data.project;
        });
    $http.get("JSON/education.json")
        .then(function(response){
            $scope.myeducation = response.data.education;
        });

});
