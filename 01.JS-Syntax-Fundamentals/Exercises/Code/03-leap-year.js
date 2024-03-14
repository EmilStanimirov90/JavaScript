function solve(year){
    let result = "no"
    if (year % 100 !== 0 && year % 4 === 0){
        result = "yes"
    } else if (year % 400 === 0){
        result = "yes"
    }
    console.log(result)
}

solve(1984)
solve(2003)
solve(4)
solve(400)
solve(200)

