// Objetos
console.log('1)------------------------------------------------');
const thiago = {
    nome: 'Thiago Robade',
    idade: 35
};

console.log(thiago.nome);
console.log(thiago.idade);
console.log('--------------------------------------------------');
console.log('\n');

console.log('2)------------------------------------------------');
console.log(thiago);
console.log('--------------------------------------------------');
console.log('\n');

// Incrementando 
console.log('3)------------------------------------------------');
thiago.altura = 1.72
console.log(thiago);
console.log('--------------------------------------------------');
console.log('\n');

// Função
console.log('4)------------------------------------------------');
const pessoa = {
    nome: 'Pessoa',
    idade: 0,

    // Criando Método
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.nome = 'Hermes'
pessoa.idade = 40

pessoa.descrever(); 
console.log('--------------------------------------------------');
console.log('\n');

// Acessando dinamicamente os valores de um objeto
console.log('5)------------------------------------------------');
const atributo = 'idade';
console.log(pessoa[atributo]);

// Outra forma

console.log(pessoa['nome']);
console.log('--------------------------------------------------');
console.log('\n');