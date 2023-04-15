import{POKEMONS} from'./pokemons.js';

const title=document.createElement('h1')
title.textContent='Pokedex!';
title.classList='title'


const pokemonMain=document.createElement('div')
pokemonMain.classList='pokemonMain conainer'

POKEMONS.forEach(element => {
    const pokemon=document.createElement('div')
    pokemon.classList='pokemon  animate__backInDown';

    const pokemonItem=document.createElement('img')
    pokemonItem.src=element.image;
    pokemonItem.classList='pokemonItem';

    const pokemonTitle=document.createElement('h4')
    pokemonTitle.textContent=element.name;
    pokemonTitle.classList='pokemonTitle';

    const pokemonType=document.createElement('p')
    pokemonType.textContent=element.type;
    pokemonType.classList='pokemonType';

    pokemon.appendChild(pokemonItem)
    pokemon.appendChild(pokemonTitle)
    pokemon.appendChild(pokemonType)
    pokemonMain.appendChild(pokemon)

    if( pokemonType.textContent==='grass'){
       pokemon.style.backgroundColor='#7303c0' ;
    }else if(pokemonType.textContent==='fire'){
        pokemon.style.backgroundColor='#ec38bc'
    }else if(pokemonType.textContent==='water'){
        pokemon.style.backgroundColor='#FF0080'
    }
    else {
        pokemon.style.backgroundColor='#40E0D0'
    }
  
});

document.body.appendChild(title);

  document.body.appendChild(pokemonMain)
