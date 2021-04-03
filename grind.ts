
// Retourne la valeur true
function returnTrue(): boolean {
  return false;
}

// Retourne le paramètre donné en entrée
function returnParam(param: number): number {
  return 0;
}

// Retourne vrai si param est strictement supérieur à 5
// Retourne faux sinon
function isBiggerThan5(param: number): boolean {
  return false;
}

// Retourne vrai si param est faux
// Retourne faux si param est vrai
function invertBoolean(param: boolean): boolean {
  return false;
}

export function testFunctions() {
  let results = [];
  results.push(["returnTrue", [true, returnTrue()], [true, returnTrue()]]);
  results.push(["returnParam", [5, returnParam(5)], [-12, returnParam(-12)]]);
  results.push(["isBiggerThan5", [true, isBiggerThan5(8)], [false, isBiggerThan5(-15)], [false, isBiggerThan5(5)]]);
  results.push(["invertBoolean", [false, invertBoolean(true)], [true, invertBoolean(false)]]);

  return results;
}
