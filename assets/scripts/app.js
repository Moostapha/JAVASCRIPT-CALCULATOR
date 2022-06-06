// Valeur assignée et fixe
const defaultResult = 0;
// assignation d'une constante à une variable currentResult
let currentResult = defaultResult; 

// Fonction capturant le user input et le convertissant en int (car string par défaut)
function getUserNumberInput(){
    // userInput.value est de type string, il faut donc le convertir en int => parseInt() ou +
    // utilisation de return nous permet de capter la valeur et de le use ailleurs
    return parseInt(userInput.value)
}


// Fonction donnat le détail du clacul de manière dynamique
function createAndWriteOutput(operator, resultBeforeCalculation, newNumber ){
    const calculDescription = `${resultBeforeCalculation} ${operator} ${newNumber}`;
    outputResult(currentResult, calculDescription ); // vendor file
}


function add(){
    const enteredNumber = getUserNumberInput();               // appel de la fonction getUserNumberInput et sa valeur donnée par return
    const initialResult = currentResult;                      // récupération de currentResult terme de gauche avant ajout enteredNumber
    currentResult = currentResult + enteredNumber;            // addition
    createAndWriteOutput('+', initialResult, enteredNumber ); // Affichage résultat + détails calcul => 3 params
}


// fonction avant refactorisation
function subtract(){
    const enteredNumber = getUserNumberInput();
    const calculDescription = `${currentResult} - ${enteredNumber}`;
    currentResult = currentResult - enteredNumber;
    outputResult(currentResult, calculDescription);
}

function divide(){
    const enteredNumber = getUserNumberInput();
    const calculDescription = `${currentResult} / ${enteredNumber}`;
    currentResult = currentResult / enteredNumber;
    outputResult(currentResult, calculDescription);
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const calculDescription = `${currentResult} * ${enteredNumber}`;
    currentResult = currentResult * enteredNumber;
    outputResult(currentResult, calculDescription);
}


// ASSIGNATION DES FONCTIONS SUR BOUTONS + DECLENCHEMENT AU CLICK

// on assigne la fonction add (comme une adresse postale) => excécution indirecte de la fonction add.
addBtn.addEventListener('click', add); // add() serait incorrect ici.

subtractBtn.addEventListener('click', subtract);

divideBtn.addEventListener('click', divide);

multiplyBtn.addEventListener('click', multiply);