angular.module('angularApp').service('HomeService', function($http) {
  var service = {
    getHome: function() {
      return $http.get('/sp2vr/home-page', { cache: true }).then(function(resp) {
        return resp.data;
      });

    }

  }

  return service;
})
