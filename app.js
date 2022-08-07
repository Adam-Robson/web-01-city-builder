import { updateTotals, displaySlogan, renderImage } from './render.js';

const addSloganButton = document.getElementById('add-slogan-button');
const sloganInput = document.getElementById('slogan-input');
const slogansDisplay = document.getElementById('slogans-display');
const citySelect = document.getElementById('city-select');
const countrySelect = document.getElementById('country-select');
const waterSelect = document.getElementById('water-select');
const cityImage = document.getElementById('city-image');
const countryImage = document.getElementById('country-image');
const waterImage = document.getElementById('water-image');
const totalsCount = document.getElementById('totals-count');
const selectImages = document.getElementsByClassName('select-images');


const slogansArray = [];
const allImages = [cityImage, countryImage, waterImage];

let timesCityChange = 0;
let timesWaterChange = 0;
let timesCountryChange = 0;
let totalChanges = 0;



// set event listeners
addSloganButton.addEventListener('click', () => {
    slogansDisplay.textContent = '';
    const slogan = sloganInput.value;
    slogansArray.push(slogan);
    sloganInput.value = '';
    totalChanges++;
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
a
