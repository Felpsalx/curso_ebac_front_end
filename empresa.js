function SeresVivos(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome

}

function Funcionario(nome, sobrenome, salario, cargo){
    SeresVivos.call(this, nome, sobrenome)
    this.cargo = cargo
    this.salario = salario
}

function Animal(nome, sobrenome, raca){
    SeresVivos.call(this, nome, sobrenome)
    this.raca = raca
}


const Funcionario1 = new Funcionario("josé", "andrade", 6500, "Vendedor" )
const Funcionario2 = new Funcionario("pedro", "messias", 2500, "Analista de arquivos" )
const animal = new Animal("Rex", "tigrinho", "PitBull")


console.log(Funcionario1)
console.log(Funcionario2)
console.log(animal)
