function dwarfRollCall(dwarves) {
  for(var i =0; i < dwarves.length; i++) {
    return (i+1) + '. ' + dwarves[i] + ' ' + (i+2) + '. ' + dwarves[i+1] + ' ' + (i+3) + '. ' + dwarves[i+2] + ' ';
  }
}

function summonCaptainPlanet(planeteerCalls){ function summonCaptainPlanet(planeteerCalls){
var newPlanet = [];
 for(var i = 0; i < planeteerCalls.length; i++) {
   newPlanet.push(planeteerCalls[i].toUpperCase() + '!');
 }
 return newPlanet;
}
}

function longPlaneteerCalls(words) { function longPlaneteerCalls(words) {
 for(var i =0; i < words.length; i++){
   if(words[i].length > 4) {
     return true;
   } else {
     return false;
   }
}

function findTheCheese (foods) { function findTheCheese (foods) {
 for(var i =0; i < foods.length; i++) {
   if(foods[i] === 'cheddar') {
     return foods[i];
   }
 }
 if(foods !== 'cheddar') {
   return 'no cheese!';
 }
}
