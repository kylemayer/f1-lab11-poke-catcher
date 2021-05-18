import { getPokedex, setPokedex } from '../local-utils.js';
import { mungePokeNames, mungePokeColors, mungePokeCaptured, mungePokeEncountered, mungeSecColors, mungePokeWeight} from '../data/munge-data.js';

let ctx = document.getElementById('myChart').getContext('2d');
let ctx2 = document.getElementById('secondChart').getContext('2d');

const pokedex = getPokedex();
const names = mungePokeNames(pokedex);
const captured = mungePokeCaptured(pokedex);
const colors = mungePokeColors(pokedex);
const color2 = mungeSecColors(pokedex);
const encountered = mungePokeEncountered(pokedex);
const weight = mungePokeWeight(pokedex);
// const image = mungePokeImg(pokedex);
const resetButton = document.querySelector('#reset');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Captures',
            data: captured,
            backgroundColor: ['rgb(59, 76, 202)'],
            borderColor: colors,
            borderWidth: 1
            
        },
        {
            label: '# of Encounters',
            data: encountered,
            backgroundColor: [
                'rgba(255, 222, 0)'],
            borderColor: color2,
            borderWidth: 1
            
        }]
    },
    options: {
        // elements: {
        //     bar: {
        //         tension: 43
        //     }
        // },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const secondChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: names,
        datasets: [{
            label: 'Weight',
            data: weight,
            backgroundColor: ['rgba(255, 0, 0, 0.2'],
            borderColor: ['rgba(204, 0, 0, 0.2'],
            borderWidth: 1
            
        }]
    },
    options: {
        elements: {
            line: {
                fill: true
            },
            point: {
                radius: 15,
                pointStyle: 'triangle', 
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

resetButton.addEventListener('click', () => {
    window.location.replace('/');

    setPokedex([]);
});