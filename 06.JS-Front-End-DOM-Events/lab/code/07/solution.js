function solve() {
   const addButtonProductEls = document.querySelectorAll('.add-product')
   const textAreaEl = document.querySelector('textarea')
   const checkoutButtonEl = document.querySelector('.checkout')
   let totalSum = 0
   let uniqueProducts = {}

   for (buttonEl of addButtonProductEls){
      const productEl = buttonEl.parentElement.parentElement
      
      // const productEl = buttonEl.closest('.product') is the same
      buttonEl.addEventListener('click', () => {
         const title = productEl.querySelector('.product-title').textContent
         const price = Number(productEl.querySelector('.product-line-price').textContent)
         totalSum += price

         uniqueProducts[title] = true

         textAreaEl.textContent += `Added ${title} for ${price.toFixed(2)} to the cart.\n`
      })
   }

   checkoutButtonEl.addEventListener('click', (e) => {
      Array.from(addButtonProductEls).forEach(buttonElement => buttonElement.setAttribute('disabled', 'disabled'))
      
      e.target.setAttribute('disabled', 'disabled')

      const list = Object.keys(uniqueProducts).join(', ')

      textAreaEl.textContent += `You bought ${list} for ${totalSum.toFixed(2)}.`
   })
}