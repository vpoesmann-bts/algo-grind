/****************************************
 *                                      *
 *               JOUR 1                 *
 *                                      *
 ****************************************/


// Retourne la valeur true
function returnTrue(): boolean {
  return null;
}

// Retourne le paramètre donné en entrée
function returnParam(param: number): number {
  return null;
}

// Retourne vrai si param est strictement supérieur à 5
// Retourne faux sinon
function isBiggerThan5(param: number): boolean {
  return null;
}

// Retourne vrai si param est faux
// Retourne faux si param est vrai
function invertBoolean(param: boolean): boolean {
  return null;
}

/****************************************
 *                                      *
 *               JOUR 2                 *
 *                                      *
 ****************************************/


// Retourne la somme des paramètres a b et c, le tout multiplié par 5
function sumTimes5(a: number, b: number, c: number): number {
  return null;
}

// Retourne vrai si a ET b sont strictement supérieurs à 5 et strictement inférieurs à 10
// Retourne faux sinon
function areBetween5And10(a: number, b: number): boolean {
  return null;
}

/****************************************
 *                                      *
 *               JOUR 3                 *
 *                                      *
 ****************************************/


// Si la somme des paramètres est paire, retourner le carré de a.
// Sinon, retourner le cube de b.
function parityComputing(a: number, b: number): number {
  return null;
}

// Ajouter n fois la lettre letter au mot word
// Retourner la chaîne de caractères résultante
function addLetters(word: string, letter: string, n: number): string {
  return null;
}

/****************************************
 *                                      *
 *               JOUR 4                 *
 *                                      *
 ****************************************/


// Retourne le chiffre des centaines d'un nombre
// (exemple: 5120 -> 1)
// Retourne 0 si le nombre est inférieur à 100
function getHundreds(a: number) : number {
  return null;
}

// Retourne la somme de tous les éléments du tableau
function sumArray(a: number[]): number {
  return null;
}

/****************************************
 *                                      *
 *               JOUR 5                 *
 *                                      *
 ****************************************/


// Retourne le plus grand nombre contenu dans le tableau
function maxArray(a: number[]): number {
  return null;
}

// Diviser b par 2 et ajouter 5 à a tant que a est inférieur à b
// Une fois que a est strictement supérieur à b, retourner la somme de a et b.
function balanceParams(a: number, b: number): number {
  return null;
}

/****************************************
 *                                      *
 *               JOUR 6                 *
 *                                      *
 ****************************************/


// Retourne vrai si le nombre b se trouve dans le tableau a
// Retourne faux sinon
function isNumberInArray(a: number[], b: number): boolean {
  return null;
}

// Retourne vrai si la somme des nombres pairs est strictement supérieure
// à la somme des nombres impaires contenus dans le tableau
function biggerTotalOfEvenNumbers(a: number[]): boolean {
  return null;
}

/****************************************
 *                                      *
 *               JOUR 7                 *
 *                                      *
 ****************************************/


// Détecte s'il y a une collision entre deux rectangles.
// Un rectangle est représenté par un tableau contenant dans l'ordre :
// - Sa position en x
// - Sa position en y
// - Sa longueur
// - Sa largeur
// Il y a collision si ces deux rectangles se touchent ou se superposent
function isCollisionDetected(rectA: number[], rectB: number[]): boolean {
  return null;
}

// Retourne la somme des matrices a et b (toujours de mêmes dimensions)
function matrixAddition(a: number[][], b: number[][]) {
  return null;
}


/****************************************
 *                                      *
 *               JOUR 8                 *
 *                                      *
 ****************************************/


// Un joueur de Mastermind a formulé un certain nombre de propositions pour deviner le code gagnant.
// answer est une ligne de chiffres représentant la combinaison gagnante
// attempts est un tableau de lignes de chiffres, représentant toutes les combinaisons essayées par le joueur
// La fonction retourne vrai si la ligne answer se trouve dans attempts et faux sinon
function mastermind(answer: number[], attempts: number[][]): boolean {
  return null;
}

