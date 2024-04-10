function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const restaurantInfoEl = document.querySelector('textarea').value
      const bestRestaurantTextEl = document.querySelector('#bestRestaurant p')
      const bestWorkersTextEl = document.querySelector('#workers p')
      
      const restaurantList = JSON.parse(restaurantInfoEl)
      const restaurantsDataList = []

      for (restaurant of restaurantList){
         let [restName, workers] = restaurant.split(' - ')
         workers = workers.split(', ')
         
         const currentRestData = {
            restName,
         }
         let sumSalaries = 0
         let highestSalary = 0
         for (const el of workers){
            const [workerName, salary] = el.split(' ')
            currentRestData[workerName] = Number(salary)
            sumSalaries += Number(salary)

            if (Number(salary) > highestSalary) {
               highestSalary = salary   
            }
            
            
         }
         
         currentRestData['highestSalary'] = highestSalary
         currentRestData['avarageSalary'] = (Number(sumSalaries / Number(workers.length)).toFixed(2))
         restaurantsDataList.push(currentRestData)
                
      }

      
      let highestAvarageSalary = 0
      let index = 0
      for (i = 0; i < restaurantsDataList.length; i++){
         if (highestAvarageSalary < restaurantsDataList[i].avarageSalary){
            highestAvarageSalary = restaurantsDataList[i].avarageSalary
            index = i
         }
      }

      bestRestaurantTextEl.textContent =  `Name: ${restaurantsDataList[index].restName} Average Salary: ${restaurantsDataList[index].avarageSalary} Best Salary: ${restaurantsDataList[index].highestSalary}`
      
      let result = []

      for (el in restaurantsDataList[index]){
         if (el !=='restName' && el !=='avarageSalary' && el !=='highestSalary'){
            result.push(`Name: ${el} With Salary: ${restaurantsDataList[index][el]}`) 
         }
      }
      bestWorkersTextEl.textContent = result.join(' ')


           

   
   

      
      

            
   }
}