function solve() {

    const toMenuEl = document.getElementById('selectMenuTo')
    const inputNumberEl = document.getElementById('input')
    const result = document.getElementById('result')
    const convertButtonEl = document.querySelector('button')


    const binaryOptionEl = toMenuEl.querySelector('option')
    binaryOptionEl.value = 'binary'
    binaryOptionEl.textContent = 'Binary'

    const hexadecimalOptionEL = document.createElement('option')
    hexadecimalOptionEL.value = 'hexadecimal'
    hexadecimalOptionEL.textContent = 'Hexadecimal'
    toMenuEl.appendChild(hexadecimalOptionEL)
       
    convertButtonEl.addEventListener('click', () => {
        if (toMenuEl.value === 'binary'){
            result.value = Number(inputNumberEl.value).toString(2)
        }else if (toMenuEl.value === 'hexadecimal'){
            result.value = Number(inputNumberEl.value).toString(16).toLocaleUpperCase()
        }
    })
}