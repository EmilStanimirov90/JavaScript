function solve(numbers) {
    let sortedNumbers = numbers.sort((a,b) => a-b);
    let result = []
    while ( sortedNumbers.length > 0) {
        let firstNum = sortedNumbers.shift()
        let lastNum = sortedNumbers.pop()
        
        result.push(firstNum)

        if (lastNum) {
            result.push(lastNum)
        }
    }

    return result
    
}


solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])