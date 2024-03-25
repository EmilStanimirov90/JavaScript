function solve(password){

    function checkLength(password){
        if (password.length >= 6  && password.length <= 10){
            return true
        }
        return false
    }

    function checkOnlyLettersAndDigits(password){

        const regex = /^[a-zA-Z0-9]+$/;

        return regex.test(password)
    }

    function checkAtLeastTwoDigits(password){
        const regex = /\d.*\d/;

        return regex.test(password);
    }

    function printMessage(password){
        if (!checkLength(password)){
            console.log("Password must be between 6 and 10 characters");
        }
        if (!checkOnlyLettersAndDigits(password)){
            console.log("Password must consist only of letters and digits");
        }
        if (!checkAtLeastTwoDigits(password)){
            console.log("Password must have at least 2 digits");
        }
    
        if (checkAtLeastTwoDigits(password) && checkLength(password) && checkOnlyLettersAndDigits(password)){
            console.log("Password is valid");
        }
    }

    printMessage(password)
    
}

solve('logIn')
solve('MyPass123')
solve('Pa$s$s')