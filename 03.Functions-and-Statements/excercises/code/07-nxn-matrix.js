function solve(number) {

    function createMatrix(number){
        let matrix = []
        for (let i = 0; i < number; i++){
            matrix.push([])
            for (let j = 0; j < number; j++){
                matrix[i].push(number)
            }
        }
        return matrix
    }

    function printMatrix(matrix){
        matrix.forEach(row => {
            console.log(row.join(' '));
            
        });
    }

    
    printMatrix(createMatrix(number))
    
}

// solve(3)
// solve(2)
// solve(8)

function solve2(num){
    
    const createRow = (num) => new Array(num).fill(num).join(' ')
    
    function printMatrix(num){
        for (let i = 0; i < num; i++){
            console.log(createRow(num));
        }
    }
    printMatrix(num)
}

solve2(4)
solve2(3)