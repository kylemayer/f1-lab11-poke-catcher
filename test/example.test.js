// IMPORT MODULES under test here:
import { getPokedex, setPokedex, catchPoke, encounterPoke } from './local-utils.js';
import { findById, getRandomPokemon, genThreePokemon } from './utils.js';
import {pokemonData } from './data/pokemon.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// getRandomPokemon
test('select random Pokemon from Pokemon data', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    // const expected = pokemonData[0];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomPokemon();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(typeof actual, 'object');
});