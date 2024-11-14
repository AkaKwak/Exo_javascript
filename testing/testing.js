let data1 = "variable en let définie dans le bloc principal";

{ //début du sous-bloc

  data1 = "variable en let modifiée dans le sous-bloc";
  var data2 = "variable en var définie dans le sous-bloc";
  let data3 = "variable en let définie dans le sous-bloc";

} //fin du sous-bloc

console.log(data1); // "variable let modifiée dans le sous-bloc"
console.log(data2); // "variable var définie dans le sous-bloc"
// console.log(data3); // On aura une erreur : data3 n'est pas visible dans le bloc principal

// ============

let a = 1;
let b = 1;
a++
console.log(a); //additione deux fois la valeurs avec a++
console.log(b += 2); //

let atest = "Bonjour", btest = "Monde";
console.log(atest + " " + btest);

let statusDeTHP = ["Moussaillon", "Corsaire", "Renégat"];
console.log(statusDeTHP)
console.log(statusDeTHP[0])
console.log(statusDeTHP.length)

let string = 3;
console.log("Bonjour à tous les "+ string);
console.log(string + "3");

let numStudent = 15;
let statement = `Dans mon groupe on est ${numStudent} mousaillons`;
console.log(statement);


const contentOfTHP = "Git-Ruby-Rails-HTML-CSS-JS";
const lesson = contentOfTHP.split("-");
console.log(lesson[0]); // "Git"
console.log(lesson[5]); // "JS"


// Exemple de tableau
let mots = ["Bonjour", "monde", "!"];

// Utilisation de join pour combiner les éléments du tableau en une chaîne
let phrase = mots.join(" "); // Utilise un espace comme séparateur
console.log(phrase); // Affiche : "Bonjour monde !"

let THPSessionNum2 = {
    numOfMouss: 80,
    cities: ["Paris", "Lyon", "Montpellier"],
    successRate: 0.80,
    sessionMoto: "keep pushing to the top"
    };

THPSessionNum2.numOfMouss = 79; // je modifie un attribut existant
console.log(THPSessionNum2.numOfMouss);
THPSessionNum2.favoriteLesson = "Présentation de Sinatra" //je rajoute un attribut
console.log(THPSessionNum2); //j'imprime tout l'objet pour voir

let attributName = "successRate";
console.log(THPSessionNum2[attributName]);


//     >= signifie "supérieur ou égal à". > signifie strictement supérieur
// <= signifie "inférieur ou égal à". < signifie strictement inférieur
// !== signifie "contenu ou type différent de". Veuillez noter qu'il y a 2 signes "égal".
// === signifie "contenu ET type égal à". Veuillez noter qu'il y a 3 signes "égal".

console.log("36" == 36); // va retourner TRUE car le contenu est identique
console.log("36" === 36); // va retourner FALSE car d'un côté on a un string et de l'autre un number

let number = 0; //fais ensuite le test avec d'autres valeurs (positives et négatives)
if(number > 0) {
console.log("number est positif");
} else if(number === 0) {
console.log("number est nul");
} else {
console.log("number est négatif");
} 


if (true && true) {
    console.log("ce message s'affiche car avec un ET, si les deux conditions sont à TRUE, le résultat est TRUE");
    }
    if (true || false) {
    console.log("ce message s'affiche car avec un OU, si l'une des conditions est à TRUE, le résultat est TRUE");
    } 
    if (!false) {
    console.log("ce message s'affiche car un NON sur FALSE donne TRUE");
    }


    weekNum = 15; //teste avec plusieurs valeurs
switch (weekNum) {
case 1:
console.log("Semaine 1 - Introduction au Code");
break;
case 2:
console.log("Semaine 2 - Découverte de Ruby");
break;
case 3:
console.log("Semaine 3 - Programmation Orientée Objet");
break;
case 4:
console.log("Semaine 4 - Initiation à Rails");
break;
case 5:
console.log("Semaine 5 - Rails intermédiaire");
break;
case 6:
console.log("Semaine 6 - Rails avancé");
break;
case 7:
console.log("Semaine 7 - HTML / CSS et intro au JS");
break;
case 8:
console.log("Semaine 8 - JavaScript de front");
break;
default:
console.log("Cette entrée n'est pas reconnue");
break;
}

