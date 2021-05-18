import pokemonData from './data/pokemon.js';
import { catchPoke, encounterPoke } from './local-utils.js';

// import functions and grab DOM elements
const input1 = document.querySelector('#pokemon1');
const input2 = document.querySelector('#pokemon2');
const input3 = document.querySelector('#pokemon3');

const img1 = document.querySelector('#image1');
const img2 = document.querySelector('#image2');
const img3 = document.querySelector('#image3');

const button = document.querySelector('#button');

genThreePokemon();
// initialize state

// set event listeners 
button.addEventListener('click', () => {
    const checkedRadio = document.querySelector(':checked');
    const checkedPokemon = checkedRadio.value;

    catchPoke(checkedPokemon);
    genThreePokemon();
});

function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemonData.length);
    const randomPokemon = pokemonData[randomIndex];
    return randomPokemon;
}

function genThreePokemon() {
    let poke1 = getRandomPokemon();
    let poke2 = getRandomPokemon();
    let poke3 = getRandomPokemon();

    while (
    poke1.id === poke2.id 
      || poke1.id === poke3.id 
      || poke2.id === poke3.id
    ) {
        poke1 = getRandomPokemon();
        poke2 = getRandomPokemon();
        poke3 = getRandomPokemon();

    }

    encounterPoke(poke1.id);
    encounterPoke(poke2.id);
    encounterPoke(poke3.id);

    img1.src = poke1.url_image;
    img2.src = poke2.url_image;
    img3.src = poke3.url_image;

    input1.value = poke1.id;
    input2.value = poke2.id;
    input3.value = poke3.id;

}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  