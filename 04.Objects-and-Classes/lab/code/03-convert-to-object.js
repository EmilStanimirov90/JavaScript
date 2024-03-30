function solve(dataString){
    const objectData = JSON.parse(dataString)

    Object.keys(objectData)
    .forEach(key => console.log(`${key}: ${objectData[key]}`))
   
}

solve('{"name": "George", "age": 40, "town": "Sofia"}')