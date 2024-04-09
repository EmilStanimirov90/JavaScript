function solve(input){
    const heroRegister = []

    for (const line of input){
        const[hero, level, items] = line.split(' / ')
        const itemSplit = items.split(', ')
        const heroData ={
            hero,
            level : Number(level),
            itemSplit,
        }
        heroRegister.push(heroData)
        
    }

    heroRegister.sort((a,b) => a.level -b.level)
    
    for (const heroInfo of heroRegister){
        console.log(`Hero: ${heroInfo.hero}`)
        console.log(`level => ${heroInfo.level}`);
        console.log(`items => ${heroInfo.itemSplit.join(', ')}`)

    }

}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])