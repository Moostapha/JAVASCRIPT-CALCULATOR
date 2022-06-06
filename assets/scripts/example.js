// x = 0 + 10 *3 => aspect versatile de let
// expression de droite s'execute first avec la valeur de la ligne 1
// Nouvelle valeur de currentResult => overwriting
// currentResult = currentResult + 10 * 3; // 0 + 10 *3 = 30

// Fonction outputResult de vendor.js prend 2 param en entrée => result et text, ordre important selon la fonction (result, text)

// 1) string 
// let calculationDetails =  '0 + 10 * 3';
// outputResult(currentResult, calculationDetails);

// 2) string avec concaténation
// let calculationConcat = defaultResult + '10 * 3';
// outputResult(currentResult, calculationConcat);

// 3) string avec backticks => Possibilité de user const en dynamique dans l'expression littérale Template litteral => Pas besoin de concaténation
// let calculationBackticks = `${defaultResult} + 10 * 3`;
// outputResult(currentResult, calculationBackticks);

// Fonction addition en dur
// function add(num1,num2){
//     const result = num1 + num2;
//     return result;
//     // Si on a encore du code après le return, il ne sera pas exécuté car return stoppe le code 
// }
// Appel de la fonction add() avec params 1 et 2
// currentResult = add(1,2);
// alert(`Le résultat de l'addition de la fonction add() est ${currentResult}`)