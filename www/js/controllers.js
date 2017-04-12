angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {
    $scope.doRefresh = function() {
        $scope.$broadcast('scroll.refreshComplete');
    };
})

.controller('Dia1Ctrl', function($scope, $http) {
    $scope.results = "";
    $scope.doRefresh = function() {
        $http.get('https://raw.githubusercontent.com/grgau/semac/master/semac-schedule.json')
        .success(function(data, status, headers,config){
            $scope.results = data.dia1; // for UI
        })
        .error(function(data, status, headers,config){
        console.log('data error');
        })
        .then(function(results){
            things = results.data.dia1;
        })
        .finally(function() {
            $scope.$broadcast('scroll.refreshComplete');
        });
    };
})

.controller('Dia2Ctrl', function($scope, $http) {
    $scope.results = "";
    $scope.doRefresh = function() {
        $http.get('https://raw.githubusercontent.com/grgau/semac/master/semac-schedule.json')
        .success(function(data, status, headers,config){
            $scope.results = data.dia2; // for UI
        })
        .error(function(data, status, headers,config){
        console.log('data error');
        })
        .then(function(results){
            things = results.data.dia2;
        })
        .finally(function() {
            $scope.$broadcast('scroll.refreshComplete');
        });
    };
})

.controller('Dia3Ctrl', function($scope, $http) {
    $scope.results = "";
    $scope.doRefresh = function() {
        $http.get('https://raw.githubusercontent.com/grgau/semac/master/semac-schedule.json')
        .success(function(data, status, headers,config){
            $scope.results = data.dia3; // for UI
        })
        .error(function(data, status, headers,config){
        console.log('data error');
        })
        .then(function(results){
            things = results.data.dia3;
        })
        .finally(function() {
            $scope.$broadcast('scroll.refreshComplete');
        });
    };
})

.controller('Dia4Ctrl', function($scope, $http) {
    $scope.results = "";
    $scope.doRefresh = function() {
        $http.get('https://raw.githubusercontent.com/grgau/semac/master/semac-schedule.json')
        .success(function(data, status, headers,config){
            $scope.results = data.dia4; // for UI
        })
        .error(function(data, status, headers,config){
        console.log('data error');
        })
        .then(function(results){
            things = results.data.dia4;
        })
        .finally(function() {
            $scope.$broadcast('scroll.refreshComplete');
        });
    };
})

.controller('Dia5Ctrl', function($scope, $http) {
    $scope.results = "";
    $scope.doRefresh = function() {
        $http.get('https://raw.githubusercontent.com/grgau/semac/master/semac-schedule.json')
        .success(function(data, status, headers,config){
            $scope.results = data.dia5; // for UI
        })
        .error(function(data, status, headers,config){
        console.log('data error');
        })
        .then(function(results){
            things = results.data.dia5;
        })
        .finally(function() {
            $scope.$broadcast('scroll.refreshComplete');
        });
    };
})

.controller('ModalCtrl', function($scope, $ionicModal) {

  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

});
