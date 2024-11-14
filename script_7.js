document.getElementById("exo07").addEventListener("click", function () {
    // Fonction du bot adolescent
function adolescentBot() {
    // Ouvre une fenêtre de prompt pour saisir la phrase de l'utilisateur
    let userInput = prompt("Parle au bot adolescent :");

    // Vérifie les conditions pour déterminer la réponse du bot
    if (!userInput) {  // Si le message est vide
        console.log("t'es en PLS ?");
    } else if (userInput.endsWith("?")) {  // Si la phrase finit par un point d'interrogation
        console.log("Ouais Ouais...");
    } else if (userInput === userInput.toUpperCase() && userInput.match(/[A-Z]/)) {  // Si la phrase est en majuscules
        console.log("Pwa, calme-toi...");
    } else if (userInput.includes("Fortnite")) {  // Si la phrase contient "Fortnite"
        console.log("on s' fait une partie soum-soum ?");
    } else {  // Toute autre phrase
        console.log("balek.");
    }
}

// Appel de la fonction
adolescentBot();
});


// Explications des Conditions
// Vérification d’un message vide :

// !userInput vérifie si userInput est une chaîne vide ("") ou si l'utilisateur appuie sur "Annuler" dans le prompt. Dans ce cas, le bot répond "t'es en PLS ?".
// Vérification d’une question :

// userInput.endsWith("?") vérifie si la phrase se termine par un point d’interrogation (?). Si c'est vrai, le bot répond "Ouais Ouais...".
// Vérification des majuscules :

// userInput === userInput.toUpperCase() vérifie si la phrase entière est en majuscules.
// userInput.match(/[A-Z]/) est utilisé pour s'assurer qu'il y a au moins une lettre majuscule, évitant une réponse erronée si la phrase ne contient que des symboles (par exemple "!!!").
// Si les deux conditions sont remplies, le bot répond "Pwa, calme-toi...".
// Vérification de la présence de "Fortnite" :

// userInput.includes("Fortnite") vérifie si le mot "Fortnite" est présent dans la phrase. Dans ce cas, le bot répond "on s' fait une partie soum-soum ?".
// Réponse par défaut :

// Si aucune des conditions précédentes n’est remplie, le bot répond "balek.".