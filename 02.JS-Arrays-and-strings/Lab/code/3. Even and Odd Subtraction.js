function solve(arr){
    let odd = arr.filter(num => num % 2 !== 0)
    let even = arr.filter(num => num % 2 === 0)
   
    let oddSum = odd.reduce((a, b) => a + b, 0) 
    let evenSum = even.reduce((a, b) => a + b, 0)
    
    console.log(evenSum - oddSum);
}


solve([1,2,3,4,5,6])
solve([3,5,7,9])