// - Dernier point important : comme en Ruby, certaines valeurs peuvent être évaluées à FALSE dans le code. Mais en Ruby, ça n'est valable que pour la valeur `nil` alors qu'en JS, c'est le cas de la valeur `undefined`, du nombre `0` et du string vide `""`. Illustration :

let exercice_number = 2; //fais aussi le test avec un chiffre non nul
if (exercice_number) {console.log("ce message ne s'affiche que si number est non nul ");
}

let exercice_string = "Quack"; //fais aussi le test avec un mot non vide
if (exercice_string) {console.log("ce message ne s'affiche que si string est non vide");
}

let myVariable = "10"// ici, myVariable sera undefined. Fais aussi le test en lui donnant une valeur: number, string, array ou autre.
if (myVariable) {console.log("ce message ne s'affiche que si myVariable contient une valeur ");
}

for(var count = 0; count <=5; count++){
    console.log(`on va compter jusqu'à 5 : ${count}`);
}

  console.log(count); // Va créer une erreur car count est en let et donc son scope est limité au bloc for.
  //passe count en var pour tester ce que ça donne


let answer = "";
while(answer !== "oui") {
console.log("alors ?")
answer = prompt("Tu kiffes THP ?");
} 

console.log("haaa, tu nous fais plaisir !")

let word = "";
let letter;

while (true) {
    letter = prompt('Tape UNE lettre stp :');

    if (letter) {
        word += letter; //on rajoute la lettre saisie à la suite du mot
        console.log(word);
    } else { // on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
        break; // On quitte la boucle
    }
}
console.log(`voilà ce que tu as tapé : ${word}`);


const multiply = function(inputNumber1, inputNumber2) {
    let outputNumber = inputNumber1 * inputNumber2;
    return outputNumber;
  }
  
  console.log(multiply(2, 3));
  
  const otherMultiply = multiply; //On peut ainsi affecter la fonction à une autre variable
  console.log(otherMultiply(2, 3));

// const multiply = (inputNumber1, inputNumber2) => {
//     let outputNumber = inputNumber1 * inputNumber2;
//     return outputNumber;
//   }


//On déclare d'abord un array
let weeksOfTHPArray = ["Semaine 1 - Introduction au Code", "Semaine 2 - Découverte de Ruby", "Semaine 3 - Programmation Orientée Objet", "Semaine 4 - Initiation à Rails"];

//On déclare ensuite un objet
let weeksOfTHPObject = {Semaine5: "Rails intermédiaire", Semaine6: "Rails avancé", Semaine7: "HTML / CSS et intro au JS", Semaine8: "JavaScript de front"};

console.log("**********Parcourons le array :")
for(let index in weeksOfTHPArray) {
  console.log(index); // index va aller de 0 à 3
  console.log(weeksOfTHPArray[index]);
}
console.log("**********Parcourons l'objet :")
for(let weekAttribut in weeksOfTHPObject) {
  console.log(weekAttribut); //weekAttribut va avoir les valeurs "Semaine5" à "Semaine8"
  console.log(weeksOfTHPObject[weekAttribut]);
}

console.log("**********Parcourons le array en forEach :")
weeksOfTHPArray.forEach(weekContent => {
  console.log(weekContent)
});

function sayHello() {
    console.log("Bonjour toi !");
  }
  
  sayHello();

  function multiply2(inputNumber1, inputNumber2) {
    var outputNumber = inputNumber1 * inputNumber2;
    return outputNumber;
  }
  
  console.log(multiply2(2, 3));
  console.log(multiply2(2, multiply2(2,3)));
  console.log(outputNumber); // Va créer une erreur car la variable en let n'existe pas en dehors de la fonction

//   Si tu veux accéder au résultat du calcul en dehors de la fonction, utilise simplement le return de la fonction, comme tu l'as fait avec console.log(multiply(2, 3));.