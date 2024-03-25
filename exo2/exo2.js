// Créez votre fonction ici
console.log("Créez une fonction JavaScript appelée calculate qui prend deux nombres et un opérateur en tant que paramètres (+, -, *, /). La fonction doit effectuer l'opération mathématique correspondante (addition, soustraction, multiplication ou division) et retourner le résultat.");

function calculate(a, b, c) {
  if (c === '+') {
    return a + b;
  } else if(c === '-') {
    return a - b; 
  } else if(c === '*') {
    return a * b;
  } else if(c === '/') {
    if (b !== 0) {
        return a / b;
    } else {
        return "Division by zero is not allowed.";
    }
  } else {
    return 'Invalid operator';
  }
}
  

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"