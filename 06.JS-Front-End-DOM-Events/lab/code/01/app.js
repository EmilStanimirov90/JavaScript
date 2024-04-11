function addItem() {
    const locationEl = document.getElementById('items')
    const newItemText = document.getElementById('newItemText')
    let newItem = document.createElement('li')
    newItem.textContent = newItemText.value
    locationEl.appendChild(newItem)

    newItemText.value = ''
}