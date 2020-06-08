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
];

function pokemonLoop(pokemon) {
  document.write(pokemon.name, ' (Height: '+ pokemon.height +')');

  if (pokemon.height > 1.6) {
    document.write(' Wow, that\'s big! <br>');
  }

  if (pokemon.height <= 1.6) {
    document.write('<br>');
  }
}

pokemonList.forEach (pokemonLoop);
