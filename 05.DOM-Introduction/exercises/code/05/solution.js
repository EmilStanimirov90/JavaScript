function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const trElements = document.querySelectorAll('tbody tr')
      const searchWord = document.getElementById('searchField').value
      
      
      
      for (const trEl of trElements){
         const tdElements = trEl.querySelectorAll('td')
         let isSelected = false
         trEl.classList.remove('select')

         for (const tdEl of tdElements){
            if (tdEl.textContent.includes(searchWord)){
               isSelected = true
               break
            }
         }

         if (isSelected){
            // trEl.className = 'select'
            trEl.classList.add('select')
         }
         
      }

      searchWord = ''
   }
}