function toggle() {
    const buttonEl = document.querySelector('.button')
    const extraTextEl = document.querySelector('#extra')

    const currentButtonState = buttonEl.textContent

    if (currentButtonState === 'More'){

        buttonEl.textContent = 'Less'
        extraTextEl.style.display = 'block'
        

    } else{
        buttonEl.textContent = 'More'
        extraTextEl.style.display = 'none'
    }
    
}