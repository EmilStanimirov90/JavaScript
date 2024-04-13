function lockedProfile() {
    const profileElements = document.querySelectorAll('.profile')

    for (const profileElement of profileElements){
        const showButtonElement = profileElement.querySelector('button')
        const lockButtonEL = profileElement.querySelector('input[type=radio][value=lock]')

        showButtonElement.addEventListener('click', (e) =>{
            if (lockButtonEL.checked) {
                return
            }

            const aditionalInforElement = showButtonElement.previousElementSibling
            
            
            if (showButtonElement.textContent === 'Show more'){
                
                aditionalInforElement.style.display = 'block'
                showButtonElement.textContent = 'Hide it'
                
                
            }else if(showButtonElement.textContent === 'Hide it'){
                
                aditionalInforElement.style.display = 'none'
                showButtonElement.textContent = 'Show more'
            }
            
        })
    }
}