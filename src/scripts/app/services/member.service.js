'use strict';

var mServices = require('./_mServices');

mServices.factory('MemberService',  function($resource) {

    return $resource("http://localhost:3010/member.json", {}, {
        query: {
            method: 'GET',
            params: {}
        }
    });
});
