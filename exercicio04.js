class Aluno {
  
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {

    this.primeiroNome = primeiroNome
    this.segundoNome = segundoNome
    this.primeiraNota = primeiraNota
    this.segundaNota = segundaNota
  }

  mostrarNomeCompleto() {

    alert("Nome completo do aluno: " + this.primeiroNome + " " + this.segundoNome)
  }

  mostrarMedia() {

    alert("Média final do aluno: " + ((this.primeiraNota + this.segundaNota) / 2 ) )
  }

  mostrarSituacao() {

    let media = (this.primeiraNota + this.segundaNota) / 2

    if ( media > 6 ) {

      alert("Aluno: Aprovado");
    } else {

      alert("Aluno: Reprovado");
    }
  }

}

function mostrarAlunos(alunos) {

  for (let i = 0; i < alunos.length; i++) {

    alunos[i].mostrarNomeCompleto()
    alunos[i].mostrarMedia()
    alunos[i].mostrarSituacao()
  }
}

var alunos = new Array()

var aluno = new Aluno("Samuel", "Henrique", 10, 9)
alunos[0] = aluno
var aluno2 = new Aluno("Diogo", "Salgueiro", 8, 7)
alunos[1] = aluno2
var aluno3 = new Aluno("João", "Belarmino", 5, 2)
alunos[2] = aluno3
var aluno4 = new Aluno("João", "Arruda", 10, 7)
alunos[3] = aluno4
var aluno5 = new Aluno("Joshua", "Nascimento", 6, 5)
alunos[4] = aluno5

mostrarAlunos(alunos)