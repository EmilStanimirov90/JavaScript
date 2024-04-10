function search() {
   const townListEl = document.getElementById('towns')
   const searchText = document.getElementById('searchText').value
   const resultEl = document.getElementById('result')
   
   
   let matches = 0

   const townArray = Array.from(townListEl.children)

   for (el of townArray){
      el.style.textDecoration = 'none'
      el.style.fontWeight = 'normal'
   }

   for ( el of townArray){
     
      if (el.textContent.toLowerCase().includes(searchText.toLowerCase())) {
         el.style.textDecoration = 'underline'
         el.style.fontWeight = 'bold'
         matches += 1
      }
   }

   if (searchText === ''){
      matches = 0
      for (el of townArray){
         el.style.textDecoration = 'none'
         el.style.fontWeight = 'normal'
      }
   } 

   resultEl.textContent = `${matches} matches found`
}
