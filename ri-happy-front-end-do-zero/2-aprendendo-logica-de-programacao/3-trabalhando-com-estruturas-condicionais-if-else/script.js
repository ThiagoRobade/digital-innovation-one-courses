// LIÇÃO 1 - IF

let isOn = true

if(isOn){
    console.log("Executou comando")
}

let haveEggs = true
let purchasedItems = " "

if(haveEggs){
    purchasedItems = "Leite"
}

console.log(purchasedItems)


// LIÇÃO 2 = ELSE

haveEggs = false

if(haveEggs){
    purchasedItems = "Leite"
} else {
    console.log("Passou na sessão de congelados")
    purchasedItems = "Lasanha"
    console.log(purchasedItems)
}


// LIÇÃO 3 - ELSE IF

let hungerLevel = 1

if(hungerLevel === 1){
    console.log("Pouca fome")
} else if (hungerLevel === 2){
    console.log("Está com fome")
} else {
    console.log("Está com muita fome")
}


