function solve(names) {
    names
        .sort((a, b) => a.localeCompare(b))
        .forEach((name, index) => console.log(`${index+1}.${name}`))
        
    
}

solve(["John", "Bob", "Christina", "Ema"])



function solve2(names) {
    
    names.sort((a, b) => a.localeCompare(b))
    for (i = 0; i< names.length; i++){
        console.log(`${i+1}.${names[i]}`);
    }
}

solve2(["John", "Bob", "Christina", "Ema"])