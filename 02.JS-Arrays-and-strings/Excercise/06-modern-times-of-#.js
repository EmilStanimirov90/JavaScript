function solve(text){
    const pattern = /#([a-zA-Z]+)/g;
    const matches = text.matchAll(pattern);
    for (const match of matches) {
        console.log(match[1]);
    }
    
}


solve('The symbol # is known #variously in English-speaking #regions as the #number sign')


// function solve(text){
//     text = text.split(' ')
//     result = []
//     for (word of text){
//         if (word[0] === '#' && word.length > 1){
//             result.push(word.substring(1,word.length))
//         }

//     }
//     console.log(result.join('\n'));
// }