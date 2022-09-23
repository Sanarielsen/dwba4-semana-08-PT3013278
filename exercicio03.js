var alunos = new Array()

var aluno1 = new Object()
aluno1.nome = "João da Silva"
aluno1.pNota = 7
aluno1.sNota = 8.5
aluno1.pNotaMult = aluno1.pNota * 0.6
aluno1.sNotaMult = aluno1.sNota * 0.4
aluno1.tNota = aluno1.pNotaMult + aluno1.sNotaMult

alunos[0] = aluno1

var aluno2 = new Object()
aluno2.nome = "Samuel Henrique"
aluno2.pNota = 10
aluno2.sNota = 9
aluno2.pNotaMult = aluno2.pNota * 0.6
aluno2.sNotaMult = aluno2.sNota * 0.4
aluno2.tNota = aluno2.pNotaMult + aluno2.sNotaMult

alunos[1] = aluno2

var aluno3 = new Object()
aluno3.nome = "João Belarmino"
aluno3.pNota = 8
aluno3.sNota = 6
aluno3.pNotaMult = aluno3.pNota * 0.6
aluno3.sNotaMult = aluno3.sNota * 0.4
aluno3.tNota = aluno3.pNotaMult + aluno3.sNotaMult

alunos[2] = aluno3

for (let i = 0; i < alunos.length; i++) {
  alert("Nome do aluno: " + alunos[i].nome + "\n Nota do aluno: 1º " + alunos[i].pNota + " | 2º " + alunos[i].sNota)
  alert("Nota final do aluno: " + alunos[i].tNota)
}

