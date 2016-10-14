(function() {

  angular.module('pokedex.filters', [])
    .filter('normalize', function() {
      return function(input) {
        return input
          .replace('♀', 'f')
          .replace('♂', 'm')
          .replace(/\W+/g, '')
          .toLowerCase();
      };
    })
    .filter('imageify', ['$filter', function($filter) {
      return function(input) {
        return "img/pokemons/" + $filter('normalize')(input) + ".jpg";
      };
    }]);

})();