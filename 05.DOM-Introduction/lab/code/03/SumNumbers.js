function calc() {
    const firstInputEl = document.getElementById('num1')
    const secondInputEl = document.getElementById('num2')
    const resultOutput = document.querySelector('#sum')

    
    resultOutput.value = Number(firstInputEl.value) + Number(secondInputEl.value)
}
