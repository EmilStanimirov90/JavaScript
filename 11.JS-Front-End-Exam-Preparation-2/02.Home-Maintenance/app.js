window.addEventListener("load", solve);

function solve() {

    const addButton = document.getElementById('add-btn')
    const placeInputElement = document.getElementById('place');
    const actionInputElement = document.getElementById('action');
    const personInputElement = document.getElementById('person');

    const taskListUlElement = document.getElementById('task-list');	
    const doneTasksUlElement = document.getElementById('done-list');



    addButton.addEventListener('click', (e) => {

        if (placeInputElement.value === '' || actionInputElement.value === '' 
        || personInputElement.value === ''){
            return
        }

        const placePElement = document.createElement('p');
        const actionPElement = document.createElement('p');
        const personPElement = document.createElement('p');

        placePElement.textContent = placeInputElement.value
        actionPElement.textContent = actionInputElement.value
        personPElement.textContent = personInputElement.value

        const articleElement = document.createElement('article')
        articleElement.appendChild(placePElement)
        articleElement.appendChild(actionPElement)
        articleElement.appendChild(personPElement)

        //Create BUTTONS

        const editButton = document.createElement('button');
        const doneButton = document.createElement('button');

        editButton.classList.add('edit');
        doneButton.classList.add('done');

        editButton.textContent = 'edit'
        doneButton.textContent = 'done'

        const buttonsContainerElement = document.createElement('div');
        buttonsContainerElement.classList.add('buttons');

        buttonsContainerElement.appendChild(editButton)
        buttonsContainerElement.appendChild(doneButton);

        

        // Create list item
        const liElement = document.createElement('li')
        liElement.classList.add('clean-task')

        liElement.appendChild(articleElement)
        liElement.appendChild(buttonsContainerElement)

        // Attach to DOM

        taskListUlElement.appendChild(liElement)

        // clear input

        placeInputElement.value = ''
        actionInputElement.value = ''
        personInputElement.value = ''

        editButton.addEventListener()


})}
