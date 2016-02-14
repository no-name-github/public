 //Main AngularJS Web Application
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);

//Configure the Routes
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "tabs/lobby.html", controller: "PageCtrl"})
    .when("/singleTab", {templateUrl: "tabs/singleTab.html", controller: "PageCtrl"})
}]);
/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});
