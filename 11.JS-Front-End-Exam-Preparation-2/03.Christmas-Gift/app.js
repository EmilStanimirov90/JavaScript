const baseUrl = 'http://localhost:3030/jsonstore/gifts'

const loadButton = document.getElementById('load-presents')
const presentsListDivElement = document.getElementById('gift-list')
const addButton = document.getElementById('add-present')
const editButton = document.getElementById('edit-present')
editButton.disabled = true

const presentIputElement = document.getElementById('gift')
const forPersonIputElement = document.getElementById('for')
const priceInputElement = document.getElementById('price')

let currentpresentId = null


const loadPresents = async () => {
    
    //Clear Container
    presentsListDivElement.innerHTML = ''

    // GET REQUEST
    const response = await fetch(baseUrl)
    const data = await response.json()

    // Create Elements

    for (const presentData of Object.values(data)){
        console.log(presentData);
        //Create Present Data Element
        const giftPElement = document.createElement('p')
        const personPElement = document.createElement('p')
        const pricePElement = document.createElement('p')

        giftPElement.textContent = presentData.gift
        personPElement.textContent = presentData.for
        pricePElement.textContent = presentData.price

        const contentPresentContainerDivElement = document.createElement('div')
        contentPresentContainerDivElement.classList.add('content')

        contentPresentContainerDivElement.appendChild(giftPElement)
         //position???
        contentPresentContainerDivElement.appendChild(pricePElement)
        contentPresentContainerDivElement.appendChild(personPElement)

        // Create Present Buttons Element

        const changeButton = document.createElement('button')
        const deleteButton = document.createElement('button')

        changeButton.textContent = 'Change'
        deleteButton.textContent = 'Delete'

        changeButton.classList.add('change-btn')
        deleteButton.classList.add('delete-btn')

        const buttonsContainerDivElement = document.createElement('div')
        buttonsContainerDivElement.classList.add('buttons-container')

        buttonsContainerDivElement.appendChild(changeButton)
        buttonsContainerDivElement.appendChild(deleteButton)

        // Attach to Gift Sock Container
        const giftSockDivElement = document.createElement('div')
        giftSockDivElement.classList.add('gift-sock')
        giftSockDivElement.appendChild(contentPresentContainerDivElement)
        giftSockDivElement.appendChild(buttonsContainerDivElement)

        //Attach to DOM
        presentsListDivElement.appendChild(giftSockDivElement)


        //Change Button
        changeButton.addEventListener('click', () => {

            currentpresentId = presentData._id

            console.log(currentpresentId);
            console.log(presentData.id);
            console.log(presentData.gift);
            console.log(presentData.for);
            console.log(presentData.price);
            presentIputElement.value = presentData.gift
            forPersonIputElement.value = presentData.for
            priceInputElement.value = presentData.price

            editButton.disabled = false
            addButton.disabled = true

            giftSockDivElement.remove()
        })

        //Delete Button

        deleteButton.addEventListener('click', async () => {

            currentpresentId = presentData._id

            const response = await fetch(`${baseUrl}/${presentData._id}`, {
                method: 'DELETE'
                
            })

            giftSockDivElement.remove()
            
        })
        
    }
    
}

loadButton.addEventListener('click', loadPresents)

// Add Button POST Element
addButton.addEventListener('click', async ( event ) => {

    const {gift, forPerson, price} = getInputData()
    
    
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            gift,
            for: forPerson,
            price,           
        })
    })

    if (!response.ok) {
        return
    }

    clearInputData()
    await loadPresents()
    
    
})

// Edit Button PUT Element...
editButton.addEventListener('click', async ( event ) => {

    const {gift, forPerson, price} = getInputData()
    
    const response = await fetch(`${baseUrl}/${currentpresentId}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            _id: currentpresentId,
            gift,
            for: forPerson,
            price,           
        })
    })

    if (!response.ok) {
        return
    }

    editButton.disabled = true
    addButton.disabled = false

    currentpresentId = null

    clearInputData()

    await loadPresents()
})

function getInputData() {
    const gift = presentIputElement.value
    const forPerson = forPersonIputElement.value
    const price = priceInputElement.value

    return {gift, forPerson, price}

}

function clearInputData() {
    presentIputElement.value = ''
    forPersonIputElement.value = ''
    priceInputElement.value = ''
}
