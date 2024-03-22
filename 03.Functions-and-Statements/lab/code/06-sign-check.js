function solve(...args){
    const array = args
    counter = 0
    function isNegative(array){ 
        for (const num of array){
            if (num < 0){
                counter += 1
            } 
        }
        if (counter % 2 === 0 ){
            return false
        }
        return true
    }
        
    
    if (isNegative(array)){ 
        console.log('Negative');
    } else {
        console.log('Positive');
    }
    
}

solve(5,
    12,
   -15
   )
solve(-6,
    -12,
     14
    
   )
solve(-1,
    -2,
    -3
    
   )
solve(-5,
    1,
    1
   
    
   )
