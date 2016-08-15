'use strict';

var angular = require('angular'),
    ngTouch = require('angular-touch'),
    ngSanitize = require('angular-sanitize'),
    ngResource = require('angular-resource'),
    uiRouter = require('angular-ui-router'),
    mAnimations = require('./animations/_loader'),
    mCtrls = require('./controllers/_loader'),
    mDirectives = require('./directives/_loader'),
    mServices = require('./services/_loader'),
    angularCookie = require('angular-cookie'),
    ngTokenAuth = require('ng-token-auth');


/**
 * Register main angular app
 */
angular.module('mApp', [ngTouch, ngSanitize,ngResource, uiRouter, mAnimations, mCtrls, mDirectives, mServices,angularCookie, ngTokenAuth])
    .config(function ($stateProvider, $locationProvider, $urlRouterProvider, $authProvider) {
        'ngInject';

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'tpls/views/home.html',
                controller: 'MyCtrl'
            })
            .state('page1', {
                url: '/page1',
                templateUrl: 'tpls/views/page1.html',
                controller: 'MyCtrl'
            })
            .state('page1.detail', {
                url: '/detail',
                templateUrl: 'tpls/views/detail.html',
                controller: 'DetailCtrl'
            });

        $authProvider.configure({
            apiUrl: 'http://localhost:3010',
            emailSignInPath: '/auth/sign_in',
            signOutUrl: '/auth/sign_out',
            storage: 'cookies',
            authProviderPaths: {
                github:   '/auth/github',
                eve_online: '/auth/eve_online'
            },
            tokenFormat: {
                "access-token": "{{ token }}",
                "token-type":   "Bearer",
                "client":       "{{ clientId }}",
                "expiry":       "{{ expiry }}",
                "uid":          "{{ uid }}"
            }
        });

        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(true);
    });
