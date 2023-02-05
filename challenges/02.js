let students = [
  { name: 'Jão', n1: 10, n2: 4 },
  { name: 'Janaina', n1: 5, n2: 2 },
  { name: 'Alexandre', n1: 6, n2: 8 },
  { name: 'Gabriel', n1: 2, n2: 3 }
]

function average(student) {
  return (student.n1 + student.n2) / 2
}

function passed(average) {
  if (average >= 7) {
    return true
  } else {
    return false
  }
}

for (const student of students) {
  if (passed(average(student))) {
    alert(`A média do(a) aluno(a) ${student.name} é: ${average(student)}
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
  } else {
    alert(`A média do(a) aluno(a) ${student.name} é: ${average(student)}
    Não foi dessa vez, ${student.name}! Tente novamente!`)
  }
}
