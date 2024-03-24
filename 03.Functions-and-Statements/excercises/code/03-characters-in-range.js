function solve(firstNum, secondNum){

    function getASCIINumber(symbol){
        return symbol.charCodeAt(0)
    }

    const determineFirstNumber = (a, b) => (getASCIINumber(a) < getASCIINumber(b)) ? a : b
    const determineLastNumber = (a, b) => (getASCIINumber(a) > getASCIINumber(b)) ? a : b
   
    let result = []

    for (let i = getASCIINumber(determineFirstNumber(firstNum, secondNum)) + 1; i < getASCIINumber(determineLastNumber(firstNum, secondNum)); i++){
        result.push(String.fromCharCode(i))
    }
    
    console.log(result.join(' '));
}


solve('C',
'#')