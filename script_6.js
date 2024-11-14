document.getElementById("exo06").addEventListener("click", function () {

// Dictionnaire pour associer chaque codon à son acide aminé
const codonToAminoAcid = {
    'UCU': 'Sérine', 'UCC': 'Sérine', 'UCA': 'Sérine', 'UCG': 'Sérine', 'AGU': 'Sérine', 'AGC': 'Sérine',
    'CCU': 'Proline', 'CCC': 'Proline', 'CCA': 'Proline', 'CCG': 'Proline',
    'UUA': 'Leucine', 'UUG': 'Leucine',
    'UUU': 'Phénylalanine', 'UUC': 'Phénylalanine',
    'CGU': 'Arginine', 'CGC': 'Arginine', 'CGA': 'Arginine', 'CGG': 'Arginine', 'AGA': 'Arginine', 'AGG': 'Arginine',
    'UAU': 'Tyrosine', 'UAC': 'Tyrosine'
};

// Fonction pour traduire l'ARN en acides aminés
function translateARNtoProtein(arn) {
    // Découper la chaîne ARN en codons de 3 lettres
    const codons = arn.match(/.{1,3}/g);

    // Traduire chaque codon en acide aminé
    const aminoAcids = codons.map(codon => codonToAminoAcid[codon] || "Inconnu");

    // Retourner la séquence d'acides aminés en chaîne de caractères
    return aminoAcids.join('-');
}

// Exemple d'utilisation avec les ARN donnés
const arn1 = "CCGUCGUUGCGCUACAGC";
const arn2 = "CCUCGCCGGUACUUCUCG";

console.log("Traduction de l'ARN 1 :", translateARNtoProtein(arn1));
console.log("Traduction de l'ARN 2 :", translateARNtoProtein(arn2));
});




// Dictionnaire codonToAminoAcid : Un objet qui associe chaque codon aux acides aminés correspondants, d’après le code fourni.
// Fonction translateARNtoProtein :
// match(/.{1,3}/g) : Cette expression régulière découpe la chaîne d'ARN en groupes de 3 caractères (codons).
// map(codon => codonToAminoAcid[codon] || "Inconnu") : Cette méthode transforme chaque codon en son acide aminé. Si le codon n'est pas dans le dictionnaire, il est remplacé par "Inconnu".
// join('-') : Combine la liste des acides aminés en une chaîne de caractères, séparés par un tiret.
// Appel de la fonction : Les deux chaînes d’ARN fournies (arn1 et arn2) sont traduites en protéines, et le résultat est affiché dans la console.
// Résultats en Console
// Pour les ARN donnés :

// CCGUCGUUGCGCUACAGC produira : "Proline-Arginine-Leucine-Arginine-Sérine"
// CCUCGCCGGUACUUCUCG produira : "Proline-Proline-Glycine-Tyrosine-Phénylalanine-Sérine"
// Ce script fonctionne pour n’importe quelle chaîne d’ARN composée de ces codons et affiche la séquence d'acides aminés correspondante.