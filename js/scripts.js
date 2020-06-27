var pokemonRepository= (function() {
  var pokemonList= []

  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      })
    }).catch(function (e) {
      console.error(e);
    })
  }

  function getAll() {
    return pokemonList;
  }

  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      item.hp = details.stats.slice(0,1);
      item.attack = details.stats.slice(1,2);
      item.defense = details.stats.slice(2,3);
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(item) {
  loadDetails(item).then(function () {
    console.log(item);
    });
  }

  function addListItem(pokemon) {

    var listOfPokemon = document.querySelector('.pokemon-list');

    var listItem = document.createElement('li');

    var pokemonNameButton = document.createElement('button');

    pokemonNameButton.innerText = pokemon.name;

    pokemonNameButton.addEventListener('click', function(event) {
    showDetails(pokemon);
    });

    listItem.appendChild(pokemonNameButton);

    listOfPokemon.appendChild(listItem);
  }


  return {
    add: add,
    loadList: loadList,
    getAll: getAll,
    loadDetails: showDetails,
    showDetails: showDetails,
    addListItem: addListItem
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(pokemonRepository.addListItem);
});
