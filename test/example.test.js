// IMPORT MODULES under test here:
import { getPokedex, setPokedex, catchPoke, encounterPoke } from './local-utils.js';
// import { findById, getRandomPokemon, genThreePokemon } from './utils.js';
// import {pokemonData } from './data/pokemon.js';

const test = QUnit.test;

test('setPokedex should take an array and put the stringified version into local storage under the key POKEDEX', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const pokemon = [
        {
        name: 'squirtle'
        },

        {
        name: 'weedle'
        },
];

    setPokedex(pokemon);
    
    //Act 
    // Call the function you're testing and set the result to a const
    const stringyPokedex = localStorage.getItem('POKEDEX');
    const parsedPokedex = JSON.parse(stringyPokedex);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(pokemon, parsedPokedex);
});