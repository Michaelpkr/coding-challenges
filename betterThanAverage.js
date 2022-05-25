// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!


// First, I need to create a function that takes in the array of my peers scores, and also my score to compare against
function betterThanAverage(classPoints,yourPoints){
let scoreSum = 0;
for(let i = 0; i <= classPoints.length; i++){
    scoreSum = (scoreSum + classPoints[i])
}
    let classAverage = (scoreSum / classPoints.length)

    alert(classAverage)
    alert(yourPoints)

    if(classAverage > yourPoints){
        return true
    }else return false
}
// I will need to add all of my peers scores together, and then divide them by the number of elements in the array.

// If I want to add my peers scores together, I will need to have a variable that is tracking the running total of scores added. Something like scoreSum. Then as the loop increments, it is adding to scoreSum

// At that point I will need to compare my score, against the average of my peers scores, and then return true or false, based on if my score is higher or lower than average.











// FAILED SOLUTION

// function betterThanAverage(classPoints, yourPoints){
    
//     for(i = 0; i <= classPoints.length; i++){
//         let classSum =+ (classPoints[i])
//     }
//     let classAverage = (classSum / (classPoints.length))

//     if (classAverage > yourPoints){
//         return true
//     }else false
// }
