function solve(num) {
    let sum = 0
    let text = num.toString()
    let allDigitsTheSame = true
    for (let i = 0; i < text.length; i++){
        if (text[0] !== text[i]){
            allDigitsTheSame = false
        }
        sum += Number(text[i])
        
    }
    console.log(allDigitsTheSame)
    console.log(sum)
}


solve(2222222)  