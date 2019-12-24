/* EXERCICE 1 : TOTAL D'UNE COMMANDE
A partir de la saisie du prix unitaire noté PU d'un produit et de la quantité commandée QTECOM, afficher le prix à payer PAP, en détaillant le port PORT et la remise REM, sachant que :

le port est gratuit si le prix des produits TOT est supérieur à 500 €. Dans le cas contraire, le port est de 2% de TOT
la valeur minimale du port à payer est de 6 €
la remise est de 5% si TOT est compris entre 100 et 200 € et de 10% au-delà
Testez tous les cas possibles afin de vous assurez que votre script fonctionne.
*/

var PU = 0; //prix unitaire
var QTECOM = 0; //quantité commandée
var TOT = 0;//prix total
var PAP = 0;//prix à payer
var PORT = 0;//montant port
var REM = 0;//montant remise

// Calcul du prix total (hors frais de port et remise eventuels)
TOT = PU * QTECOM;
console.log("Le total hors frais de port et remise est égal à " + TOT + " €.");

// Calcul des frais de port
if (TOT >= 500) 
{
    PORT = 0;  // les frais de port sont offerts si total supérieur à 500€
}
else 
{
    PORT = (TOT / 100) * 2; // le montant des frais de port représente 2% du total
    if (PORT <= 6) 
    { // le montant minimum des frais de port est de 6€ (sauf si total supérieur à 500)
        PORT = 6;
    }
}
console.log("Le montant des frais de port est de " + PORT + " €.");

// Calcul du montant de la remise
if (TOT >= 100 && TOT <= 200) // si le total est supérieur ou égal à 100 ET inférieur ou égal à 200€ la remise est de 5% du total
{ 
    REM = (TOT / 100) * 5;
}
else if (TOT > 200) // si le total est supérieur à 200 la remise représente 10% du total
{ 
    REM = (TOT / 100) * 10;
}
else // autrement c-à-d si le total est inférieur à 100 il n'y a pas de remise
{ 
    REM = 0;
}
console.log("Le montant de la remise est de " + REM + " €.");

// Calcul du prix à payer
PAP = TOT + PORT - REM;
console.log("Le prix à payer est de " + PAP + " €.");


/* EXERCICE 2 : SOMME DES ENTIERS INFERIEURS A N
Ecrivez un programme qui affiche la somme des nombres inférieurs à N.
*/


var n = parseInt(prompt("Veuillez saisir un nombre")); // on demande à l'utilisateur de saisir un nombre
var total = 0; 

for (i = n-1; i != 0; i--) // On créé une boucle qui va commencer avec i qui a la valeur de n-1 et qui a chaque fin de boucle est décrémentée de 1. La boucle s'arrête lorsque i = 0. 
{  
    total = total + i; // la variable total va calculer la somme des nombres inférieurs à n.
}
console.log("La somme des nombres inférieurs à " + n + " est égale à " + total);


/* EXERCICE 3 : MINI et MAXI
Modifiez le programme de la moyenne pour afficher le minimum et le maximum
*/


var max = 0; // la valeur max
var min = 0; // la valeur min
var i = 0; // notre compteur pour la boucle while
var entier = null; // la valeur saisie par l'utilisateur
var monTableau = []; // on créé un tableau dans lequel on va pouvoir récupérer les entiers saisis par l'utilisateur

while(entier != 0) // on arrête la saisie lorsque l'utilisateur entre 0
{
    entier = parseInt(prompt("Veuillez saisir un nombre")); 
    monTableau[i] = entier; // la valeur saisie par l'utilisateur est enregistrée en position 0 de notre tableau
    i++; // la boucle continue, on passe à la deuxième valeur du tableau (i=1)
}
monTableau.pop(); // on utilise la méthode pop afin de supprimer le dernier élément de notre tableau c'est-à-dire la dernière valeur saisie par l'utilisateur soit 0 (car on ne veut pas que ce soit la valeur min)
// la fonction Math.max retourne le plus grand des nombres passés en arguments (sous forme d'un tableau)
max = Math.max(...monTableau); // ...monTableau est un opérateur de décomposition de monTableau 
min = Math.min(...monTableau);
console.log("La valeur max saisie est : "+ max + " et la valeur min est : " + min);


