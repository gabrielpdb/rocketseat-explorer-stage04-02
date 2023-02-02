/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/
let finish = false
let option = 0
let items = []

alert('foi')

do {
  option = prompt(`Olá usuário! Digite o número da opção desejada
  
1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa`)

  option = Number(option)

  switch (option) {
    case 1:
      items.push(prompt('Informe um item:'))
      break
    case 2:
      alert(items)
      break
    case 3:
      finish = true
      break
    default:
      break
  }
} while (!finish)

alert('Obrigado por usar meu sistema')
