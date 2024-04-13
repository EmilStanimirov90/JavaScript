function attachEventsListeners() {
    const convertButtonElements = document.querySelectorAll('input[value=Convert]')
    const inputEls = document.querySelectorAll('input[type=text]')
    const toSeconds =  (value, unit) => {
        if (unit === 'days'){
            return value * 24 * 60 * 60
        }else if (unit === 'hours'){
            return value * 60 * 60
        }else if (unit === 'minutes'){
            return value * 60
        }else if (unit === 'seconds'){
            return value
        }
    }
   
    const converters = {
        days(seconds){
            return seconds /60 /60 /24

        },
        hours(seconds){
            return seconds / 60 / 60
        },
        minutes(seconds){
            return seconds / 60
        },
        seconds(seconds){
            return seconds
        },

    }


    for (buttonElement of convertButtonElements){

        buttonElement.addEventListener('click', (e) => {
            // const inputEl = e.target.parentElement.querySelectorAll('input[type=text]')
            const currentInputEl = e.currentTarget.previousElementSibling

            for (const inputEl of inputEls){
                const seconds = toSeconds(Number(currentInputEl.value), currentInputEl.id)
                inputEl.value = converters[inputEl.id](seconds)
            }
            
        })
    }
}