const cityNameInput = document.getElementById('city-name-input');
const addCityButton = document.getElementById('add-city-button');
const cityNameDisplay = document.getElementById('city-name-display');
const sloganInput = document.getElementById('slogan-input');
const addSloganButton = document.getElementById('add-slogan-button');
const sloganDisplay = document.getElementById('slogan-display');
const cityImage = document.getElementById('city-image');
const countryImage = document.getElementById('country-image');
const cityFeature = document.getElementById('city-feature');
const waterImage = document.getElementById('water-image');
const waterFeature = document.getElementById('water-feature');
const countryFeature = document.getElementById('country-feature');

const displayStats = document.getElementById('display-stats');

let cityCount = 0;
let waterCount = 0; 
let countryCount = 0;


let slogansArray = [];

addSloganButton.addEventListener('click', () => {

    sloganDisplay.textContent = '';
    let userSlogan = sloganInput.value;
    slogansArray.push(userSlogan);
    sloganDisplay.textContent = slogansArray;
    sloganInput.value = '';
});

addCityButton.addEventListener('click', () =>
{
    cityNameDisplay.textContent = '';
    let userCityName = cityNameInput.value;
    cityNameDisplay.textContent = userCityName;
    cityNameInput.value = '';
});     

cityFeature.addEventListener('change', () => {
    cityImage.src = `./assets/${cityFeature.value}.png`;
    cityImage.alt = 'a photo of a city feature';
    cityCount++;
    displayStatsFunction();
});

countryFeature.addEventListener('change', () => {
    countryImage.src = `./assets/${countryFeature.value}-country.png`;
    countryImage.alt = 'a photo of a coutry feature';
    countryCount++;
    displayStatsFunction();
});

waterFeature.addEventListener('change', () => {
    waterImage.src = '';
    waterImage.src = `./assets/${waterFeature.value}-water.png`;
    waterImage.alt = 'a photo of a water feature';
    waterCount++;
    displayStatsFunction();
});

function displayStatsFunction() {
    displayStats.textContent = '';
    displayStats.textContent = `You have changed the city feature ${cityCount} times, the country feature ${countryCount} times and the water feature ${waterCount} times.`;
}