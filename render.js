export function displayTitle () {
        pageTitle.textContent = '';
        titlesArray.push(inputTitle);
        for (let phrase of titlesArray)
        {
                const pTag = document.createElement('p');
                pTag.textContent = phrase;
                pageTitle.append(pTag);
                return pageTitle;
        }
};

export function renderCityImage ()
{
        const p = document.createElement('p');
        p.classList.add('onscreen-images')
        displayedCity.append(p);
        return p;
};

export function renderCountryImage ()
{
        const p = document.createElement('p');
        p.classList.add('onscreen-images')
        displayedCountry.append(p);
        return p;
};

export function renderWaterImage ()
{
        const p = document.createElement('p');
        p.classList.add('onscreen-images')
        displayedWater.append(p);
        return p;
};

export function updateStats ()
{
        displayedStats.textContent = `You made ${cityChanged} changes to the city, ${countryChanged} to the country and ${waterChanged} to the water. ${totalChanged} changes total.`
}
