// Classes
console.log('1)------------------------------------------------');
class Pessoa{
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }

}

const pessoa_1 = new Pessoa();
pessoa_1.nome = 'Chaves do 8';
pessoa_1.idade = 8;

const pessoa_2 = new Pessoa();
pessoa_2.nome = 'Seu Madruga';
pessoa_2.idade = 50;

console.log(pessoa_1);
console.log(pessoa_2);

pessoa_1.descrever();
pessoa_2.descrever();

console.log('--------------------------------------------------');
console.log('\n');

// Constructor
console.log('2)------------------------------------------------');
class Vila{
    nome_vila;
    proprietario;
    qtd_moradores;

    constructor(nome_vila, proprietario, qtd_moradores){
        this.nome_vila = nome_vila;
        this.proprietario = proprietario;
        this.qtd_moradores = qtd_moradores;
    }

    descrever_vila(){
        console.log(`Na ${this.nome_vila} moram ${this.qtd_moradores} pessoas e o proprietario chama-se ${this.proprietario}`);
    }
}

const vila_1 = new Vila('Vila do Chaves', 'Sr. Barriga', 10)

console.log(vila_1 );
vila_1.descrever_vila();


console.log('--------------------------------------------------');
console.log('\n');

// 
console.log('3)------------------------------------------------');

// Comparar pessoas
function compararPessoas(pessoa_1, pessoa_2){
    if (pessoa_1.idade > pessoa_2.idade){
        console.log(`${pessoa_1.nome} é mais velho(a) que o(a) ${pessoa_2.nome}`);
    } else if (pessoa_2.idade > pessoa_1.idade) {
        console.log(`${pessoa_2.nome} é mais velho(a) que o(a) ${pessoa_1.nome}`);
    } else {
        console.log(`${pessoa_1.nome} e ${pessoa_2.nome} tem a mesma idade`);
    }
}

compararPessoas(pessoa_1, pessoa_2);


console.log('--------------------------------------------------');
console.log('\n');
