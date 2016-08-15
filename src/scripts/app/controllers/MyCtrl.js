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

    $scope.memberOnlyBtnClick = function(){
        console.log('Member Only Btn Click');

        MemberService.query({

        }, function(response) {
            $scope.members = response.members;
        });

    }
}
]);
