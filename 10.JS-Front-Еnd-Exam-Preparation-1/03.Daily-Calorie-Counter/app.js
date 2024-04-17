const baseUrl = ('http://localhost:3030/jsonstore/tasks')

const loadMealsButton = document.getElementById('load-meals')
const mealListDivElement = document.getElementById('list')
const addMealButton = document.getElementById('add-meal')
const editMealsButton = document.getElementById('edit-meal')


const foodInputElement = document.getElementById('food');
const timeInputElement = document.getElementById('time');
const caloriesInputElement = document.getElementById('calories');

let currentMealId = null


// GET REQUEST + HTML REPRESENTATION
const loadMeals = async () => {
    
    mealListDivElement.innerHTML = ''

    const response = await fetch(baseUrl)
    const data = await response.json()
        
    for (const meal of Object.values(data)) {
        const createChangeButton = document.createElement('button')
        const createDeleteButton = document.createElement('button')
        createChangeButton.classList.add('change-meal')
        createDeleteButton.classList.add('delete-meal')
        createChangeButton.textContent = 'Change'
        createDeleteButton.textContent = 'Delete'

        const createMealButtonsDivElement = document.createElement('div')
        createMealButtonsDivElement.id = 'meal-buttons'
        createMealButtonsDivElement.appendChild(createChangeButton)
        createMealButtonsDivElement.appendChild(createDeleteButton)

        const createMealNameH2Element = document.createElement('h2')
        const createMealTimeH3Element = document.createElement('h3')
        const createMealCaloriesH3Element = document.createElement('h3')

        createMealNameH2Element.textContent = meal.food
        createMealTimeH3Element.textContent = meal.time
        createMealCaloriesH3Element.textContent = meal.calories

        const createMealDataDivElement = document.createElement('div')
        createMealDataDivElement.appendChild(createMealNameH2Element)
        createMealDataDivElement.appendChild(createMealTimeH3Element)
        createMealDataDivElement.appendChild(createMealCaloriesH3Element)
        createMealDataDivElement.appendChild(createMealButtonsDivElement)
        
        createMealDataDivElement.classList.add('meal')
        mealListDivElement.appendChild(createMealDataDivElement)

        // CHANGE BUTTON  functionality

        createChangeButton.addEventListener('click', () => {
            
            currentMealId = meal._id

        
            foodInputElement.value = meal.food
            timeInputElement.value = meal.time
            caloriesInputElement.value = meal.calories

            addMealButton.disabled = true
            editMealsButton.disabled = false

            createMealDataDivElement.remove()

        })
        
        // DELETE BUTTON functionality
        createDeleteButton.addEventListener('click', async () => {

            const response = await fetch(`${baseUrl}/${meal._id}`, {
                method: 'DELETE',
            })

            createMealDataDivElement.remove()
        })
    }
}

// LOAD BUTTON
loadMealsButton.addEventListener('click', loadMeals);

// GET INPUT DATE FOR REUSABILITY LOL
function getInputData(){
    const food = foodInputElement.value
    const time = timeInputElement.value
    const calories = caloriesInputElement.value
    return {food, time, calories}
}

//CLEAR INPUT DATA FOR REUSABILITY
function clearInputData(){
    foodInputElement.value = ''
    timeInputElement.value = ''
    caloriesInputElement.value = ''
}

//EDIT BUTTON = PUT REQUEST
editMealsButton.addEventListener('click', async () => {

    const food = foodInputElement.value
    const time = timeInputElement.value
    const calories = caloriesInputElement.value
    

    const response = await fetch(`${baseUrl}/${currentMealId}`,{
        method: 'PUT',
        headers: {'content-type': 'application/json',},
        body: JSON.stringify({
            _id : currentMealId,
            food,
            time,
            calories,
        })
    })

    if (!response.ok){
        return
    }

    

    editMealsButton.disabled = true
    addMealButton.disabled = false

    currentMealId = null //!!!!!!!!

    clearInputData()
    await loadMeals()




})

// ADD MEAL BUTTON = POST REQUEST - UPLOADING DATA TO SERVER
addMealButton.addEventListener('click', async (event) => {

    const newMeal = getInputData()  
        

    const response = await fetch(baseUrl, {
        method : 'POST',
        headers: {
            'content-type' : 'application/json',
        },
        body: JSON.stringify(newMeal)
    })

    if (!response.ok) {
        return
    }

    

    clearInputData()
    await loadMeals()


})