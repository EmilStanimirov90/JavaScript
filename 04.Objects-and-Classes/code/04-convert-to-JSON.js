function solve(name, lastName, hairColor){
    const objectData = {
        name,
        lastName,
        hairColor,
    }
    console.log(JSON.stringify(objectData));
}


solve('George', 'Jones', 'Brown')