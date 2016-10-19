(function() {
  angular.module('pokedex.services', [])
    .factory('pokemonService', ['$http', '$q', function($http, $q) {
      function all() {
      	var deferred = $q.defer();

      	$http.get('/data/pokemons.json')
      	  .success(function(data) {
            deferred.resolve(data);
      	  });

      	return deferred.promise;
      }

      return {
      	all: all
      };
    }])
})();