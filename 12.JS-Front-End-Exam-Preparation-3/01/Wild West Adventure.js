function solve(input){
    const n = Number(input[0])
    let characters = {}
    


    for (let j = 1; j <= n; j++) {
        let [name, hp, bullets] = input[j].split(' ')
        hp = Number(hp)
        if(hp > 100){
            hp = 100
        }
        bullets = Number(bullets)
        characters[name] = {hp, bullets}
    }
    
    function fireShot(input){
       let [command , attacker, target] = input.split(' - ')
        if (characters[attacker].bullets <= 0) {
           
            return `${attacker} doesn't have enough bullets to shoot at ${target}!`
        }

        characters[attacker].bullets -= 1
        return `${attacker} has successfully hit ${target} and now has ${characters[attacker].bullets} bullets!`
    }

    function takeHit(input){

        let [command, target, damage, attacker] = input.split(' - ')
               
        characters[target].hp -= Number(damage)

        if (characters[target].hp <= 0) {
            characters[target].hp = 0
            return `${target} was gunned down by ${attacker}!`
        }

        return `${target} took a hit for ${damage} HP from ${attacker} and now has ${characters[target].hp} HP!`
    }

    function reload(input){
        let [command, name] = input.split(' - ')
        if (characters[name].bullets >= 6){
            return  `${name}'s pistol is fully loaded!`
        }


        let reloadedBullets = 6 - characters[name].bullets
        characters[name].bullets = 6
        
        return `${name} reloaded ${reloadedBullets} bullets!`

    }

    function patchUp(input){
        let [command, name , amount] = input.split(' - ')
        if (characters[name].hp >= 100) {
            return `${name} is in full health!`
            
        }

        characters[name].hp += Number(amount) 
        if (characters[name].hp > 100 ){
            characters[name].hp = 100
        }
               return `${name} patched up and recovered ${amount} HP!`
    }

    let i = n + 1
    while (input[i] !== 'Ride Off Into Sunset') {

        if (input[i].includes('FireShot')){
            console.log(fireShot(input[i]))

            
        } else if (input[i].includes('TakeHit')) { 
            console.log(takeHit(input[i]))

        } else if (input[i].includes('Reload')) { 
            console.log(reload(input[i]));

        } else if (input[i].includes('PatchUp')) { 
            console.log(patchUp(input[i]));
        }

        i++
    }

    for (char in characters) {
        if (characters[char].hp > 0){
            console.log(char);
            console.log(` HP: ${characters[char].hp}`);
            console.log(` Bullets: ${characters[char].bullets}`);
        }
    }
    
    


}

solve(["2",
"Gus 100 4",
"Walt 100 5",
"FireShot - Gus - Bandit",
"TakeHit - Walt - 100 - Bandit",
"Reload - Gus",
"Ride Off Into Sunset"])



