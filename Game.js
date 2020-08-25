//Geef speler de mogelijkheid om naam in veld in te voeren en op enter te kunnen drukken
var name = prompt("Welkom bij mijn spel! Wat is je naam?", "");
// geef aan dat naam is geregistreerd met alertbox
alert("Welkom" + " " + name);
// vraag gebruiker om een nieuwe input cijfers van 0 tot 25
var SpelerCijfer = 5;
var RandomCijfer = Math.floor(Math.random() * SpelerCijfer) + 1;
var cijfer = prompt(
  "Ok" +
    " " +
    name +
    " " +
    "welk getal denk ik aan? Kies een cijfer tussen 0 en 5",
  ""
);
// na invullen van een cijfer krijgt een speler terug dat het gekozen cijfer niet het juiste is
while (parseInt(RandomCijfer) !== parseInt(cijfer)) {
  alert("Helaas, dat is niet correct. Probeer het nog eens");
  var RandomCijfer = Math.floor(Math.random() * SpelerCijfer) + 1;
  var cijfer = prompt(
    "Ok" +
      " " +
      name +
      " " +
      "welk getal denk ik aan? Kies een cijfer tussen 0 en 5",
    ""
  );
  console.log(RandomCijfer);
}
//Wanneer de speler het juiste nummer geraden heeft, krijgt hij/zij te zien dat hij/ij gewonnen heeft
if (parseInt(RandomCijfer) === parseInt(cijfer)) {
  alert("Gefeliciteerd, je hebt gewonnen!");
}

//De speler wordt vervolgens bedankt voor het spelen
var congrats = alert("Bedankt voor het spelen" + " " + name + "!");

//var aantalRondes = 1;
//aantalRondes++;
//else if ((parseInt(aantalRondes) = 4)) {
//alert("GAME OVER");
