// Conceitos Básicos

console.log("1)--------------------------------------");
function teste() {
    console.log('Testando');
}

function sayMyName(name) {
    console.log('Your name is: ' + name);
}

function incrementarJuros(valor, percentualJuros) {
    let valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo
}


teste();
sayMyName('Thiago');

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));

console.log("----------------------------------------");
console.log("\n");



// Organizando Funções

console.log("2)--------------------------------------");

function calcularJuros(){
    console.log("Exemplo...");

}

function main() {
    console.log("Programa Principal");
    calcularJuros
}

main();

console.log("----------------------------------------");
console.log("\n");

// Exemplo Prático Com Funções

console.log("3)--------------------------------------");

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obsedidade Grave';
    }
}

// Main
(function () {
    const peso = 88;
    const altura = 1.72;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();

console.log("----------------------------------------");
console.log("\n");