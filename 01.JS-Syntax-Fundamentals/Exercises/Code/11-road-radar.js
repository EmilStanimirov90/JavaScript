function solve(currentSpeed, area) {
    let speedLimit  = 0;

    if (area === 'motorway') {
        speedLimit = 130
    } else if (area === 'interstate'){
        speedLimit = 90
    } else if (area === 'city'){
        speedLimit = 50
    } else if (area === 'residential'){
        speedLimit = 20
    }

    let result = ''
    if (currentSpeed - speedLimit > 40) {
        result = "reckless driving"
    } else if (currentSpeed - speedLimit > 20) {
        result = "excessive speeding"
    } else if (currentSpeed - speedLimit > 0) {
        result = "speeding"
    }

    let speeding = false
    if (currentSpeed > speedLimit) {
        speeding = true
    }

    if (speeding){
        console.log(`The speed is ${currentSpeed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${result}`)
    } else {
        console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`)
    }
}

solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')
solve(200, 'motorway')