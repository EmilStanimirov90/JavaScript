function solve(numbers){

    function isPalindrome(number){
        if (number === flipNumber(number)){
            return true
        }
        return false
       

    }

    function flipNumber(number){
        const string = String(number)
        const reverseString = string.split('').reverse().join('')
        return Number(reverseString)
    }

    for (const num of numbers){
        console.log(isPalindrome(num));
    }

}

solve([123,323,421,121])
solve([32,2,232,1010])