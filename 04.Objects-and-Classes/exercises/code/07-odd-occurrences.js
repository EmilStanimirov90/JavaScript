function solve(sentence){
    sentence = sentence.split(' ')
    
    occurences = {}

    for (const word of sentence){
        lowerCaseWord = word.toLowerCase()
        
        if (!(lowerCaseWord in occurences)){
            occurences[lowerCaseWord] = 0
        }

        occurences[lowerCaseWord] += 1
        
    }


    const result = []
    for (occurence in occurences){
        if (occurences[occurence] % 2 !== 0){
            result.push(occurence)
        }
    }

    console.log(result.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
solve('Cake IS SWEET is Soft CAKE sweet Food')