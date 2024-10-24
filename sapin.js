//Etape 1 

let baseSapin = ["/"+ "*" +"\\", "/" + "***" +"\\"]
let affichageSapin = baseSapin[0]+ '\n' + baseSapin[1]
console.log(baseSapin)
console.log(affichageSapin)

function sapin(n){
    let newSapin = baseSapin;
    let newBase;
    let affichageSapin=""; 
    while (newSapin.length<n+1){
        newBase = newSapin.slice(-1)//Get the last element of the Previous Sapin
        newBase = newBase[0].split('')//transform it as a an array in order to modify more easily 
        newBase.splice(newBase.length-1, 0, '*'+ '*')//Add the new "*" before the last element of the newBase.
        newBase = newBase.join('')// Transform the array in a character Chain
        newSapin.push(newBase);
    }

    for (let i=0; i<newSapin.length; i++){

        affichageSapin += " " + newSapin[i]+ '\n'

    }

    return affichageSapin;
}
console.log(sapin(2))
console.log(sapin(5));

//Etape 2 