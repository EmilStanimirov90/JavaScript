function create(words) {

   const contentEL = document.getElementById('content')
   
   //create div with p
   for (el of words){
      let div = document.createElement('div')
      let p = document.createElement('p')

      p.textContent = el
      // hide paragraphs
      p.style.display = 'none'
      
      // add event listener showing p
      div.addEventListener('click', () => {
         p.style.display = 'block'
      })
      
      div.appendChild(p)
      

      contentEL.appendChild(div)
   }
   

   
   
}