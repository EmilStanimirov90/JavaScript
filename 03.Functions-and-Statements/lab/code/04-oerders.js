function solve(product, quantity) {
    console.log((getProductPrice(product)*quantity).toFixed(2))
    
    function getProductPrice(product){
        
        if (product === 'coffee'){
           return 1.50
        } 
        if (product === 'water'){
            return 1.00
        }
        if (product === 'coke'){
            return 1.40
        }
        if (product === 'snacks'){
            return 2.00
        }    
        
    }

    
}

solve("water", 5)
solve("coffee", 2)