// const score1 = 42;
// const score2 = 36;
// const score3 = 68;

// const totalScore = (score1 + score2 + score3)
// const averageScore = totalScore / 3

// console.log('Total Score is: ' + totalScore);
// console.log('Average Score is: ' + averageScore);


const scores = [42, 36, 68]

let total = 0

scores.forEach(score => total+=score)

let average = (total / scores.length)

console.log('Total Score is: ' + total);
console.log('Average Score is: ' + average);
