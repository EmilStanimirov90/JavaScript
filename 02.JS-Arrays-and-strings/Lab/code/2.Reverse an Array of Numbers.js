function solve(num, list) {
    let newArray = list.slice(0, num)
    let reversedArray = newArray.reverse()
    console.log(reversedArray.join(' '));
}

solve(3, [10, 20, 30, 40, 50])
solve(4, [-1, 20, 99, 5])