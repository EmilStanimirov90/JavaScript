function solve(input){
    let username = input.shift()
    let attemptsCounter = 0
    for (let passwordAttempt of input){
        
        if (passwordAttempt === username.split('').reverse().join('')){
            console.log(`User ${username} logged in.`);
        } else{
            attemptsCounter += 1
            if (attemptsCounter === 4) {
                console.log(`User ${username} blocked!`);
                break
            }
            console.log(`Incorrect password. Try again.`);
        }
    }
}

solve(['Acer','login','go','let me in','recA'])
solve(['momo','omom'])
solve(['sunny','rainy','cloudy','sunny','not sunny'])