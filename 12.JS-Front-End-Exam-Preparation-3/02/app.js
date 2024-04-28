window.addEventListener("load", solve);

function solve() {
  
  const inputnameElement = document.getElementById("name");
  const inputPhoneElelmtn = document.getElementById("phone");
  const selectCategoryElement = document.getElementById("category");

  const addButtonElement = document.getElementById("add-btn");
  const checkListElement = document.getElementById("check-list");
  const contactListElement = document.getElementById("contact-list");

  function clearInput() {
    inputnameElement.value = "";
    inputPhoneElelmtn.value = "";
    selectCategoryElement.value = "";
  }

  addButtonElement.addEventListener("click", (event) => {
    if (inputnameElement.value == "" || inputPhoneElelmtn.value == "" || selectCategoryElement.value == "") {
      return
    }
    
    const articleElement = document.createElement("article");
    const namePElement = document.createElement("p");
    const phonePelement = document.createElement("p");
    const categoryPElement = document.createElement("p");

    namePElement.textContent = `name:${inputnameElement.value}`
    phonePelement.textContent = `phone:${inputPhoneElelmtn.value}`
    categoryPElement.textContent = `category:${selectCategoryElement.value}`

    articleElement.appendChild(namePElement);
    articleElement.appendChild(phonePelement);
    articleElement.appendChild(categoryPElement);

    const buttonsContainer = document.createElement("div"); 
    buttonsContainer.classList.add("buttons");
    const editButton = document.createElement('button');
    editButton.classList.add("edit-btn");
    const saveButton = document.createElement("button");
    saveButton.classList.add("save-btn");

    buttonsContainer.appendChild(editButton);
    buttonsContainer.appendChild(saveButton);
    
    const liElement = document.createElement("li");
    liElement.appendChild(articleElement);
    liElement.appendChild(buttonsContainer);

    checkListElement.appendChild(liElement);
    clearInput()

    editButton.addEventListener("click", (event) => {
      inputnameElement.value = namePElement.textContent.split(":")[1];
      inputPhoneElelmtn.value = phonePelement.textContent.split(":")[1];
      selectCategoryElement.value = categoryPElement.textContent.split(":")[1];

      liElement.remove();
    })

    saveButton.addEventListener("click", (event) => {
      buttonsContainer.remove()
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("del-btn");
      liElement.appendChild(deleteButton)
      contactListElement.appendChild(liElement);

      deleteButton.addEventListener("click", (event) => {
        liElement.remove()
      })
    })

    
  });

}
  