/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

let numberOne = Number(prompt('Número 1: '))
let numberTwo = Number(prompt('Número 2: '))

alert(`${numberOne} | ${numberTwo}
Soma: ${numberOne + numberTwo}
Subtração: ${numberOne - numberTwo}
Multiplicação: ${numberOne * numberTwo}
Divisão: ${numberOne / numberTwo}
Resto da divisão: ${numberOne % numberTwo}
`)
