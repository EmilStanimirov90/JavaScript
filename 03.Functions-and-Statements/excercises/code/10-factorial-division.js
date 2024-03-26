function solve(numberOne, numberTwo){

    function findFactorial(number){
        let factorial = 1
        for (let i = 1; i <= number; i++){
            factorial *= i
        }
        return factorial
    }

    function divideFactorials(factorialOne, factorialTwo){
        return factorialOne / factorialTwo
    }

    function printFormattedResult(result){
        console.log(result.toFixed(2));
    }

    printFormattedResult(divideFactorials(findFactorial(numberOne),findFactorial(numberTwo)))
}

solve(5,
    2)
solve(6,
2)