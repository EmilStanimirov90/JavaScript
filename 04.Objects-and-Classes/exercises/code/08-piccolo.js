function solve(input) {
    parkingLot = []
    
    for (let dataPair of input){
        
        const [command , carNumber] = dataPair.split(', ')
        
        if (command === 'IN'){
            if (!(parkingLot.includes(carNumber))){
                parkingLot.push(carNumber)
            }
            
        } else if (command === 'OUT'){
            parkingLot = parkingLot.filter(car => car !== carNumber)
        }

    }

    sortedParkingLot = parkingLot.sort((a,b) => a.localeCompare(b))
    
    if (parkingLot.length > 0) {
        console.log(parkingLot.join('\n'));
    } else{
        console.log(`Parking Lot is Empty`);
    }
    
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])