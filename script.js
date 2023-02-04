let rangeInput = document.getElementById('range')
let pageviews = document.getElementById('pageviews')
let amountViewsInput = document.getElementById('amount_views')
let switchInput = document.querySelector('.switch')
let rangeFormated = 0
let amountViews = 0

function rangeOptions() {
    if (switchInput.checked) {
        if (rangeInput.value == 0) {
            rangeFormated = '0'
            amountViews = 0
        }
        if (rangeInput.value == 1) {
            rangeFormated = '10K'
            amountViews = 8
            amountViews = amountViews - ((25 * amountViews) / 100)
        }
        if (rangeInput.value == 2) {
            rangeFormated = '50K'
            amountViews = 12
            amountViews = amountViews - ((25 * amountViews) / 100)
        }
        if (rangeInput.value == 3) {
            rangeFormated = '100K'
            amountViews = 16
            amountViews = amountViews - ((25 * amountViews) / 100)
        }
        if (rangeInput.value == 4) {
            rangeFormated = '500K'
            amountViews = 24
            amountViews = amountViews - ((25 * amountViews) / 100)
        }
        if (rangeInput.value == 5) {
            rangeFormated = '1M'
            amountViews = 36
            amountViews = amountViews - ((25 * amountViews) / 100)
        }
        if (rangeInput.value == 6) {
            rangeFormated = '3M'
            amountViews = 64
            amountViews = amountViews - ((25 * amountViews) / 100)
        }
    } else {
        if (rangeInput.value == 0) {
            rangeFormated = '0'
            amountViews = 0
        }
        if (rangeInput.value == 1) {
            rangeFormated = '10K'
            amountViews = 8
        }
        if (rangeInput.value == 2) {
            rangeFormated = '50K'
            amountViews = 12
        }
        if (rangeInput.value == 3) {
            rangeFormated = '100K'
            amountViews = 16
        }
        if (rangeInput.value == 4) {
            rangeFormated = '500K'
            amountViews = 24
        }
        if (rangeInput.value == 5) {
            rangeFormated = '1M'
            amountViews = 36
        }
        if (rangeInput.value == 6) {
            rangeFormated = '3M'
            amountViews = 64
        }
    }
}

rangeInput.addEventListener('input', () => {
    rangeOptions()
    pageviews.innerHTML = `${rangeFormated} Pageviews`
    amountViewsInput.innerHTML = `<strong>$${amountViews.toFixed(2)}</strong> / month`
})

switchInput.addEventListener('click', () => {
    rangeOptions()
    pageviews.innerHTML = `${rangeFormated} Pageviews`
    amountViewsInput.innerHTML = `<strong>$${amountViews.toFixed(2)}</strong> / month`
})

function rangeColor() {
    valuePercent = (rangeInput.value / rangeInput.max) * 100;
    rangeInput.style.background =
        `linear-gradient(to right, var(--soft_cyan) ${valuePercent}%, var(--light_grayish_blue) ${valuePercent}%)`;
}

rangeColor()
rangeOptions()