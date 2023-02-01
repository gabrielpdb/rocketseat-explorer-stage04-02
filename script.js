/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

let number = Math.floor(Math.random() * 10)
alert(number)
let tries = 0
let guess

do {
  if (tries == 0) {
    guess = prompt('Adivinhe o número que estou pensando. Está entre 0 e 10')
  } else {
    guess = prompt('Erro, tente novamente:')
  }
  tries++
} while (guess != number)

alert(`Parabéns! Você adivinhou o número em ${tries} tentativas`)
