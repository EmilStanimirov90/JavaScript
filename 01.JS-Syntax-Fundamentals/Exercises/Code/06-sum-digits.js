function solve(num) {
    let  digitsLeft = num
    let sum = 0

    while (digitsLeft > 0) {
        sum += digitsLeft % 10;

        digitsLeft = Math.trunc(digitsLeft / 10)
    }

    console.log(sum)
}

function solveWithStrings(string) {
    let text = string.toString()
    let sum = 0
    for (let i = 0; i < text.length; i++) {
        sum+= Number(text[i])
    }
    console.log(sum)
}


solve(245678)
solveWithStrings(245678)
solve(97561)
solve(543)