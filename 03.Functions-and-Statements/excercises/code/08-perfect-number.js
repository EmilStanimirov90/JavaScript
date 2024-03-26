function solve(number){

    function listAllDivisors(number){
        divisors = []
        for (let i = 1; i < number; i++){
            if (number % i === 0){
                divisors.push(i)
            }
        }
        return divisors
    }

    function isPerfectNumber(number,divisors){
        let sum = 0
        divisors.forEach(divisor => sum += divisor)
        return sum ===number
        

    }

    function printResult(result){
        if (result){
            console.log("We have a perfect number!");
        } else {
            console.log("It's not so perfect.");
        }
        
    }

    printResult(isPerfectNumber(number,(listAllDivisors(number))))
}

solve(6)
solve(28)
solve(132)