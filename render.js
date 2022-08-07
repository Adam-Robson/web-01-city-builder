export {renderCityImage,
        renderCountryImage,
        renderWaterImage,
        updateTotals
        };

function renderCityImage() {
    for (let cityImage of cityImagesArray) {
        let selectedEl = citySelect.selected;
        selectedEl.style.backgroundImage = `url('${cityImage}.png')`;
        return selectedEl;
    }
        const citySelectImage = document.getElementById('city-select-image');        const pTag = document.createElement('p');
        p.classList.add('active-city');
        citySelectImage.append(p);
}

function renderCountryImage() {
    for (let countryImage of countryImagesArray) {
        let selectedEl = countrySelect.selected;
            selectedEl.style.backgroundImage = `url('${countryImage}.png')`;
            return selectedEl; 
    }
    const countrySelectImage = document.getElementById('country-select-image');        const p = document.createElement('p');
        p.classList.add('active-country');
        countrySelectImage.append(p);
        return countrySelectImage;
}

function renderWaterImage() {
    for (let waterImage of waterImagesArray) {
        let selectedEl = waterSelect.selected;
        selectedEl.style.backgroundImage = `url('${waterImage}.png')`;
        return waterEl;   
    }
        const waterSelectImage = document.getElementById('water-select-image');        const pTagWater = document.createElement('p');
        pTagWater.classList.add('active-water');
        waterSelectImage.append(pTagWater);
        return waterSelectImage;
}

function updateTotals(){
    totalsCount.textContent = '';
    totalsCount.textContent = `You changed city ${timesCityChange} country ${timesCountryChange} & water ${timesWaterChange} times.`;
}