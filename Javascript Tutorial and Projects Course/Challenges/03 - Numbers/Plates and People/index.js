/**
 * Calculate remaining plates and assign to a variable
 * and one to the remaining plates
 * 
 * Create a message variable and display 'There are (x plates) plates available
 * Log the Message
 */

const plates = 20
const people = 7

let remainingPlates = plates % people
remainingPlates++

const message = 'There are ' + remainingPlates + ' plates available.'

console.log(message);
