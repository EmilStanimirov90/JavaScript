function deleteByEmail() {
    const inputEmailEl = document.querySelector('input[name=email]')
    const resultElement = document.getElementById('result')
    const trElements = document.querySelectorAll('#customers tbody tr')

    const trEl = Array
    .from(trElements)
    .find(element => element.children[1].textContent.includes(inputEmailEl.value))

    if (trEl){

        trEl.remove()

        resultElement.textContent = 'Deleted.'

    } else{
        resultElement.textContent = 'Not found.'
    }
    inputEmailEl.value =  ''
}
