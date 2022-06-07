// Valeur assignée et fixe
const defaultResult = 0;
// assignation d'une constante à une variable currentResult
let currentResult = defaultResult; 


// FONCTIONS PERMETTANT REFACTORING

// Fonction capturant le user input et le convertissant en int (car string par défaut)
function getUserNumberInput(){
    // utilisation de return nous permet de capter la valeur et de le use ailleurs | userInput.value est de type string, il faut donc le convertir en int => parseInt() ou +
    return parseInt(userInput.value); 
}


// Fonction donnat le détail du calcul de manière dynamique => Ordre des params est IMPORTANT !!!
function createAndWriteOutput( resultBeforeCalculation, operator, newNumber ){
    
    // OUTPUT TEXT
    const calculDescription = `${resultBeforeCalculation} ${operator} ${newNumber}`;
    
    // appel de la fonction outputResult de vendor.js avec les paramètres dynamiques
    outputResult(calculDescription, currentResult ); 
}

// Variable globale pour array => Tableau vide qui grandira avec le temps
let logEntries = [];


// Objet global => package d'infos groupés ensemble donnant plusieurs infos variées de différents types

function logEntryPackageInConsole(operation, previousResult, enteredNumber, currentResult){  // 4 params doivent match les valeurs de l'objet 
    
    // Objet package {clé: valeur} avec mutiples infos | datas groupés, structurés sous forme clé:valeur
    const logEntryPackage = {                                                  
        operation: operation,                 // values === params
        previousResult: previousResult,       // Clés pointe vers une variable qui est le param. de la fonction de refactorisation
        enteredNumber: enteredNumber,
        result: currentResult
    };
    
    // Ajout dans le array logEntries de l'objet logEntryPackage
    logEntries.push(logEntryPackage); 
    
    // Affichage new objets dans le Array
    console.log('Array des objets ajoutés par opérations', logEntries) 
}


// FONCTIONS DES 4 OPERATIONS

function add(){
    
    // 1) appel de la fonction getUserNumberInput et sa valeur donnée par return
    const enteredNumber = getUserNumberInput();  
    
    // 2) récupération de currentResult terme de droite avant ajout enteredNumber
    const previousResult = currentResult;     
    
    // 3) Affichage dans console
    console.log('previousResult addition:', previousResult);  
    
    // 4) addition => currentResult de gauche et de droite ne sont pas les sames valeurs
    currentResult = currentResult + enteredNumber;
    
    // 5) Affichage résultat + détails calcul => 3 params résultat précédent auquel ajout nouvelle valeur
    createAndWriteOutput( previousResult, '+', enteredNumber ); 
    
    // 7) Objet package {clé: valeur} avec multiples infos | datas groupés, structurés sous forme clé:valeur
    const logEntryPackage = {                                                  
        operation: 'ADD',
        previousResult: previousResult,   
        enteredNumber: enteredNumber,
        result: currentResult
    };
    
    // 8) Ajout dans le array logEntries de l'objet logEntryPackage
    logEntries.push(logEntryPackage); 
    
    // 9) Affichage Array des différents objets ajoutés
    console.log('Array des objets ajoutés par add():', logEntries);
    
    // logEntries.push(enteredNumber);                                         // Ajout dans le tableau logEntries (vide de base cf ligne 7) de enteredNumber à chaque click
    // console.log('Array des valeurs ajoutées par add():', logEntries);       // Affichage des valeurs ajoutées par le user 
}


function subtract(){
    const enteredNumber = getUserNumberInput();
    const previousResult = currentResult;
    console.log('previousResult soustraction:', previousResult); 
    currentResult = currentResult - enteredNumber;
    // Appel fonction ligne 41 avec params adaptés pour -
    createAndWriteOutput(previousResult, '-', enteredNumber);
    // Appel fonction ligne 14 avec params
    logEntryPackageInConsole('SUBTRACT', previousResult , enteredNumber , currentResult);    // Refactorisation objets push dans Array logEntries cf fonction ligne 11 
}


// Ecriture des 2 autres fonctions sans la refactorisation faite avec createAndWriteOutput()
function divide(){
    const enteredNumber = getUserNumberInput();
    const previousResult = currentResult;
    console.log('previousResult division:', previousResult); 
    currentResult = currentResult / enteredNumber;
    // Appel fonction ligne 41 avec params adaptés
    createAndWriteOutput(previousResult, '/', enteredNumber);
    // Appel fonction ligne 14 avec params
    logEntryPackageInConsole('DIVIDE', previousResult, enteredNumber, currentResult)

}


function multiply(){
    const enteredNumber = getUserNumberInput();
    const previousResult = currentResult;
    console.log('previousResult multiplication:', previousResult); 
    currentResult = currentResult * enteredNumber;
    // Appel fonction ligne 41 avec params adaptés
    createAndWriteOutput(previousResult, '*', enteredNumber);
    // Appel fonction ligne 14 avec params
    logEntryPackageInConsole('MULTIPLY', previousResult , enteredNumber , currentResult); 
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