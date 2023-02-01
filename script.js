/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let studentName = prompt('Nome do aluno:')
let n1 = Number(prompt('Nota 1:'))
let n2 = Number(prompt('Nota 2:'))
let n3 = Number(prompt('Nota 3:'))
let average = (n1 + n2 + n3) / 3

if (average >= 6) {
  alert(`Parabéns ${studentName}, você foi aprovado com média ${average}`)
} else {
  alert(`Bah ${studentName}, tu não passou cara, tua média foi ${average}`)
}
