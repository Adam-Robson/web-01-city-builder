export function renderImage() {
    for (let image of allImages) {
        const p = document.createElement('p');
        p.classList.add('selectImage');
        p.textContent = allImages;
        selectImages.append(p);
        return p
    };
    
}

export function updateTotals() {
        totalsCount.textContent = '';
        totalsCount.textContent = `You changed city ${timesCityChange} country ${timesCountryChange} & water ${timesWaterChange} times. ${totalChanges} changes total.`;
}
