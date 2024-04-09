function solve(input){
    
    
    const words = input.shift().split(' ')
    const sentence = input
    
    const occurances = {}
    words.forEach(word => occurances[word] = 0)
   
    for (word of sentence){
        if (word in occurances){
            occurances[word] += 1
        } else if (words.includes(word)) {
            occurances[word] += 1
        }
    }

    const sortedOccurences = Object
    .entries(occurances)
    .sort((a, b) => b[1] - a[1])

    for (const[word, qty] of sortedOccurences){
        console.log(`${word} - ${qty}`);
    }
}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])
solve([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])