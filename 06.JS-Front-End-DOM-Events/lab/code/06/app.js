function validate() {
    const emailInputEl = document.getElementById('email')
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+/
    emailInputEl. addEventListener('change', (e) =>{
        if (!pattern.test(e.target.value)) {
            emailInputEl.classList.add('error')
        } else {
            emailInputEl.classList.remove('error')
        }

        
    })
}