function solve(text, word){
    let text = text.split(" ")
    let count = 0
    for (w of text){
        if (w === word){
            count += 1
        }
    }    
    console.log(count);
}

solve('This is a word and it also is a sentence',
'is')
solve('softuni is great place for learning new programming languages',
'softuni')