/****************************************
 *                                      *
 *               JOUR 9                 *
 *                                      *
 ****************************************/


// La racine numérique d'un nombre est l'addition de tous ses chiffres
// récursivement jusqu'à ce qu'ils ne donnent qu'un seul chiffre
// (exemple : 598 -> 5+9+8 = 22 -> 2+2 = 4)
function digitalRoot(a: number): number {
  return null;
}

/****************************************
 *                                      *
 *               JOUR 10                *
 *                                      *
 ****************************************/


// Une chaîne est une suite de plusieurs entiers consécutifs croissants (exemple : 5-6-7-8)
// Retourne un tableau contenant les sommes des différentes chaînes contenues dans le tableau
// (exemple : [1, 2, 7, 4, 5, 6] retourne [3, 15] car il y a deux chaînes : 1-2 et 4-5-6)
function chainSums(a: number[]): number[] {
  return null;
}

///////////////////////////////////////////////////////////////////////////////
// ========================================================================= //
// ========================================================================= //
// ==                                                                     == //
// ==                                                                     == //
// ==           Félicitations ! Vous avez terminé le parcours !           == //
// ==                                                                     == //
// ==                                                                     == //
// ========================================================================= //
// ========================================================================= //
///////////////////////////////////////////////////////////////////////////////


