const baseUrl = 'http://localhost:3030/jsonstore/records'

const addRecordButton = document.getElementById('add-record');
const editRecordButton = document.getElementById('edit-record');
const loadRecordsButton = document.getElementById('load-records');
const listUL = document.getElementById('list');

const nameInputElement = document.getElementById('p-name');
const stepsInputElement = document.getElementById('steps');
const caloriesInputElement = document.getElementById('calories');

editRecordButton.disabled = true;

currentRecordId = null

function clearInput(){
    nameInputElement.value = '';
    stepsInputElement.value = '';
    caloriesInputElement.value = '';
}

function getInputData(){
    const name = nameInputElement.value;
    const steps = stepsInputElement.value;
    const calories = caloriesInputElement.value;
    return {name, steps, calories};
}

const loadRecords = async () => {

    // clear UL list
    listUL.innerHTML = '';

    // diable edit record ?????? here ????????
    editRecordButton.disabled = true;

    // GET REQUEST
    const response = await fetch(baseUrl);
    const data = await response.json();

    for (const record of Object.values(data)){
        console.log(record.name);
        console.log(record.steps);
        console.log(record.calories);

        // create P elements and get values + create info container and attach them
        const namePelement = document.createElement('p');
        const stepsPelement = document.createElement('p');
        const caloriesPelement = document.createElement('p');

        namePelement.textContent = record.name
        stepsPelement.textContent = record.steps
        caloriesPelement.textContent = record.calories

        const infoContainerELement = document.createElement('div');
        infoContainerELement.classList.add('info');

        infoContainerELement.appendChild(namePelement);
        infoContainerELement.appendChild(stepsPelement);
        infoContainerELement.appendChild(caloriesPelement);

        // create buttons and buttons container

        const changeButton = document.createElement('button'); 
        const deleteButton = document.createElement('button'); 

        changeButton.classList.add('change-btn');
        deleteButton.classList.add('delete-btn');

        changeButton.textContent = 'Change';
        deleteButton.textContent = 'Delete';

        const buttonsContainerElement = document.createElement('div');
        buttonsContainerElement.classList.add('btn-wrapper');

        buttonsContainerElement.appendChild(changeButton);
        buttonsContainerElement.appendChild(deleteButton);

        //create li element

        recordLiElement = document.createElement('li');
        recordLiElement.classList.add('record');

        recordLiElement.appendChild(infoContainerELement);
        recordLiElement.appendChild(buttonsContainerElement);

        //attach to DOM

        listUL.appendChild(recordLiElement);

        // CHNAGE BUTTON FUNC
        changeButton.addEventListener('click', (e) => {
            
            // set current record
            currentRecordId = record._id
            
            // populate input fields
            nameInputElement.value = record.name;
            stepsInputElement.value = record.steps;
            caloriesInputElement.value = record.calories;

            //disable/enable buttons 
            editRecordButton.disabled = false;
            addRecordButton.disabled = true;

            //remove current record LI from list UL
            recordLiElement.remove()
        })

        // DELETE BUTTON
        deleteButton.addEventListener('click', async() => {
            const response = fetch(`${baseUrl}/${record._id}`, {
                method: 'DELETE',
            })
            recordLiElement.remove()
        })
    }
    
}

loadRecordsButton.addEventListener('click', loadRecords);


addRecordButton.addEventListener('click', async() => {
    

    const response = await fetch(baseUrl, {
        method: 'POST',	
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(getInputData())
    })

    if (!response.ok){
        return
    }

    clearInput();

    await loadRecords()

})

editRecordButton.addEventListener('click', async() => {

    // GET INPUT DATA
    let{name, steps, calories} = getInputData();

    // PUT REQUEST
    const response = await fetch(`${baseUrl}/${currentRecordId}`, {
        method: 'PUT',
        headers: {
            'content-type':'aplication/json'
        },
            body: JSON.stringify({
                _id: currentRecordId,
                name,
                steps,
                calories,
            })
    })

    if (!response.ok){
        return
    }

    // buttons enable/disable
    editRecordButton.disabled = true;
    addRecordButton.disabled = false;

    clearInput();

    await loadRecords()

})


    
