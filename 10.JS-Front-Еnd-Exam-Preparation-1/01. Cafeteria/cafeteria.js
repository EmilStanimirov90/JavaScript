function solve(input){
    
    let numberOfEmployees = Number(input[0])
    let employeeData = {}


    for (var i = 0; i < input.length; i++){
        if (i > 0 && i <= numberOfEmployees){
            let [name, shift, drinks] = input[i].split(' ')
            employeeData[name] = {
                shift,
                drinks: drinks.split(',')
            }
            // console.log(employeeData[name])
            // console.log(employeeData[name].drinks)
            // console.log(employeeData)
        }
       
    
        if (i > numberOfEmployees){
            let [command, commandName, commandShift, commandDrink] = input[i].split(' / ')
            // console.log(command, commandName, commandShift, commandDrink)

            if (command === 'Prepare'){

                if(employeeData[commandName].shift === commandShift &&
                    employeeData[commandName].drinks.includes(commandDrink)){
                    console.log(`${commandName} has prepared a ${commandDrink} for you!`);

                }else {
                    console.log(`${commandName} is not available to prepare a ${commandDrink}.`);
                }
                     
            } else if (command === 'Change Shift'){

                employeeData[commandName].shift = commandShift
                console.log(`${commandName} has updated his shift to: ${commandShift}`);

            } else if (command === 'Learn'){

                if(employeeData[commandName].drinks.includes(commandShift)){
                    console.log(`${commandName} knows how to make ${commandShift}.`);

                }else {
                    employeeData[commandName].drinks.push(commandShift)
                    console.log(`${commandName} has learned a new coffee type: ${commandShift}.`);
                }
            }
        
        }

    }
    
    for (let barista in employeeData){
        
        console.log(`Barista: ${barista}, Shift: ${employeeData[barista].shift}, Drinks: ${employeeData[barista].drinks.join(', ')}`);
    }
    
}


solve(['4',
'Alice day Espresso,Cappuccino',
'Bob night Latte,Mocha',
'Carol day Americano,Mocha',
'David night Espresso',
'Prepare / Alice / day / Espresso',
'Change Shift / Bob / day',
'Learn / Carol / Latte',
'Prepare / Bob / night / Latte',
'Learn / David / Cappuccino',
'Prepare / Carol / day / Cappuccino',
'Change Shift / Alice / night',
 'Learn / Bob / Mocha',
'Prepare / David / night / Espresso',
'Closed'])