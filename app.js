// import functions and grab DOM elements

import { updateTotals, renderCityImage, renderCountryImage, renderWaterImage } from './render.js';

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

const slogansArray = [];
const cityImages = ['./assets/tulum.png', './assets/chicago.png', './assets/cairo.png'];
const countryImagesArray = [];
const waterImagesArray = [];

let timesCityChange = 0;
let timesWaterChange = 0;
let timesCountryChange = 0;
let totalChanges = 0;


// set event listeners
addSloganButton.addEventListener('click', () => {
    slogansDisplay.textContent = '';
    const slogan = sloganInput.value;
    slogansArray.push(slogan);
    slogansDisplay.textContent = slogansArray;
    sloganInput.value = '';
    totalChanges++;
});


citySelect.addEventListener('change', () => {
    timesCityChange++;
    totalChanges++;
    renderCityImage();
    updateTotals();
});

countrySelect.addEventListener('change', () => {
    const countryOption = countrySelect.value;
    timesCountryChange++;
    renderCountryImage();
    updateTotals();
}); 

waterSelect.addEventListener('change', () => {
    const waterOption = waterImage.value;
    timesWaterChange++;
    renderWaterImage();
    updateTotals();
}); 
