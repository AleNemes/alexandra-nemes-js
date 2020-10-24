// let i = 1;

// do {
//   console.log(i);

//   if (i === 50) {
//     break;
//   }

//   i++;
// } while (i < 100);

// Pct 4 Modifica exemplul astfel incat bucla sa
// numere de la 1 la 52
// Pct 5 Modifica exemplul astfel incat bucla sa numere de la 1 la 51.
// do {
//   console.log(i);

//   if (i === 51) {
//     break;
//   }

//   i++;
// } while (i < 100);

// Pct 6 Folosind keywordul break opreste bucla atunci
// cand numarul este egal cu 12 (dar afiseaza-l)
// do {
//   console.log(i);

//   if (i === 12) {
//     break;
//   }

//   i++;
// } while (i < 100);

// Pct 7 Folosind keywordul continue afiseaza
// doar numerele impare intre 8 si 32.
// let i = 8;
// do {
//   console.log(i);

//   if (i !== 0) {
//     continue;
//   }

//   i++;
// } while (i <= 32);

// Pct 8 Folosind metoda prompt de trei ori cere utilizatorului un numar,
//  o limita inferioara si o limita superioara apoi afiseaza toti multiplii
//  de numar intre limita inferioara si limita superioara introduse.
let number = prompt('Introdu un numar');
let infBoundery = prompt('Introdu limita inferioara');
let supBoundery = prompt('Introdu limita superioara');
let i = 0;
do {
  console.log(i);

  if (number % 2 !== 0) {
    continue;
  }

  i++;
} while (i <= 100);
