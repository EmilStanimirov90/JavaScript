function solve(grade){
    const result = formatGrade(grade)
    if (grade < 3) {
        grade = 2
        console.log(`${result} (${grade})`);

    } else{
        console.log(`${result} (${grade.toFixed(2)})`);
    }

    

    function formatGrade(grade){
        let formattedGrade = ''
        if (grade < 3){
            formattedGrade = 'Fail'
        } else if (grade >= 3 && grade < 3.5){
            formattedGrade ="Poor"
        } else if (grade >= 3.5 && grade < 4.5){
            formattedGrade ="Good"
        } else if (grade >= 4.5 && grade < 5.5){
            formattedGrade ="Very good"
        } else if (grade >= 5.5 && grade <= 6){
            formattedGrade = "Excellent"
        }
    
        return formattedGrade
    }
}

solve(2.33)
solve(5.33)
solve(6.33)
solve(5.53)




function solve2(grade){
    const result = formatGrade(grade)
    if (grade < 3) {
        grade = 2
        console.log(`${result} (${grade})`);

    } else{
        console.log(`${result} (${grade.toFixed(2)})`);
    }

    

    function formatGrade(grade){
        
        if (grade < 3){
            return 'Fail'
        }
        
        if (grade >= 3 && grade < 3.5){
            return "Poor"
        }
        
        if (grade >= 3.5 && grade < 4.5){
            return"Good"
        }
        
        if (grade >= 4.5 && grade < 5.5){
            return"Very good"
        }
        
        if (grade >= 5.5 && grade <= 6){
            return"Excellent"
        }
    
       
    }
}

solve2(2.33)
solve2(5.33)
solve2(6.33)
solve2(5.53)


