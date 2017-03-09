angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('HomeCtrl', function($scope) {})

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

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
