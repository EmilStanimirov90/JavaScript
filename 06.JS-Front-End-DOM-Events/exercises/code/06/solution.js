function solve() {

  const furnitureListEl = document.querySelector('#exercise > :nth-child(2)')
  const textareaOutputEl = document.querySelector('#exercise textarea:last-of-type')
  const generateButton = document.querySelector('#exercise button:first-of-type')
  const buyButton = document.querySelector('#exercise button:last-of-type')
  const furnitureTbodyEl = document.querySelector('tbody')
 
  // parse input
  
  generateButton.addEventListener('click', (e) =>{
    const inputData = JSON.parse(furnitureListEl.value)

    for(const furniture of inputData){
      const imageElement = document.createElement('img')
      imageElement.src = furniture.img
      const imgTdEL = document.createElement('td')
      imgTdEL.appendChild(imageElement)

      const nameParagraphElement = document.createElement('p')
      nameParagraphElement.textContent = furniture.name
      const nameTdElement = document.createElement('td')
      nameTdElement.appendChild(nameParagraphElement)

      const pricePElement = document.createElement('p')
      pricePElement.textContent = furniture.price
      const priceTdElement = document.createElement('td')
      priceTdElement.appendChild(pricePElement)

      const decorationFactorPElement = document.createElement('p')
      decorationFactorPElement.textContent = furniture.decFactor
      const decFactorTdEl = document.createElement('td')
      decFactorTdEl.appendChild(decorationFactorPElement)

      const markElement = document.createElement('input')
      markElement.type = 'checkbox'
      const markTdElement = document.createElement('td')
      markTdElement.appendChild(markElement)

      const furnitureTrElement = document.createElement('tr')
      furnitureTrElement.appendChild(imgTdEL)
      furnitureTrElement.appendChild(nameTdElement)
      furnitureTrElement.appendChild(priceTdElement)
      furnitureTrElement.appendChild(decFactorTdEl)
      furnitureTrElement.appendChild(markTdElement)

      furnitureTbodyEl.appendChild(furnitureTrElement)
    }

  })


  buyButton.addEventListener('click',(e) => {
  let totalPrice = 0
  let totalDecFactor = 0
  let names = []

  Array.from(furnitureTbodyEl.children)
    .forEach(furniture => {
      const markInputEl = furniture.querySelector('input[type=checkbox]')
      if (!markInputEl.checked){
        return
      }

      const name = furniture.children.item(1).textContent
      const price = Number(furniture.children.item(2).textContent)
      const decFac = Number(furniture.children.item(3).textContent)
      
      names.push(name)
      totalPrice += price
      totalDecFactor += decFac
    })
  
  let avaragedecFactor = totalDecFactor / names.length
  textareaOutputEl.textContent += `Bought furniture: ${names.join(', ')}\n`
  textareaOutputEl.textContent += `Total price: ${totalPrice.toFixed(2)}\n`
  textareaOutputEl.textContent += `Average decoration factor: ${avaragedecFactor}`

  })
 

}