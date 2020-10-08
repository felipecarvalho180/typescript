"use strict";
//string
var nome = 'Felipe';
console.log(nome);
//number
var number = 27;
number = 27.3;
//boolean
var boolean = true;
boolean = !1;
boolean = !!"Felipe";
//tipos explicitos
var idade;
idade = 23;
console.log(typeof idade);
//array
var array = [100, 200];
console.log(array);
//tuplas
var endereço = ["Siméria", 267, "Petrópolis"];
console.log(endereço);
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Branco"] = 0] = "Branco";
    Cor[Cor["Vermelho"] = 1] = "Vermelho";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Ab\u00F3bora"] = 101] = "Ab\u00F3bora";
})(Cor || (Cor = {}));
console.log("Enum cor branca: ", Cor.Branco);
console.log("Enum cor verde: ", Cor.Verde);
console.log("Enum cor abóbora: ", Cor.Abóbora);
//tipos em funções
//essa função está definida com retorno tipo string.
function getName() {
    return nome;
    //return number; isso geraria um erro typescript
}
//função que não tem objetivo de retornar nada.
function dontReturn() {
    console.log('função vazia');
    //return nome; isso geraria um erro typescript 
}
function getSum(numA, numB) {
    return numA + numB;
}
console.log(getName());
dontReturn();
console.log(getSum(13, 15));
//tipo função
var calculo;
// calculo = dontReturn(); isso dará erro pois não se encaixar em 2 variaveis tipo number e o retorno number.
calculo = getSum;
console.log(calculo(53, 21));
//objeto
var usuario = {
    nome: 'Felipe',
    idade: 23,
};
console.log(usuario);
//DESAFIO OBJETOS:
var funcionarios = {
    supervisores: [
        'Felipe',
        'Thainá',
        'Eliane'
    ],
    baterPonto: function (hora) { return hora <= 8 ? 'Ponto normal' : 'Fora do horário'; }
};
console.log(funcionarios.supervisores);
console.log(funcionarios.baterPonto(9));
var funcionarios2 = {
    supervisores: [
        'Felipe',
        'Thainá',
        'Eliane'
    ],
    baterPonto: function (hora) { return hora <= 8 ? 'Ponto normal' : 'Fora do horário'; }
};
//Union Types
var nota = 10;
nota = '10';
nota = 32;
//never
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preço: 4,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length === 0) {
            falha('Sem nome.');
        }
        if (this.preço <= 0) {
            falha('Preço inválido!');
        }
    }
};
produto.validarProduto();
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
