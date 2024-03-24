function solve(number) {
    number = String(number)
    

    function sumEven(number){
        let sum = 0
        for (const digit of number){
            
            if (digit % 2 === 0){
                sum += Number(digit)

            }
        }
        return sum
    }

    function sumOdd(number){
        let sum = 0
        for (const digit of number){
            
            if (digit % 2 !== 0){
                sum += Number(digit)

            }
        }
        return sum
    }
    
    console.log(`Odd sum = ${sumOdd(number)}, Even sum = ${sumEven(number)}`);
}

solve(1000435)
solve(3495892137259234)