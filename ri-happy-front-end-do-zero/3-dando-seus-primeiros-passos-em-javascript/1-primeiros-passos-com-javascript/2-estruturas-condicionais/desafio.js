/**
 *  Faça um programa para calcular o valor de uma viagem.
 * 
 * Você terá 3 variáveis. Sendo elas:
 * 1 - Preço do etanol;
 * 2 - Preço da gasolina;
 * 3 - O tipo de combustível que está no seu carro;
 * 4 - Gasto médio do combustível do carro por KM;
 * 3 - Distância em KM da viagem;
 * 
 * Imprima no console o valor que será gasto para realizar esta viagem.
 */

const precoEtanol = 4.04
const precoGasolina = 6.12;
const consumoPorKm = 10;
const distanciaViagem = 100;
const tipoCombustivel = "Etanol";

const litrosConsumidos = distanciaViagem / consumoPorKm;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));

} else {
    const valorGasto = litrosConsumidos * precoGasolina
    console.log(valorGasto.toFixed(2));
}

