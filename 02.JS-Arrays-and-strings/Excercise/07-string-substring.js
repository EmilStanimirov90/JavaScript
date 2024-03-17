function solve(searchedWord , text){

    let isWordFound = false
    let iterableText = text.split(' ')

    for (word of iterableText){
        if (word.toLowerCase() === searchedWord){
            isWordFound = true
        }
    } 

    if (isWordFound){
        console.log(searchedWord);
    } else{console.log(`${searchedWord} not found!`);
    }
}

solve('javascript',
'JavaScript is the best programming language'
)

solve(
    'python',
'JavaScript is the best programming language'
)