// import functions and grab DOM elements
const addSloganButton = document.getElementById('add-slogan-button');
const sloganInput = document.getElementById('slogan-input');
const slogansDisplay = document.getElementById('slogan-display');
const citySelect = document.getElementById('city-select');
const countrySelect = document.getElementById('country-select');
const waterSelect = document.getElementById('water-select');
const cityImage = document.getElementById('city-image');
const countryImage = document.getElementById('country-image');
const waterImage = document.getElementById('water-image');
const totalsCount = document.getElementById('totals-count');
// let state
// eslint-disable-next-line no-undef
const slogansArray = [];
let timesCityChange = 0;
let timesWaterChange = 0;
let timesCountryChange = 0;
// set event listeners
addSloganButton.addEventListener('click', () => {
    slogansDisplay.textContent = '';
    const newSlogan = sloganInput.value;
    slogansArray.push(newSlogan);
    slogansDisplay.textContent = slogansArray;
});

citySelect.addEventListener('change', () => {
    cityImage.value = '';
    const img = document.createElement('img');
    img.src = `./assets/${citySelect}.png`;
    timesCityChange++;
    updateTotals();
    cityImage.append(img);
}); 

countrySelect.addEventListener('change', () => {
    countryImage.value = '';
    const img = document.createElement('img');
    img.src = `./assets/${countrySelect}.png`;
    timesCountryChange++;
    updateTotals();
    countryImage.append(img);
}); 

waterSelect.addEventListener('change', () => {
    waterImage.value = '';
    const img = document.createElement('img');
    img.src = `url('./assets/${waterSelect}.png')`;
    timesWaterChange++;
    updateTotals();
    waterImage.append(img);
}); 

function updateTotals(){
    totalsCount.textContent = '';
    totalsCount.textContent = `You changed city ${timesCityChange} country ${timesCountryChange} & water ${timesWaterChange} times.`;
}
