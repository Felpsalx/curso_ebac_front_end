"use strict";

var alunos = [{
  nome: 'André',
  nota: 7
}, {
  nome: 'Pedro',
  nota: 5
}, {
  nome: 'João',
  nota: 7
}, {
  nome: 'Kaique',
  nota: 2
}];
function NotasDoasAprovados(alunos) {
  var aprovados = alunos.filter(function (alunos) {
    return alunos.nota >= 6;
  });
  return aprovados;
}
console.log(NotasDoasAprovados(alunos));