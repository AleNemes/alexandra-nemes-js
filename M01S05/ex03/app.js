let calculateRectangleArea = function (L, l) {
  return L * l;
};

// Pct 1 Stiind ca un camp dreptunghiular de hamei produce 25kg/m2 .
//  Ce diferenta de productie este intre un teren de 100m pe 250m
//  si unul de 350m pe 200m?

// per square meter
let yield = 25;
let field1Surface = calculateRectangleArea(100, 250);
let field2Surface = calculateRectangleArea(350, 200);
let field1Yield = field1Surface * yield;
let field2Yield = field2Surface * yield;
console.log(Math.abs(field2Yield - field1Yield));

// Pct 2 Stiind ca din 10kg de hamei produc 2.5l de bere,
//  cati litri de bere va produce un teren de 400m pe 370m?
let field3Surface = calculateRectangleArea(400, 370);
let field3Yield = field3Surface * yield;
let beerKg = 2.5 / 10;
console.log(field3Yield * beerKg);

console.warn(`
Pct 3 Stiind ca un camp dreptunghiular de grau produce 32kg/m2  de faina.
 Afla si afiseaza cate kilograme de paine produce un camp de 300 pe 200 metri
 stiind ca dintr-un kilogram de faina ies 2.5 kg de paine.
`);
let yield1 = 32;
let fieldSurface = calculateRectangleArea(300, 200);
let fieldSurfaceYield = field1Surface * yield1;
console.log(fieldSurfaceYield * 2.5);

console.warn(`
Dar doua campuri de 150 pe 200 si 500 pe 300 in total?
`);
let field4Surface = calculateRectangleArea(150, 200);
let field5Surface = calculateRectangleArea(500, 300);
let totalFieldSurface = field4Surface + field5Surface;
let fieldSurfaceyield1 = totalFieldSurface * yield1;
console.log(fieldSurfaceyield1 * 2.5);
