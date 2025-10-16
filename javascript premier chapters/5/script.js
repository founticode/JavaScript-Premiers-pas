/* javascript somme */
let nombre1 = 10;
let nombre2 = 5;
let somme1 = nombre1 + nombre2;
console.log("La somme est : " + somme1);

/* javascript function */ 
function addition(a, b) {
    return a + b;
  }
  
  let somme = addition(8, 5);
  console.log("La somme est : " + somme);

 /* if and else */
let age = 20;

if (age < 18) {
    console.log("vous êtes mineur. ");
}else if (age === 18) {
    console.log("Vous venez d’atteindre la majorité ! ");
}else {
    console.log("Vous êtes majeur.");
    }

/* loups */
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;// sauter le 5
    console.log("nombre : " + i);

}
