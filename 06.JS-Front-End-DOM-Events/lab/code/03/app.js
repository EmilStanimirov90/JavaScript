function addItem() {
    const locationEl = document.getElementById('items')
    const newItemText = document.getElementById('newItemText')

    let newItem = document.createElement('li')
    newItem.textContent = newItemText.value

    locationEl.appendChild(newItem)

    newItemText.value = ''

    // delete elemetent creation
    const deleteEL = document.createElement('a')
    deleteEL.textContent = '[Delete]'
    deleteEL.href = '#'
    
    // add event to delete elelement - each newItem has its own event listener
    deleteEL.addEventListener('click', () =>{
        newItem.remove()
    })
    
    newItem. appendChild(deleteEL)
}