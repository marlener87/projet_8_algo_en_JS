console.log("Une page HTML contient un bouton avec le texte Cliquez ici. Lorsque l'utilisateur clique sur le bouton, affichez un message Bonjour, vous avez cliqué sur le bouton ! dans la console. Vous devez mettre en place un observateur d’événement dans le fichier script.js afin d’afficher le message Bonjour, vous avez cliqué sur le bouton ! lors du clic.");

const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  console.log('Bonjour, vous avez cliqué sur le bouton !');
})