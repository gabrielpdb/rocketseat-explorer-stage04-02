/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/

let items = []

for (let index = 0; index < 10; index++) {
  items[index] = prompt(`Informe o item ${index + 1}:`)

  // items.push(prompt(`Informe o item ${index + 1}:`))
}

alert(items)
