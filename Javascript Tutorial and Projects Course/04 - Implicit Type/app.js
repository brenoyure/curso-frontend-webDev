
const number1 = 4
const number2 = 10

let number3 = '10'
let number4 = '23'

result = number3 - number4

/**
 * Mesmo sendo duas strings, o JS fará uma conversão implícita,
 * transformará os valores de string para inteiro e imprimirá o resultado.
 * No caso de operação como - * /.
 * No caso de adição +, ele não converterá, e sim concatenará as strings.
 */
console.log(result);
console.log(typeof result);
