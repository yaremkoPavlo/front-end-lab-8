var dol = Number(prompt("How many dollars do you need change?"));
var eur = Number(prompt("How many euros do you need change?"));
var kursDol = 27.4609,
    kursEur = 33.8565;

if ( dol > 0 && eur > 0 ) {
  var eurDol = kursEur/kursDol;
  eurDol = Number.isInteger(eurDol) ? eurDol : eurDol.toFixed(2);

  var eurUah = eur * kursEur;
  eurUah = Number.isInteger(eurUah) ? eurUah : eurUah.toFixed(2);

  var dolUah = dol * kursDol;
  dolUah = Number.isInteger(dolUah) ? dolUah : dolUah.toFixed(2);

  console.log(eur+" euros are equal "+eurUah+" UAH, "+dol+" dollars are equal "
              +dolUah+" UAH, one euro is equal "+eurDol+" dollars.");
} else {
  console.log("Incorrect input");
}
