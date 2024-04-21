window.addEventListener("load", solve);

function solve() {

  
    const addoptButton = document.getElementById('adopt-btn');
    const typeInputElement = document.getElementById('type');
    const ageInputElement = document.getElementById('age');
    const genderInputElement = document.getElementById('gender');
    const adoptionInforUl = document.getElementById('adoption-info');
    const adoptedlistULElement = document.getElementById('adopted-list');

    addoptButton.addEventListener('click', (e) => {
      e.preventDefault()
      if (typeInputElement.value === '' || ageInputElement.value === '' )
       {return}
      if (genderInputElement.selectedIndex === 0){return}

      // P elements creation and article
      const namePelement = document.createElement('p');
      const genderPelement = document.createElement('p');
      const agePelement = document.createElement('p');

      namePelement.textContent = `Pet:${typeInputElement.value}`
      genderPelement.textContent = `Gender:${genderInputElement.value}`
      agePelement.textContent = `Age:${ageInputElement.value}`

      const articleElement = document.createElement('article');
      articleElement.appendChild(namePelement);
      articleElement.appendChild(genderPelement);
      articleElement.appendChild(agePelement);

      // Button creation + div

      const editButton = document.createElement('button');
      const doneButton = document.createElement('button');
      editButton.textContent = 'Edit';
      doneButton.textContent = 'Done';
      editButton.classList.add('edit-btn')
      doneButton.classList.add('done-btn')

      const buttonsContainerElement = document.createElement('div');
      buttonsContainerElement.classList.add('buttons')

      buttonsContainerElement.appendChild(editButton);
      buttonsContainerElement.appendChild(doneButton);
      
      // creat LI element

      const liElement = document.createElement('li');
      liElement.appendChild(articleElement);
      liElement.appendChild(buttonsContainerElement);

      // attach to DOM

      adoptionInforUl.appendChild(liElement);

      // clear input

      typeInputElement.value = '';
      ageInputElement.value = '';
      
      genderInputElement.selectedIndex = 0;

      // Edit button

      editButton.addEventListener('click', (e) => {

        typeInputElement.value = namePelement.textContent.slice(4)
        ageInputElement.value = Number(agePelement.textContent.slice(4))
        if (genderPelement.textContent.slice(7) === 'male') {
          genderInputElement.selectedIndex = 1
        } else if(genderPelement.textContent.slice(7) === 'female') {
          genderInputElement.selectedIndex = 2
        }
        
        liElement.remove()


      })

      doneButton.addEventListener('click', (e) => {
        buttonsContainerElement.remove()
        const clearButton = document.createElement('button');
        clearButton.classList.add('clear-btn')
        clearButton.textContent = 'Clear'
        liElement.appendChild(clearButton)
        adoptedlistULElement.appendChild(liElement)
        
        clearButton.addEventListener('click', (e) => {
          liElement.remove()
        })
      })
    });
  }
  