# javascript-basics-calculator
 Learning js basics with the build of a calculator
 Academind javascript complete guide 2022

# Scripts js
Order important !!!
app.js va dépendre de vendor.js donc il faut mettre ce dernier avant dans l'ordre des scipts
Mettre les scripts à la fin avant le body fermant de html => Execution des scripts APRES le rendu html
(exemple avec une fonction alert dans app.js).

# Variables et constantes
let => valeur variable, un param. x peut changer de valeur par la suite.
Les variables varient, elle vont prendre une data qui pourra changer par la suite dans le code. Cela permet de s'y référer et de changer sa valeur à un endroit seulement et de plus, on peut avoir besoin de la même valeur à plusieurs endroits du code.

const => valeur fixe, constante non changeante (à privilégier)

# Ordre de déclaration variables et constantes:
Les déclarer au début avant leur usage, sinon erreur JS ne saura pas de quoi on parle. ORDRE IMPORTANT POUR VAR ET CONST

# Ordre de déclaration Fonctions: 
Une fonction peut être déclarée après son appel, il n'y aura pas le même soucis qu'avec let et const.
En effet JS va répertorier toutes les fonctions lors de la lecture du code (de bas en haut) avant de les exécuter => Special behavior

# Fonction et scope variables ou constantes:
Dans une fonction:
1) accés à une variable définie globally
2) Accés à une variable définie dans la fonction (best) local scope ou block scope
3) Accés à une autre fonction aussi
Les fonctions ont accés à tout ce qui leur est extérieur mais ce qui est défini en leur sein n'est accessible qu'à l'intérieur (local, block scope)
Conséquence: Une variable x peut être déclarée en global et ensuite on peut déclarer une autre variable avec le same nom x dans la fonction. Ces 2 variables sont distinctes et coexistent ensemble => shadowing de js car les variables ont leur own scope dans la fonction, en déclarant x on ne va pas overwrite le x déclaré en global.

"Shadowed Variables"
You learned about local ("function-internal") variables and global variables.

What happens if you have this code?

let userName = 'Max';
function greetUser(name) {
  let userName = name;
  alert(userName);
}
userName = 'Manu';
greetUser('Max');
This will actually show an alert that says 'Max' (NOT 'Manu').

You might've expected that an error gets thrown because we use and declare userName more than once - and as you learned, that is not allowed.

It indeed is not allowed on the same level/ in the same scope.

So this would fail:

let userName = 'Max';
let userName = 'Manu';
Why does it work in the first code snippet though?

Because we first create a global variable userName via

let userName = 'Max';
But then we never re-declare that on the global level (that would not be allowed).

We only declare another variable inside of the function. But since variables in functions get their own scope, JavaScript does something which is called "shadowing".

It creates a new variable on a different scope - this variables does not overwrite or remove the global variable by the way - both co-exist.

When referring to userName inside of the greetUser function we now always refer to the local, shadowed variable. Only if no such local variable existed, JavaScript would fall back to the global variable.