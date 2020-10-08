//string
let nome = 'Felipe';
console.log(nome);

//number
let number = 27;
number = 27.3;

//boolean
let boolean = true;
boolean = !1;
boolean = !!"Felipe";

//tipos explicitos
let idade: number;
idade = 23;
console.log(typeof idade);

//array
let array: any[] = [100, 200];
console.log(array);

//tuplas
let endereço: [string, number, string] = ["Siméria", 267, "Petrópolis"]
console.log(endereço)

//enums
enum Cor  {
    Branco, // 0
    Vermelho, // 1
    Verde = 100,
    Abóbora, //101
} 
console.log("Enum cor branca: ", Cor.Branco);
console.log("Enum cor verde: ",Cor.Verde);
console.log("Enum cor abóbora: ",Cor.Abóbora);

//tipos em funções
//essa função está definida com retorno tipo string.
function getName(): string {
    return nome;
    //return number; isso geraria um erro typescript
}

//função que não tem objetivo de retornar nada.
function dontReturn(): void {
    console.log('função vazia')
    //return nome; isso geraria um erro typescript 
}

function getSum(numA: number, numB: number): number {
    return numA + numB
}

console.log(getName());
dontReturn();
console.log(getSum(13, 15));

//tipo função
let calculo: (numA: number, numB: number) => number;
// calculo = dontReturn(); isso dará erro pois não se encaixar em 2 variaveis tipo number e o retorno number.
calculo = getSum;
console.log(calculo(53, 21));

//objeto
let usuario: {nome: string, idade: number} = {
    nome: 'Felipe',
    idade: 23,
}
console.log(usuario);

//DESAFIO OBJETOS:
let funcionarios: {
    supervisores: string[],
    baterPonto: (hora: number) => string;
} = { 
    supervisores: [
        'Felipe',
        'Thainá',
        'Eliane'
    ], 
    baterPonto: (hora) => hora <= 8 ? 'Ponto normal' : 'Fora do horário'
};

console.log(funcionarios.supervisores);
console.log(funcionarios.baterPonto(9));

//tipo personalizado (alias)
type Funcionario = {
    supervisores: string[],
    baterPonto: (hora: number) => string;
}

let funcionarios2: Funcionario = { 
    supervisores: [
        'Felipe',
        'Thainá',
        'Eliane'
    ], 
    baterPonto: (hora) => hora <= 8 ? 'Ponto normal' : 'Fora do horário'
};

//Union Types
let nota: 
    | string 
    | number = 10;
nota = '10';
nota = 32;

//never
function falha(msg: string): never {
    throw new Error(msg);
}

let produto: { nome: string, preço: number, validarProduto: () => void} = {
    nome: 'Sabão',
    preço: 4,
    validarProduto() {
        if(!this.nome || this.nome.trim().length === 0) {
            falha('Sem nome.');
        } if (this.preço <= 0) {
            falha('Preço inválido!')
        }
    }
}

produto.validarProduto();

//DESAFIO TRANFORMAR JS EM TS

//CODIGO JS
// let contaBancaria = {
//     saldo: 3456,
//     depositar(valor) {
//         this.saldo += valor
//     }
// }
 
// let correntista = {
//     nome: 'Ana Silva',
//     contaBancaria: contaBancaria,
//     contatos: ['34567890', '98765432']
// }
 
// correntista.contaBancaria.depositar(3000)
// console.log(correntista)

type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}
 
let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)