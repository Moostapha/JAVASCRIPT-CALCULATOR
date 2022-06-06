const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');  // Manipule l'id de l'élément html bouton add
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

// Dans l'ordre d'apparition de html
// Détail du calcul
const currentCalculationOutput = document.getElementById('current-calculation');
// Résultat du calcul
const currentResultOutput = document.getElementById('current-result');

function outputResult(result, text) {
  // détails du calcul
  currentCalculationOutput.textContent = text;
  // résultat
  currentResultOutput.textContent = result;
}
