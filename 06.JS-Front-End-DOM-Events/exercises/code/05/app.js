function encodeAndDecodeMessages() {
    const messageEL = document.querySelector('main > :nth-child(1) > :nth-child(2)')
    const receivedMessageEL = document.querySelector('main > :nth-child(2) > :nth-child(2)')
    const encodeButtonEL = document.querySelector('main > :nth-child(1) > :nth-child(3)')
    const decodeButtonEL = document.querySelector('main > :nth-child(2) > :nth-child(3)')
    
    console.log(messageEL);
    console.log(receivedMessageEL);
    console.log(encodeButtonEL);
    console.log(decodeButtonEL);

    encodeButtonEL.addEventListener('click', (e) =>{
        let result = ''
        for (chr of messageEL.value){

            let newChar = Number(chr.charCodeAt()) + 1
            result += String.fromCharCode(newChar)
            
        }

        receivedMessageEL.value = result
        messageEL.value = ''

    })

    decodeButtonEL.addEventListener('click', (e) =>{
        let result = ''
        for (chr of receivedMessageEL.value){

            let newChar = Number(chr.charCodeAt()) - 1
            result += String.fromCharCode(newChar)
            
        }
        
        receivedMessageEL.value = result
    })
}