function solve(...args){
    const minNumber = Math.min(...args)
    console.log(minNumber);
}

solve(2,
    5,
    3
)

function getLowestOfTwo(a,b,c){
    const checkTwoNums = (x,y) => x < y ? x : y
    result = checkTwoNums(a, checkTwoNums(b, c))
    console.log(result);
}

getLowestOfTwo(600,
    342,
    123)