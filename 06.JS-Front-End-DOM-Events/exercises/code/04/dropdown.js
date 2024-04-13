function addItem() {
    const inputNewItemTextEl = document.querySelector('#newItemText')
    const inputNewItemValueEl = document.querySelector('#newItemValue')
    const selectMenuEl = document.querySelector('#menu')

    const optionElement = document.createElement('option')
    optionElement.value = inputNewItemValueEl.value
    optionElement.textContent = inputNewItemTextEl.value

    selectMenuEl.appendChild(optionElement)

    inputNewItemTextEl.value = ''
    inputNewItemValueEl.value = ''

}