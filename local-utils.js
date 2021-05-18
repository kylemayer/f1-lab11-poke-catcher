// local storage functions will go in here
import { findById } from './utils.js'; // findById will loop through the pokemon data array and pokemon IDs 

const POKEDEX = 'POKEDEX';

export function getPokedex() {
    const stringyPokedex = localStorage.getItem(POKEDEX); // get pokedex from local storage - currently a string
    if (!stringyPokedex) return []; // if no local storage pokedex available - return empty array 
    const pokedex = JSON.parse(stringyPokedex); // set pokedex to parsed pokedex from local storage
    return pokedex; 
}

export function setPokedex(newPokedex) {
    const stringyPokedex = JSON.stringify(newPokedex); // stringifying the new Pokedex and setting to stringyPokedex
    localStorage.setItem(POKEDEX, stringyPokedex); // setting POKEDEX and stringified new Pokedex into local storage
}

export function capturePoke(selectedPokemon) { 
    const pokedex = getPokedex(); // setting pokedex equal to the pokedex that the getPokedex function returns
    const matchingPokemon = findById(pokedex, selectedPokemon); // setting samePokemon equal to the 
    matchingPokemon.captured++; //
    setPokedex(pokedex); // saves/"sets" new pokedex values into local storage
}

export function encounterPoke(checkedPokemon) {
    const pokedex = getPokedex();

    const samePokemon = findById(pokedex, checkedPokemon); //

    if (samePokemon) {
        samePokemon.encountered++;
    } else {
        const newItem = {
            captured: 0,
            encountered: 1,
            id: checkedPokemon
        };
        pokedex.push(newItem);
    }
    setPokedex(pokedex);
}