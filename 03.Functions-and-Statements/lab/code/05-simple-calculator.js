function solve(firstNumber, secondNumber, operator){
    console.log(getCalculation(firstNumber, secondNumber, operator));
    function getCalculation(firstNumber, secondNumber, operator) {
        switch (operator) {
            case 'multiply':
                return firstNumber * secondNumber
            case 'divide':
                return firstNumber / secondNumber
            case 'add':
                return firstNumber + secondNumber
            case 'subtract':
                return firstNumber - secondNumber
        }
    }
}


solve(5,5, 'multiply') 