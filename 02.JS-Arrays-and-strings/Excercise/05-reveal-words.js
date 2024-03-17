
function solve(wordsForReplacement, text){
    text = text.split(' ')
    wordsForReplacement = wordsForReplacement.split(', ')
    
    for (let i = 0; i < text.length; i++){
        if (text[i][0]==='*'){
            for (let wordForReplacement of wordsForReplacement){
                
                if (text[i].length === wordForReplacement.length){
                    text[i] = wordForReplacement
                    
                }
            }
        }
    }
    console.log(text.join(' '));
}

solve('great, learning',
'softuni is ***** place for ******** new programming languages'
)

