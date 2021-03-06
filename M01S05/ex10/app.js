function calculateSurface(L, l) {
  if (arguments.length === 2) {
    return L * l;
  } else {
    return L ** 2;
  }
}
console.log('Suprafata unui patrat de 2 pe 2 este', calculateSurface(2));
console.log('Suprafta unui dreptunghi de 6 pe 7 este', calculateSurface(6, 7));

console.warn(`
// Pct 1 Creeaza un wrapper numit calculateSquareSurface()
// pentru calculateSurface() care sa primeasca un singur
// parametru si sa calculeze suprafata unui patrat.
`);
let calculateSquareSurface = (L) => {
  return calculateSurface(L);
};

console.warn(`
// Pct 2 Cu metoda noua calculeaza suprafata unui patrat de 4 pe 4.
`);
console.log(calculateSquareSurface(4));

console.warn(`
// Pct 3 Creeaza un wrapper numit calculateRectangleSurface() pentru calculateSurface()
care sa primeasca doi parametrii si sa calculeze suprafata unui dreptunghi.
Cu metoda noua calculeaza suprafata unui dreptunghi de 8 pe 9.
`);
let calculateRectangleSurface = (L, l) => {
  return calculateSurface(L, l);
};
console.log(calculateRectangleSurface(8, 9));
