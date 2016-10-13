(function() {

  angular.module('pokedex.filters', [])
    .filter('imageify', function() {
      return function(input) {
        return "img/pokemons/" + input.toLowerCase() + ".jpg";
      };
    });

})();