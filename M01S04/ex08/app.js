let i = 1;

// while (i < 100) {
//   console.log(i);

//   if (i === 50) {
//     break;
//   }

//   i++;
//   // i = i + 1
// }

// Pct 5 Modifica exemplul astfel incat bucla sa
// numere de la 1 la 67.
// while (i <= 67) {
//   console.log(i);

//   i++;
// }

// Pct 6 Modifica exemplul astfel incat bucla sa numere de la 1 la 66.
// Pct 7 Folosind keywordul break opreste bucla atunci
// cand numarul este egal cu 12 (dar afiseaza-l).
// while (i <= 66) {
//   console.log(i);

//   if (i === 12) {
//     break;
//   }
//   i++;
// }

// Pct 8 Folosind keywordul continue afiseaza doar numerele
//  pare intre 1 si 32 (inclusiv).
// while (i <= 66) {
//   if (i % 2 !== 0 <= 32) {
//     continue;
//   }

//   console.log(i);
//   i++;
// }

// Pct 9 Folosind metoda prompt de doua ori cere utilizatorului
// un numar si o limita superioara apoi afiseaza toti multiplii
// de numar intre 5 si limita superioara introduse.
let testNumber = prompt('Introdu un numar:');
let boundary = prompt('Introdu limita superioara');
while (i <= boundary) {
  console.log(i);

  if (i % testNumber !== 0) {
  }
  i++;
}
