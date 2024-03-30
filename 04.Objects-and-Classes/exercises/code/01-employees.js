function solve(input) {
    const listEmployees = {}
    for (let name of input){
        listEmployees[name] = name.length
    } 

    for (const employee in listEmployees){
        console.log(`Name: ${employee} -- Personal Number: ${listEmployees[employee]}`);
    }

    
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])