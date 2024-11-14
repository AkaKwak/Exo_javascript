document.getElementById("exo03").addEventListener("click", function () {
    // Demande le nombre d'étages à l'utilisateur
let etages = parseInt(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"));

// Vérifie si l'utilisateur a entré un nombre valide
if (isNaN(etages) || etages <= 0) {
    console.log("Veuillez entrer un nombre positif.");
} else {
    // Construction de la pyramide
    for (let i = 1; i <= etages; i++) {
        let espace = " ".repeat(etages - i); // Espaces avant les #
        let wall = "#".repeat(i); // Les # pour l'étage
        console.log(espace + wall); // Affiche l'étage actuel
    }
}

    });