/* EXERCICE 4 : CALCUL DU NOMBRE DE JEUNES, DE MOYENS ET DE VIEUX
Il s'agit de dénombrer les personnes d'âge strictement inférieur à 20 ans, les personnes d'âge strictement supérieur à 40 ans et celles dont l'âge est compris entre 20 ans et 40 ans (20 ans et 40 ans y compris).
Le programme doit demander les âges successifs.
Le comptage est arrêté dès la saisie d'un centenaire. Le centenaire est compté.
Donnez le programme Javascript correspondant qui affiche les résultats.
*/

var jeunes = 0;
var moyens = 0;
var vieux = 0;

function calculAge() // on utilise une fonction pour dénombrer en catégories en fonction des ages saisis par l'utilisateur
{ 
    var age;

    while (age !== 100) 
    {
        age = parseInt(prompt("Veuillez saisir un âge")); // le comptage est arrêté à la saisie d'un centenaire (qui est pris en compte)
        if (age < 20) // condition jeune
        {
            jeunes++; // incrémentation jeunes         
        }
        else if (age > 40) // condition vieux
        {
            vieux++; // incrémentation vieux
        }
        else // condition moyens (c-à-d tous ceux qui ne sont ni jeunes ni vieux)
        {
            moyens++; // incrémentation moyens
        }
    }
}
calculAge(); // on appelle notre fonction
console.log("Il y a " + jeunes + " jeune(s)," + moyens + " moyen(s)," + vieux + " vieux.")// on affiche les résultats de notre fonction


/* EXERCICE 5 : TABLE DE MULTIPLICATION
Ecrivez une fonction qui affiche une table de multiplication.
Votre fonction doit prendre un paramètre qui permet d'indiquer quelle table afficher.
Par exemple, TableMultiplication(7) doit afficher :
1 x 7 = 7
2 x 7 = 14
3 x 7 = 21 ...
*/


function TableMultiplication() 
{
    var nombre = parseInt(prompt("Veuillez indiquer le nombre dont vous souhaitez voir afficher la table de multiplication")) // on demande à l'utilisateur de saisir nombre

    for (var i = 1; i < 10; i++) // on utilise une boucle qui va calculer le produit de nombre et de i. On commence la boucle avec i qui vaut 1 et on la termine quand i vaut 9
    {
        console.log(i + " * " + nombre + " = " + i*nombre) // on affiche le resultat du produit entre nombre et i (qui est incrémenté à chaque passage dans la boucle for) dans la console
    }
}
TableMultiplication(); // on appelle notre fonction


/* EXERCICE 6 : RECHERCHE D'UN PRENOM
Un prénom est saisi au clavier. On le recherche dans le tableau tab donné ci-après.
Si le prénom est trouvé, on l'élimine du tableau en décalant les cases qui le suivent, et en mettant à blanc la dernière case.
*/


function recherchePrenom()
{
    var tab = ["Audrey","Aurélien","Flavien","Jérémy","Laurent","Melik","Nouara","Salem","Samuel","Stéphane"];
    var prenom = prompt("Veuillez saisir un prénom");
    if (tab.includes(prenom)) // méthode includes permet de déterminer si un tableau contient une valeur : si le prenom saisi par l'utilisateur est présent dans le tableau (= true) :
    {
        tab.splice(tab.indexOf(prenom), 1); /* méthode splice modifie le contenu d'un tableau en retirant un élément 
        avec tab.indexOf(prenom) qui indique l'indice du tableau à partir duquel commencer le changement (ici le prenom qui a été saisi par l'utilisateur et trouvé dans le tableau)
        et 1 qui indique le nombre d'éléments à supprimer.*/
        tab[tab.length] = ""; // on met à blanc la dernière case du tableau en donnant à l'élément dont l'indice correspond à la longueur du tableau (ici tab.length=9) la valeur "" => tab[9]=""
    }
    console.log(tab);
}
recherchePrenom();


