function solve(stringInPascalCase){
    let result = []
    let wordToAdd = ''

    for (let chr of stringInPascalCase){
        
        if (chr === chr.toUpperCase()){

            if (wordToAdd !== '') {
                result.push(wordToAdd)
            }
            
            wordToAdd = ''
        }
        
        wordToAdd += chr
      
        }
    result.push(wordToAdd)    
    console.log(result.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')

function solve2(input) {
    const matches = input.matchAll(/[A-Z][a-z]*/g)
    const words = Array.from(matches).map(match => match[0])

    console.log(words.join(', '));
}

solve2('SplitMeIfYouCanHaHaYouCantOrYouCan') 