// functions will go in here

import { findById } from './utils.js';

const POKEDEX = 'POKEDEX';

export function getPokedex () {
    const stringyPokedex = localStorage.getItem(POKEDEX); // get pokedex from local storage - currently a string

    if (!stringyPokedex) return []; // if no local storage pokedex available - return empty array 

    const pokedex = JSON.parse(stringyPokedex); // set pokedex to parsed pokedex from local storage

    return pokedex;
}

console.log(getPokedex);

export function setPokedex () {


}



export function catchPoke () {


}


export function encounterPoke () {


}