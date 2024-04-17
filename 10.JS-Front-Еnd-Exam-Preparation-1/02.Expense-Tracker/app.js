window.addEventListener("load", solve);

function solve() {
    const addButton = document.getElementById('add-btn')
    const expenseTypeInputElement = document.getElementById('expense');
    const amountInputElement = document.getElementById('amount');
    const dateInputElement = document.getElementById('date');
    const previewListUlElement = document.getElementById('preview-list');
    const expensesListUlElement = document.getElementById('expenses-list');
    const deleteButton = document.querySelector('.delete')

    
    
    addButton.addEventListener('click', (e) => {
       
        const createTypePElement = document.createElement('p');
        const createAmountPElement = document.createElement('p');
        const createDatePElement = document.createElement('p');

        createTypePElement.textContent = `Type: ${expenseTypeInputElement.value}`
        createAmountPElement.textContent = `Amount: ${amountInputElement.value}$`
        createDatePElement.textContent = `Date: ${dateInputElement.value}`

        let expenseValue = expenseTypeInputElement.value
        let amountValue = amountInputElement.value
        let dateValue = dateInputElement.value

        const createArticleElement = document.createElement('article');
        createArticleElement.appendChild(createTypePElement)
        createArticleElement.appendChild(createAmountPElement) 
        createArticleElement.appendChild(createDatePElement)

        const createLiElement = document.createElement('li');
        createLiElement.classList.add('expense-item')
        
        const createButtonsDivElement = document.createElement('div');
        const createEditButton = document.createElement('button');
        const createOkButton = document.createElement('button');

        createButtonsDivElement.classList.add('buttons');	
        createEditButton.classList.add('btn')
        createOkButton.classList.add('btn');
        createEditButton.classList.add('edit')
        createOkButton.classList.add('ok');
        createEditButton.textContent = 'edit'
        createOkButton.textContent = 'ok'

        createButtonsDivElement.appendChild(createEditButton)
        createButtonsDivElement.appendChild(createOkButton)

        createLiElement.appendChild(createArticleElement)
        createLiElement.appendChild(createButtonsDivElement)

        previewListUlElement.appendChild(createLiElement)

        addButton.disabled = true

        expenseTypeInputElement.value = ''
        amountInputElement.value = '' 
        dateInputElement.value = ''

        createEditButton.addEventListener('click', () => {
            expenseTypeInputElement.value = expenseValue
            amountInputElement.value = amountValue
            dateInputElement.value = dateValue
            addButton.disabled = false

            previewListUlElement.removeChild(createLiElement)
        })

        createOkButton.addEventListener('click', () => {
            createLiElement.removeChild(createButtonsDivElement)     
            let data = previewListUlElement.removeChild(createLiElement)
            expensesListUlElement.appendChild(data)
            addButton.disabled = false
            
            
        })
    
    deleteButton.addEventListener('click', () => {
        
        location.reload()
    })


        
})

}

