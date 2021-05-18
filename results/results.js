import { getPokedex } from '../local-utils.js';
import { mungePokeNames, mungePokeColors, mungePokeCaptured } from '../data/munge-data.js';

var ctx = document.getElementById('myChart').getContext('2d');

const pokedex = getPokedex();
const names = mungePokeNames(pokedex);
const captured = mungePokeCaptured(pokedex);
const colors = mungePokeColors(pokedex);

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Captures',
            data: captured,
            backgroundColor: colors,
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});