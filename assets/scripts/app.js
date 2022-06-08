// Valeur assignée et fixe
const defaultResult = 0;
// assignation d'une constante à une variable currentResult
let currentResult = defaultResult; 


// FONCTIONS PERMETTANT REFACTORING

// 1) Fonction capturant le user input et le convertissant en int (car string par défaut capturé par .value)

function getUserNumberInput(){           
    return parseInt(userInput.value);   // utilisation de return nous permet de capter la valeur et de le use ailleurs | userInput.value est de type string, il faut donc le convertir en int => parseInt() ou +
}


// 2) Fonction donnant le détail du calcul de manière dynamique => Ordre des params est IMPORTANT !!!

function createAndWriteOutput( resultBeforeCalculation, operator, newNumber ){            // Fonction réutilisable avec paramètres différents pour les 4 opérations
    const calculDescription = `${resultBeforeCalculation} ${operator} ${newNumber}`;     // output text avec backticks => Template litteral mix de var dynamiques et texte, pas besoin de concaténation
    outputResult(calculDescription, currentResult );                                    // appel de la fonction outputResult de vendor.js avec les paramètres dynamiques
}


// Variable globale pour array vide => Tableau vide qui grandira avec le temps
let logEntries = [];



// 3) Fonction créant un objet , l'affiche dans la console, et l'ajoute au Array logEntries réutilisable avec paramètres différents pour les 4 opérations
function logEntryPackageInConsole(operation, previousResult, enteredNumber, currentResult){  // 4 params doivent match les valeurs de l'objet 
    
    const logEntryPackage = { 
        
        operation: operation,                 // values === params
        previousResult: previousResult,      // Clés pointe vers une variable qui est le param. de la fonction de refactorisation
        enteredNumber: enteredNumber,       // Objet package {clé: valeur} avec mutiples infos | datas groupés, structurés sous forme clé:valeur
        result: currentResult              // Objet global => package d'infos groupés ensemble donnant plusieurs infos variées de différents types
        
    };
    
    // Ajout dans le array logEntries de l'objet logEntryPackage
    logEntries.push(logEntryPackage); 
    
    // Affichage new objets dans le Array
    console.log('Array des objets ajoutés par opérations', logEntries) 
}

// 4) Refactorisation de nos fonctions opération avec if statements => Optimisation du code plus poussée
// Cette fonction va tester avec des "if clauses" quelle opération effectuer / + - * en prenant pour param le type d'opération
// Elle permettra de mettre toute la logique des fonctions opérations
// calculation appelle getUserNumberInput() | createAndWriteOutput() | logEntryPackageInConsole() de manière dynamique selon opération déclenchée par if statements et params

function calculation(calculType){
    const enteredNumber = getUserNumberInput();
    const previousResult = currentResult;
    
    // var let pour l'opérateur qui changera selon l'opération + - * /, pas d'initialisation de valeur car elle changera selon les blocs if
    let operatorMath;
    
    // cas avec if avec éléments changeants que sont calculType et operatorMath 
    if (calculType === 'ADD') {
        currentResult = currentResult + enteredNumber;
        operatorMath = '+';
    } 
    else if (calculType === 'SUBTRACT') {
        currentResult = currentResult - enteredNumber;
        operatorMath = '*';
    } 
    else if (calculType === 'MULTIPLY') {
        currentResult = currentResult * enteredNumber;
        operatorMath = '*';
    }  
    else if (calculType === 'DIVIDE') {
        currentResult = currentResult / enteredNumber;
        operator = '/';
    }
    
    // Appel fonction ligne 41 avec params adaptés pour - qui devient ici totalement dynamique
    createAndWriteOutput(previousResult, operatorMath, enteredNumber);
    // Appel fonction ligne 14 avec params éléments écrits en 'dur' supprimés
    logEntryPackageInConsole(previousResult , enteredNumber , currentResult);
    
    // Appel de calculation() se fera en mettant le bon param => calculation('ADD') déclenchera le bon bloc if
    /* function add() {
        calculation ('ADD');
    }*/
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
    
    // 7) Objet package {clé: valeur} avec multiples infos | datas groupés, structurés sous forme clé:valeur écriture avant refactorinf avec logEntryPackageInConsole()
    const logEntryPackage = {                                                  
        operation: 'ADD',
        previousResult: previousResult,   
        enteredNumber: enteredNumber,
        result: currentResult          // currentResult valeur de gauche de la ligne 66
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


// on assigne la fonction add (comme une adresse postale) => excécution indirecte de la fonction. 

// appel fonction add au click sur le bouton +
addBtn.addEventListener('click', add);                 // add() serait incorrect ici => éxécution directe de la fonction or on veut l'éxécuter au click

// appel fonction subtract au click sur le bouton -
subtractBtn.addEventListener('click', subtract);

// appel fonction divide au click sur le bouton /
divideBtn.addEventListener('click', divide);

// appel fonction multiply au click sur le bouton *
multiplyBtn.addEventListener('click', multiply);