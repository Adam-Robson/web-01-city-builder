import { displayTitle, renderCityImage, renderCountryImage, renderWaterImage, updateStats } from 'render.js';

const inputTitle = document.getElementById('title');
const pageTitle = document.getElementById('page-title');
const buttonTitle = document.getElementById('button-title');
const selectCity = document.getElementById('select-city');
const selectCountry = document.getElementById('select-country');
const selectWater = document.getElementById('select-water');
const displayedCity = document.getElementById('displayed-city');
const displayedCountry = document.getElementById('displayed-country');
const displayedWater = document.getElementById('displayed-water');
const displayedStats = document.getElementById('displayed-stats');

let titlesArray = [];
let cityImages = ['./assets/cairo.png', './assets/tulum.png', './assets/chicago.png',];
let countryImages = ['./assets/us.png', './assets/mexico.png', './assets/egypt.png'];
let waterImages = ['./assets/river.png', './assets/lake.png', './assets/ocean.png'];



let cityChanged = 0;
let countryChanged = 0;
let waterChanged = 0; 
let totalChanged = 0;

buttonTitle.addEventListener('click', () =>
{
        displayTitle();
});

selectCity.addEventListener('change', () =>
{
        const image = selectCity.value;
        cityChanged++;
        displayedCity.style.backgroundImage = `url('./assets/${image}.png')`;
        renderImage();
        updateStats()
})

selectCountry.addEventListener('change', () =>
{
        const image = selectCountry.value;
        countryChanged++;
        displayedCountry.style.backgroundImage = `url('./assets/${image}.png')`;
        renderImage();
        updateStats();
})

selectWater.addEventListener('change', () =>
{
        const image = selectWater.value;
        waterChanged++;
        displayedWater.style.backgroundImage = `url('./assets/${image}.png')`;
        renderImage();
        updateStats();
})
