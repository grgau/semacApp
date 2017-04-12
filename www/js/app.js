// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.directives', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.dia1', {
    url: '/dia1',
    views: {
      'tab-dia1': {
        templateUrl: 'templates/tab-dia1.html',
        controller: 'Dia1Ctrl'
      }
    }
  })

  .state('tab.dia2', {
    url: '/dia2',
    views: {
      'tab-dia2': {
        templateUrl: 'templates/tab-dia2.html',
        controller: 'Dia2Ctrl'
      }
    }
  })

  .state('tab.dia3', {
    url: '/dia3',
    views: {
      'tab-dia3': {
        templateUrl: 'templates/tab-dia3.html',
        controller: 'Dia3Ctrl'
      }
    }
  })

  .state('tab.dia4', {
    url: '/dia4',
    views: {
      'tab-dia4': {
        templateUrl: 'templates/tab-dia4.html',
        controller: 'Dia4Ctrl'
      }
    }
  })

  .state('tab.dia5', {
    url: '/dia5',
    views: {
      'tab-dia5': {
        templateUrl: 'templates/tab-dia5.html',
        controller: 'Dia5Ctrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
