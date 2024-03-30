function solve(input){
    const meetings = {}
    
    for( const meeting of input){
        const [day, name] = meeting.split(' ')
        if(meetings[day]){
            console.log(`Conflict on ${day}!`);

        }else{
            meetings[day] = name
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const meeting in meetings){
        console.log(`${meeting} -> ${meetings[meeting]}`);
    }

}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])