function solve(input){
    let string = input[0]
    let i = 1
    

    function replaceAlll(str, find, replace) {
       
        const regex = new RegExp(find, 'g');
        
        return str.replace(regex, replace);
    }

    function filterEvenIndices(message) {
        let updatedMessage = '';
        for (let i = 0; i < message.length; i += 2) {
            updatedMessage += message[i];
        }
        return updatedMessage;
    }
    


    while (input[i] !== 'Buy'){
       let [command, substring, replacement] = input[i].split('?')   

        if (command === "TakeEven"){
            
            string = filterEvenIndices(string)
            console.log(string);

        } else if(command === 'ChangeAll') {
            
            string = replaceAlll(string, substring, replacement)
            console.log(string);
        
        } else if(command === 'Reverse'){
                        
            if(!string.includes(substring)){
                console.log('error');
                
            } else {
                string = string.replace(substring, '')
                string += substring.split('').reverse().join('')
                
                
                console.log(string);
            }
        }

        
     
        i++
    }
    console.log(`The cryptocurrency is: ${string}`);
}

solve((["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs", 
"TakeEven",
"Reverse?!nzahc",
"ChangeAll?m?g",
"Reverse?adshk",
"ChangeAll?z?i",
"Buy",
"Reverse?!nzahc"
]
))

solve((["PZDfA2PkAsakhnefZ7aZ", 
"TakeEven",
"TakeEven",
"TakeEven",
"ChangeAll?Z?X",
"ChangeAll?A?R",
"Reverse?PRX",
"Buy"])
)