// Fonction qui exporte les tests
// Rien à faire ici
export function testFunctions() {
  let results = [];
  let day = [];
  day.push(["returnTrue", [true, returnTrue()], [true, returnTrue()]]);
  day.push(["returnParam", [5, returnParam(5), 5], [-12, returnParam(-12), -12]]);
  day.push(["isBiggerThan5", [true, isBiggerThan5(8), 8], [false, isBiggerThan5(-15), -15], [false, isBiggerThan5(5), 5]]);
  day.push(["invertBoolean", [false, invertBoolean(true), true], [true, invertBoolean(false), false]]);
  results.push(day);

  day = [];
  day.push(["sumTimes5", [25, sumTimes5(-5, 2, 8), -5, 2, 8], [50, sumTimes5(5, 5, 0), 5, 5, 0], [0, sumTimes5(12, 28, -40), 12, 28, -40]]);
  day.push(["areBetween5And10", [true, areBetween5And10(7, 8), 7, 8], [false, areBetween5And10(2, 6), 2, 6], [false, areBetween5And10(8, 10), 8, 10], [true, areBetween5And10(9, 6), 9, 6], [false, areBetween5And10(5, 6), 5, 6], [false, areBetween5And10(9, 5), 9, 5]]);
  results.push(day);

  day = [];
  day.push(["parityComputing", [25, parityComputing(5, 7), 5, 7], [3375, parityComputing(14, 15), 14, 15], [1, parityComputing(-1, 1), -1, 1]]);
  day.push(["addLetters", ["algoooo", addLetters("algo", "o", 3), "algo", "o", 3], ["bb", addLetters("", "b", 2), "", "b", 2], ["Lucky 777", addLetters("Lucky ", "7", 3), "Lucky ", "7", 3]]);
  results.push(day);

  day = [];
  day.push(["getHundreds", [8, getHundreds(822), 822], [1, getHundreds(4125), 4125], [0, getHundreds(1024), 1024], [0, getHundreds(5), 5]]);
  day.push(["sumArray", [5, sumArray([1, 1, 1, 1, 1]), [1, 1, 1, 1, 1]], [0, sumArray([2, -2, 2, -2]), [2, -2, 2, -2]], [45, sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]]]);
  results.push(day);

  day = [];
  day.push(["maxArray", [12, maxArray([10, 8, 12, 6, 4]), [10, 8, 12, 6, 4]], [20, maxArray([10, -30, 20]), [10, -30, 20]], [-2, maxArray([-3, -2, -8, -7]), [-3, -2, -8, -7]]]);
  day.push(["balanceParams", [8.5, balanceParams(-8, 12), -8, 12], [220, balanceParams(200, 20), 200, 20], [57.5, balanceParams(30, 70), 30, 70]]);
  results.push(day);

  day = [];
  day.push(["isNumberInArray", [true, isNumberInArray([7, 5, 12, 3, 9], 3), [7, 5, 12, 3, 9], 3], [false, isNumberInArray([8, 8, 8, 8, 8], 88), [8, 8, 8, 8, 8], 88], [false, isNumberInArray([], 4), [], 4]]);
  day.push(["biggerTotalOfEvenNumbers", [true, biggerTotalOfEvenNumbers([4, 8, 12, 16]), [4, 8, 12, 16]], [false, biggerTotalOfEvenNumbers([3, 7, 11, 15]), [3, 7, 11, 15]], [true, biggerTotalOfEvenNumbers([2, 3, 4, 5, 6]), [2, 3, 4, 5, 6]], [false, biggerTotalOfEvenNumbers([0, 1, 0, 1, 0, 1]), [0, 1, 0, 1, 0, 1]]]);
  results.push(day);

  day = [];
  day.push(["isCollisionDetected", [true, isCollisionDetected([0, 0, 50, 50], [20, 20, 50, 50]), [0, 0, 50, 50], [20, 20, 50, 50]], [false, isCollisionDetected([200, 200, 50, 50], [100, 100, 50, 70]), [200, 200, 50, 50], [100, 100, 50, 70]], [true, isCollisionDetected([500, 800, 10, 10], [495, 795, 5, 5]), [500, 800, 10, 10], [495, 795, 5, 5]]]);
  day.push(["chainSums", [[6], chainSums([1, 2, 3]), [1, 2, 3]], [[5, 30], chainSums([8, 4, 3, 2, 3, 5, 9, 10, 11]), [8, 4, 3, 2, 3, 5, 9, 10, 11]], [[-18, 18], chainSums([-7, -6, -5, 5, 6, 7]), [-7, -6, -5, 5, 6, 7]], [[], chainSums([]), []]]);
  results.push(day);

  results.push([["matrixAddition", [[], matrixAddition([], []), [], []], [[[2, 2, 2], [2, 2, 2]], matrixAddition([[0, 2, 0], [2, 0, 2]], [[2, 0, 2], [0, 2, 0]]), [[0, 2, 0], [2, 0, 2]], [[2, 0, 2], [0, 2, 0]]], [[[12, 4], [-9, 5]], matrixAddition([[7, -3], [-5, 5]], [[5, 7], [-4, 0]]), [[7, -3], [-5, 5]], [[5, 7], [-4, 0]]]]]);

  results.push([["digitalRoot", [9, digitalRoot(123456789), 123456789], [3, digitalRoot(555555), 555555], [6, digitalRoot(101010101010), 101010101010]]]);

  results.push([["mastermind", [false, mastermind([1, 2, 3, 4, 5], []), [1, 2, 3, 4, 5], []], [false, mastermind([2, 2, 2, 3, 2], [[1, 1, 1, 1, 1], [2, 2, 2, 2, 3], [2, 1, 2, 1, 2]]), [2, 2, 2, 3, 2], [[1, 1, 1, 1, 1], [2, 2, 2, 2, 3], [2, 1, 2, 1, 2]]], [true, mastermind([5, 3, 4, 1, 2], [[5, 5, 5, 5, 5], [4, 4, 4, 4, 4], [3, 3, 3, 3, 3], [2, 2, 2, 2, 2], [1, 1, 1, 1, 1], [5, 4, 3, 2, 1], [5, 3, 4, 1, 2], [3, 5, 4, 2, 1]]), [5, 3, 4, 1, 2], [[5, 5, 5, 5, 5], [4, 4, 4, 4, 4], [3, 3, 3, 3, 3], [2, 2, 2, 2, 2], [1, 1, 1, 1, 1], [5, 4, 3, 2, 1], [5, 3, 4, 1, 2], [3, 5, 4, 2, 1]]]]]);

  return results;
}
