function focused() {
    const inputEls =document.querySelectorAll('input[type=text]')

    Array.from(inputEls).forEach(inputEl => inputEl.addEventListener('focus', (e) =>{
        e.target.parentElement.classList.add('focused')
    }))

    Array.from(inputEls).forEach(inputEl => inputEl.addEventListener('blur', (e) =>{
        e.target.parentElement.classList.remove('focused')
    }))

    console.log(Array.from(inputEls));
    console.log(inputEls);
}