
const waterFeature = document.getElementById('water-feature');
const displayWater = document.getElementById('display-water');
const cityFeature = document.getElementById('city-feature');
const displayCity = document.getElementById('display-city');
const stats =  document.getElementById('stats');
const sloganInput = document.getElementById('slogan-input');
const addButton = document.getElementById('add-button');
const sloganDisplay = document.getElementById('slogan-display');

let slogans = [];

let cityChanged = 0;
let waterChanged = 0; 


function displayStats ()
{
        stats.textContent = `You changed the water ${waterChanged} times and the city ${cityChanged} times.`
};

function displaySlogans ()
{
        sloganDisplay.textContent = '';
        for (let slogan of slogans)
        {
                const nuSlogan = document.createElement('p');
                nuSlogan.textContent = slogan;
                nuSlogan.classList.add('slogan');
                sloganDisplay.append(nuSlogan);
        };
};

addButton.addEventListener('click', () =>
{
        const val = sloganInput.value;
        slogans.push(val);
        displaySlogans();
        sloganInput.value = '';
});

cityFeature.addEventListener('change', () =>
{
        displayCity.src = `assets/${cityFeature}.png`;
        cityChanged++;
        displayStats();
}),
        

waterFeature.addEventListener('change', () =>
{
        displayWater.src = `assets/${waterFeature}.png`
        waterChanged++;
        displayStats();
})
