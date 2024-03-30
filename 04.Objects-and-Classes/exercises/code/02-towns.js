function solve(input){
    const cityData = []
    for (const data of input){
        const [town, latitude, longitude] = data.split(' | ')
        cityData.push({
            town : town,
            latitude : Number(latitude).toFixed(2),
            longitude : Number(longitude).toFixed(2),
        })
    }

    for (const row of cityData){
        console.log(row);
    }
    
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])