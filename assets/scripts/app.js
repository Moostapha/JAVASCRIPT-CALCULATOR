// Valeur assignée et fixe
const defaultResult = 0;
// assignation d'une constante à une variable currentResult
let currentResult = defaultResult; 

// Variable globale pour array => Tableau vide qui grandira avec le temps
let logEntries = [];

// FONCTION PERMETTANT REFACTORING

// Fonction capturant le user input et le convertissant en int (car string par défaut)
function getUserNumberInput(){
    // userInput.value est de type string, il faut donc le convertir en int => parseInt() ou +
    // utilisation de return nous permet de capter la valeur et de le use ailleurs
    return parseInt(userInput.value)
}


// Fonction donnat le détail du calcul de manière dynamique => Ordre des params est IMPORTANT !!!
function createAndWriteOutput( resultBeforeCalculation, operator, newNumber ){
    const calculDescription = `${resultBeforeCalculation} ${operator} ${newNumber}`;  // OUTPUT TEXT
    outputResult(calculDescription, currentResult ); // vendor file
}


// FONCTIONS DES 4 OPERATIONS

function add(){
    const enteredNumber = getUserNumberInput();                         // appel de la fonction getUserNumberInput et sa valeur donnée par return
    const previousResult = currentResult;                               // récupération de currentResult terme de droite avant ajout enteredNumber
    console.log('previousResult addition:', previousResult);            // Affichage dans console
    currentResult = currentResult + enteredNumber;                      // addition => currentResult de gauche et de droite ne sont pas les sames valeurs
    createAndWriteOutput( previousResult, '+', enteredNumber );         // Affichage résultat + détails calcul => 3 params résultat précédent auquel ajout nouvelle valeur
    logEntries.push(enteredNumber);                                     // Ajout dans le tableau logEntries (vide de base cf ligne 7) de enteredNumber à chaque click
    console.log('Array des valeurs ajoutées par add():', logEntries);   // Affichage des valeurs ajoutées par le user 
}


// fonction avant refactorisation
function subtract(){
    const enteredNumber = getUserNumberInput();
    // const calculDescription = `${currentResult} - ${enteredNumber}`;  => Refactorisation dans createAndWriteOutput
    const previousResult = currentResult                                 // currentResult membre de droite
    console.log('previousResult soustraction:', previousResult); 
    currentResult = currentResult - enteredNumber;
    // outputResult(calculDescription, currentResult );                  => Refactorisation dans createAndWriteOutput
    createAndWriteOutput(previousResult, '-', enteredNumber)
}

// Ecriture des 2 autres fonctions sans la refactorisation faite avec createAndWriteOutput()
function divide(){
    const enteredNumber = getUserNumberInput();
    const calculDescription = `${currentResult} / ${enteredNumber}`;
    currentResult = currentResult / enteredNumber;
    outputResult(calculDescription, currentResult);
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const calculDescription = `${currentResult} * ${enteredNumber}`;
    currentResult = currentResult * enteredNumber;
    outputResult(calculDescription , currentResult );
}


// ASSIGNATION DES FONCTIONS SUR BOUTONS + DECLENCHEMENT AU CLICK

// appel fonction add au click sur le bouton +
// on assigne la fonction add (comme une adresse postale) => excécution indirecte de la fonction add.
// add() serait incorrect ici => éxécution directe de la fonction or on veut l'éxécuter au click
addBtn.addEventListener('click', add);  

// appel fonction subtract au click sur le bouton -
subtractBtn.addEventListener('click', subtract);

// appel fonction divide au click sur le bouton /
divideBtn.addEventListener('click', divide);

// appel fonction multiply au click sur le bouton *
multiplyBtn.addEventListener('click', multiply);