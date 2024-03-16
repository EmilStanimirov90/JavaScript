function solve(numbers) {
    let firstNum = numbers.pop()
    let lastNum = numbers.shift()
    console.log(firstNum + lastNum);
}

solve([20, 30, 40])
solve([10, 17, 22, 33])
solve([11, 58, 69])
