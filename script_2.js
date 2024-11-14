document.getElementById("exo02").addEventListener("click", function () {
    function factorise(number) {
        let resultat = 1;
        for (let i = 1; i <= nombre; i++) {
            resultat *= i;
        }
        return resultat;
    }

    let nombre = parseInt(prompt("De quel nombre veux tu calculer la factorielle ?"));

    if (nombre >= 0) {
        console.log("Le résultat est : " + factorise(nombre));
    } else {
        console.log("Veuillez entrer un nombre positif.");
    }
    });