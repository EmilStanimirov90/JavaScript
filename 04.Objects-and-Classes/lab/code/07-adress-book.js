function solve(input){
    const adressBook = {}
    for (const line of input){
        const [name, adress] = line.split(':')
        adressBook[name] = adress

    }
    
    const sortedAdresBook = Object.entries(adressBook).sort((a, b) => a[0].localeCompare(b[0]))
    
    
    for(const name of sortedAdresBook){
        console.log(`${name[0]} -> ${name[1]}`);
    }


}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])