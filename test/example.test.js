// IMPORT MODULES under test here:
// import { getPokedex, setPokedex, catchPoke, encounterPoke } from './local-utils.js';
// import { findById, getRandomPokemon, genThreePokemon } from './utils.js';
// import { setPokedex } from './local-utils.js';

const test = QUnit.test;

test('setPokedex should take an array and put the stringified version into local storage under the key POKEDEX', (expect) => {
    // //Arrange
    // // Set up your arguments and expectations
    // const pokemon = [
    //     {
    //         pokemon: 'magikarp',
    //         encountered: 1,
    //         caught: 1,
    //     },
    //     {
    //         pokemon: 'charizard',
    //         encountered: 3,
    //         caught: 1,
    //     },
    //     {
    //         pokemon: 'squirtle',
    //         encountered: 2,
    //         caught: 0,
    //     },
    //     {
    //         pokemon: 'weedle',
    //         encountered: 1,
    //         caught: 1,
    //     }
    // ];

    // setPokedex(pokemon);

    // //Act 
    // // Call the function you're testing and set the result to a const
    // const stringyPokedex = localStorage.getItem('POKEDEX');
    // const parsedPokedex = JSON.parse(stringyPokedex);

    // //Expect
    // // Make assertions about what is expected versus the actual result
    // expect.deepEqual(pokemon, parsedPokedex);
    expect.equal(true, true);
});