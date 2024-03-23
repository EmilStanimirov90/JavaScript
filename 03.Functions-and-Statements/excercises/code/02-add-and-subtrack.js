function solve(a,b,c){
    console.log(subtract(sum(a,b),c));

    function sum(a,b){
        return a + b 
    }

    function subtract(sum, c){
        return sum - c
    }

}

solve(23,
    6,
    10)
solve(21,
    17,
    30)
solve(42,
    58,
    100)

function solve2(a,b,c){
    

    const sum = (a,b) => a+b
    const subtract = (a,b) => a-b

    const result = subtract(sum(a,b), c)
    console.log(result);

}

solve2(23,
    6,
    10)
solve2(21,
    17,
    30)
solve2(42,
    58,
    100)
