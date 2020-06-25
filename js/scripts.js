var pokemonRepository= (function() {
  var pokemonList= [
    {name: 'Bulbasaur', height: 0.7, type:['Grass', 'Poison'], HP: 45},
    {name: 'Ivysaur', height: 1, type:['Grass', 'Poison'],  HP: 60},
    {name: 'Venusaur', height: 2, type:['Grass', 'Poison'], HP: 80},
    {name:'Charmander', height: 0.6, type:'Fire', HP: 39},
    {name:'Charmeleon', height: 1.1, type:'Fire', HP: 58},
    {name:'Charizard', height: 1.7, type:'Fire', HP: 78},
    {name: 'Squirtle', height: 0.5, type:'Water', HP: 44},
    {name: 'Wartortle', height: 1, type:'Water', HP: 59},
    {name: 'Blastoise', height: 1.6, type:'Water', HP: 79},
    {name: 'Caterpie', height: 0.3, type:'Bug', HP: 45},
    {name: 'Metapod', height: 0.7, type:'Bug', HP: 50},
    {name: 'Butterfree', height: 1.1, type:'Bug', HP: 60},
    {name: 'Weedle', height: 0.3, type:['Bug', 'Poison'], HP: 40},
    {name: 'Kakuna', height: 0.6, type:['Bug', 'Poison'], HP: 45},
    {name: 'Beedrill', height: 1, type:['Bug', 'Poison'], HP: 65},
    {name: 'Pidgey', height: 0.3, type:['Flying', 'Normal'], HP: 40},
    {name: 'Pidgeotto', height: 1.1, type:['Flying', 'Normal'], HP: 63},
    {name: 'Pidgeot', height: 1.5, type:['Flying', 'Normal'], HP: 83},
    {name: 'Rattata', height: 0.3, type:'Normal', HP: 30},
    {name: 'Raticate', height: 0.7, type:'Normal', HP: 55},
    {name: 'Spearow', height: 0.3, type:['Flying', 'Normal'], HP: 40},
    {name: 'Fearow', height: 1.2, type:['Flying', 'Normal'], HP: 65},
    {name: 'Ekans', height: 2, type:'Poison', HP: 35},
    {name: 'Arbok', height: 3.5, type:'Poison', HP: 60},
    {name: 'Pikachu', height: 0.4, type:'Electric', HP: 35},
    {name: 'Raichu', height: 0.8, type:'Electric', HP: 60},
    {name: 'Sandshrew', height: 0.6, type:'Ground', HP: 50},
    {name: 'Sandslash', height: 1, type:'Ground', HP: 75},
  ];

  function add(pokemon) {
    if (typeof pokemon !== 'object') {
      return 'Try again!'
    }
    else {
    pokemonList.push(pokemon);
    }
  }

  function getAll() {
    return pokemonList;
  }

  function showDetails(pokemon) {
    console.log(pokemon.name);
  }

  function addListItem(pokemon) {

    var listOfPokemon = document.querySelector('.pokemon-list');

    var listItem = document.createElement('li');

    var pokemonNameButton = document.createElement('button');

    pokemonNameButton.innerText = pokemon.name;

    pokemonNameButton.classList.add('.pokemon-buttons');

    pokemonNameButton.addEventListener('click', function(event) {
      showDetails(pokemon);
    });

    listItem.appendChild(pokemonNameButton);

    listOfPokemon.appendChild(listItem);
  }


  return {
    add: add,
    getAll: getAll,
    showDetails: showDetails,
    addListItem: addListItem
  };
})();

pokemonRepository.getAll().forEach(pokemonRepository.addListItem);
