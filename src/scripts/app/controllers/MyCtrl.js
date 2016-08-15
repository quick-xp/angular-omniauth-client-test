'use strict';

var mCtrls = require('./_mCtrls'),
debug = require('debug'),
log = debug('Ctrls'),
loader = require('../../utilities/loader');

mCtrls.controller('MyCtrl',['$scope','$state','$stateParams','$auth','MemberService',
function ($scope,$state,$stateParams, $auth, MemberService) {
    log('test');
    $scope.test = 'test';
    console.log(loader.getLoader('main').getResult('app-data'));

    $scope.githubLoginBtnClick = function(){
        console.log('Github Login Btn Click');
        $auth.authenticate('github')
        .then(function(resp){
            console.log('Github Login Successful');
        })
        .catch(function(resp){

        });
    };

    $scope.eveOnlineLoginBtnClick = function(){
        console.log('Eve Online Login Btn Click');
        $auth.authenticate('eve_online')
        .then(function(resp){
            console.log('Eve Online Login Successful');
        })
        .catch(function(resp){
            console.log('Eve Online Login Fali');
        });
    };

    $scope.memberOnlyBtnClick = function(){
        console.log('Member Only Btn Click');

        MemberService.query({

        }, function(response) {
            $scope.members = response.members;
        });

    }

    $scope.signOutBtnClick = function(){
        $auth.signOut()
        .then(function(resp){
            console.log('Sign Out Successful');
        })
        .catch(function(resp){

        });
    };
}
]);
