function solve(num, op1, op2, op3, op4, op5, op6){
    let result = num
    if (op1 === "chop"){
        result /= 2
    } else if ( op1 === "dice"){
        result = Math.sqrt(result)
    } else if ( op1 === "spice"){
        result += 1
    } else if ( op1 === "bake"){
        result *= 3
    } else if ( op1 === "fillet"){
        result *= 0.8
    }

    console.log(result)

    if (op2 === "chop"){
        result /= 2
    } else if ( op2 === "dice"){
        result = Math.sqrt(result)
    } else if ( op2 === "spice"){
        result += 1
    } else if ( op2 === "bake"){
        result *= 3
    } else if ( op2 === "fillet"){
        result *= 0.8
    }
    
    console.log(result)
    
    if (op3 === "chop"){
        result /= 2
    } else if ( op3 === "dice"){
        result = Math.sqrt(result)
    } else if ( op3 === "spice"){
        result += 1
    } else if ( op3 === "bake"){
        result *= 3
    } else if ( op3 === "fillet"){
        result *= 0.8
    }
    
    console.log(result)
    
    if (op4 === "chop"){
        result /= 2
    } else if ( op4 === "dice"){
        result = Math.sqrt(result)
    } else if ( op4 === "spice"){
        result += 1
    } else if ( op4 === "bake"){
        result *= 3
    } else if ( op4 === "fillet"){
        result *= 0.8
    }
    
    console.log(result)
    
    if (op5 === "chop"){
        result /= 2
    } else if ( op5 === "dice"){
        result = Math.sqrt(result)
    } else if ( op5 === "spice"){
        result += 1
    } else if ( op5 === "bake"){
        result *= 3
    } else if ( op5 === "fillet"){
        result *= 0.8
    }
    
    console.log(result)
    
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')