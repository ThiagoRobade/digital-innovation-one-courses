/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
    Crie um método que dados a quantidade de quilometros e o preço do combustível nos de o
    valor gasto em reais para realizar este percurso.
*/ 

class Carros {
    marca;
    cor;
    gastoMedioPorKm;

constructor(marca, cor, gastoMedioPorKm){
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
 }

 calcularGastoDePercurso(distancia, precoCombustivel){
    return distancia *  this.gastoMedioPorKm * precoCombustivel
 }

}

const uno = new Carros('Fiat', 'Prata', 1/12);
const palio = new Carros('Fiat', 'Prata', 1/10);


console.log(uno.calcularGastoDePercurso(70, 5));
console.log(palio.calcularGastoDePercurso(70, 5));

