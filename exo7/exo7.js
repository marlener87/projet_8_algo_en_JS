console.log("Créez un convertisseur qui prend un nombre décimal saisi par l'utilisateur et affiche sa représentation binaire. Les codes HTML et CSS vous sont préalablement fournis, vous devez ainsi mettre en place la fonction JS convertToBinary() qui permettra la conversion. Analysez bien le code HTML avant de commencer le développement de la fonction.Lorsque l'utilisateur entre un nombre décimal et clique sur le bouton 'Convertir', le nombre doit être converti en binaire. Affichez le résultat de la conversion binaire sous le champ de saisie. Informations utiles : Conversion d'un nombre décimal en binaire. La conversion d'un nombre décimal en binaire implique de diviser le nombre décimal par 2 de manière répétée et de noter les restes à chaque étape. Voici les étapes générales pour effectuer cette conversion : Divisez le nombre décimal par 2. Notez le reste de la division (soit 0 ou 1). Continuez à diviser le quotient précédent par 2 et notez les restes jusqu'à ce que le quotienne devient 0. Les restes notés forment la représentation binaire du nombre décimal, lue de bas en haut. Par exemple, pour convertir le nombre décimal 10 en binaire : Étape 1: 10 ÷ 2 = 5, reste 0 ; Étape 2: 5 ÷ 2 = 2, reste 1 ; Étape 3: 2 ÷ 2 = 1, reste 0 ; Étape 4: 1 ÷ 2 = 0, reste 1. En lisant les restes de bas en haut (1010), on obtient la représentation binaire du nombre décimal 10.");


function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    const binaryResult = document.getElementById('binaryResult');
  
    // vérifie si la valeur saisie est non nul, supérieur ou égal à 0 et est un nombre.
    if(decimalInput === '' || decimalInput < 0 || isNaN(decimalInput)) {
      binaryResult.textContent = 'Veuillez entrer un nombre décimal     valide.';
      console.log('invalide');
      return;
    }
  
    // convertit la valeur en nombre entier
    const decimalNumber = parseInt(decimalInput);
    
    // convertit le nombre décimal en binaire = .toString(2)
    const binaryNumber = decimalNumber.toString(2);
    
    // affiche le résultat dans la page
    binaryResult.innerText = `La représentation binaire du nombre décimal ${decimalNumber} est ${binaryNumber}.`;
  }