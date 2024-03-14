function solve( num1, num2, num3) {
    if (num1 > num2 && num1 > num3){
        let result = num1
        console.log(`The largest number is ${result}.`)
    } else if (num2 > num1 && num2 > num3){
        let result = num2
        console.log(`The largest number is ${result}.`)
    } else if (num3 > num1 && num3 > num1){
        let result = num3
        console.log(`The largest number is ${result}.`)
    } 
}

solve(5, -3, 16)
solve(-3, -5, -22.5)