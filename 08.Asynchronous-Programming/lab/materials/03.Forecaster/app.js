function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/forecaster'

    const locationElement = document.getElementById('location')
    const submitButton = document.getElementById('submit')
    const currentELement = document.getElementById('current')
    const forecastElement = document.getElementById('forecast')

    const wheatherSymbol = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        "Overcast": '☁',
        "Rain": '☂',
        'Degrees': '°',
    }

    submitButton.addEventListener('click', () => {
        fetch(`${baseUrl}/locations`)
        .then(res => res.json())
        .then(data => {
            const { code } = data.find(locaiton => locaiton.name === locationElement.value)
            return fetch(`${baseUrl}/today/${code}`)
        })
        .then(res => res.json())
        then(data => { 
            forecastElement.style.display = 'block'

            const symbolSpanEl = document.createElement('span')
            symbolSpanEl.classList.add('condition')
            symbolSpanEl.classList.add('symbol')
            symbolSpanEl.textContent = wheatherSymbol[todayData.forecast.condition]


            const anotheSpan = document.createElement('span')
            anotheSpan.innerHTML = []
            //...

        })
    })
}

