import pokemon from '../data/pokemon.js';
import { findById } from '../utils.js';

export function mungePokeColors(pokemonArray) {
    const results = [];
    for (let poke of pokemonArray) {
        const data = findById(pokemon, poke.id)
        results.push(data.color_1)
    }
    return results;
    }

export function mungePokeCaptured(pokemonArray) {
    // YOUR CODE HERE
    const results = [];
    for(let poke of pokemonArray) {
        results.push(poke.captured)
        console.log(results);
    }
    return results;
}

export function mungePokeNames(pokemonArray) {
    // YOUR CODE HERE
    const results = [];
    for(let poke of pokemonArray) {
        const data = findById(pokemon, poke.id);
            results.push(data.pokemon)
    }
    return results;
}
