function solve(inStockItems, orderedItems){
    revisedStock = {}
    for (let i = 0; i < inStockItems.length; i++){
        if (i % 2 === 0){
            revisedStock[inStockItems[i]] = Number(inStockItems[i+1])
        }
    }
    

    for (let j = 0; j < orderedItems.length; j++){
        if (j % 2 === 0){
            if ([orderedItems[j]] in revisedStock){
                revisedStock[orderedItems[j]] += Number(orderedItems[j+1])
            }else {
                revisedStock[orderedItems[j]] = orderedItems[j+1]
            }
        }
    }
    

    
    for (const product in revisedStock){
        console.log(`${product} -> ${revisedStock[product]}`);
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])