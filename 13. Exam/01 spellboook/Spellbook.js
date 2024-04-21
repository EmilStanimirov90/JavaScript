function solve(input){

    let string = input[0]
    let i = 1
    function removeEven(message){
        let updatedMessage = '';
        for (let i = 0; i < message.length; i += 2) {
            updatedMessage += message[i];
        }
        return updatedMessage;
    }

    function takePart(input, string){
        let [command, startIndex, endIndex] = input.split('!');
        let result = string.slice(Number(startIndex), Number(endIndex))
        return result

    }

    function reverseString(input, string){
        let [command, substring] = input.split('!');
        
        result = string.replace(substring, '')
        
        result = result + substring.split('').reverse().join('')
        return result

    }

    while(input[i] != "End"){

        if (input[i].includes("RemoveEven")){
            console.log(removeEven(string));
            string = removeEven(string)

        } else if (input[i].includes("TakePart")){
            console.log(takePart(input[i], string))
            string = takePart(input[i],string)

        }else if (input[i].includes("Reverse")){
            let [command, substring] = input[i].split('!')
            if (!string.includes(substring)){
                console.log('Error'); 
                
            } else {
                console.log(reverseString(input[i], string));
                string = reverseString(input[i], string)
            }
            
            
        }



        i++
    }

    console.log(`The concealed spell is: ${string}`);
}

solve((["asAsl2adkda2mdaczsa", 
"RemoveEven",
"TakePart!1!9",
"Reverse!maz",
"End"])


)