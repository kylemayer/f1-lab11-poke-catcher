import pokemon from '../data/pokemon.js';
import { findById } from '../utils.js';

export function mungePokeColors(pokemonArray) {
    const results = [];
    for (let poke of pokemonArray) {
        const data = findById(pokemon, poke.id);
        results.push(data.color_1);
    }
    return results;
}

export function mungeSecColors(pokemonArray) {
    const results = [];
    for (let poke of pokemonArray) {
        const data = findById(pokemon, poke.id);
        results.push(data.color_2);
    }
    return results;
}

export function mungePokeCaptured(pokemonArray) {
    // YOUR CODE HERE
    const results = [];
    for (let poke of pokemonArray) {
        results.push(poke.captured);
    }
    return results;
}

export function mungePokeNames(pokemonArray) {
    // YOUR CODE HERE
    const results = [];
    for (let poke of pokemonArray) {
        const data = findById(pokemon, poke.id);
        results.push(data.pokemon);
    }
    return results;
}

export function mungePokeEncountered(pokemonArray) {
    // YOUR CODE HERE
    const results = [];
    for (let poke of pokemonArray) {
        results.push(poke.encountered);
    }
    return results;
}

export function mungePokeWeight(pokemonArray) {
    const results = [];
    for (let poke of pokemonArray) {
        const data = findById(pokemon, poke.id);
        results.push(data.weight);
    }
    return results;
}

export function mungePokeImg(pokemonArray) {
    const results = [];
    for (let poke of pokemonArray) {
        const data = findById(pokemon, poke.id);
        results.push(data.url_image);
    }
    return results;
}