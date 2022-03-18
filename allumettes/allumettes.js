// les allumettes
let matchesInt = 50;
let play = true
function matchesRemove() {
  let matchesRemove = prompt(
    " Tu as 50 allumettes ! Tu peux retirer 1 à 6 allumettes"
  );
  if (matchesRemove > 0 && matchesRemove < 7) {
    matches = matchesInt - matchesRemove;
    alert("Il reste  " + matches + " allumettes");
  }
}
function matchesCheck(matches) {
  matches == matches; 
  do {
    let newMatches = prompt("A l'autre joueur d'enlever 1 à 6 allumettes");
    if (newMatches > 0 && newMatches < 7)
    matches = matches - newMatches;
    alert("Il reste  " + matches + " allumettes");
  
  } while (matches > 0);
  
}
matchesRemove();
matchesCheck(matches);



