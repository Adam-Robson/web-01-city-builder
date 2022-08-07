import { updateTotals, renderImage } from './render.js';

const addSloganButton = document.getElementById('add-slogan-button');
const sloganInput = document.getElementById('slogan-input');
const sloganDisplay = document.getElementById('slogan-display');
const citySelect = document.getElementById('city-select');
const countrySelect = document.getElementById('country-select');
const waterSelect = document.getElementById('water-select');
const totalsCount = document.getElementById('totals-count');
const selectImages = document.getElementsByClassName('select-images');

let sloganArray = [];

let timesCityChange = 0;
let timesWaterChange = 0;
let timesCountryChange = 0;
let totalChanges = 0;

function displaySlogan ()
{
    let nuArray = [];
    const input = sloganInput.value;
    nuArray.push(input);
    sloganInput.value = '';
    for (let input of nuArray)
    {
        const p = document.createElement('p');
        p.classList.add('slogans-to-show');
        p.textContent = input;
        sloganDisplay.append(p);
        return sloganDisplay;
    }
}; 

// set event listeners


addSloganButton.addEventListener('click', () =>
{
    displaySlogan();
});
    
citySelect.addEventListener('change', () => {
    const value = citySelect.value;
    timesCityChange++;
    cityImage.style.backgroundImage = `url('./assets/${value}.png')`;
    renderImage();
    updateTotals();
});

countrySelect.addEventListener('change', () => {
    const value = countrySelect.value;
    timesCountryChange++;
    countryImage.style.backgroundImage = `url('./assets/${value}.png')`;
    renderImage();
    updateTotals();
}); 

waterSelect.addEventListener('change', () => {
    const value = waterImage.value;
    timesWaterChange++;
    waterImage.style.backgroundImage = `url('./assets/${value}.png')`;
    renderImage();
    updateTotals();
}); 
