/**
 * loop variants:
 * for
 * while
 * for-of
 * for/in - object loopt
 */

console.log('Mokinamies for ciklo');
for (i = 0; i < 10; i++) {
  console.log(i);
}
console.log('----------Pazymiai-------');
const pazymiai = [10, 5, 4, 8, 7];

console.log('----------FOR-----------');
let sumaFor = 0;
for (i1 = 0; i1 < pazymiai.length; i1++) {
  sumaFor += pazymiai[i1];
}
console.log('sumaFor', sumaFor);

console.log('----------WHILE-----------');
let sumaWhile = 0;
let i2 = 0;
while (i2 < pazymiai.length) {
  sumaWhile += pazymiai[i2];
  // console.log(pazymiai[i2]);
  i2++;
}
console.log('sumaWhile', sumaWhile);

console.log('----------FOR-OF------------');
let sumaForOf = 0;
for (const pazymys of pazymiai) {
  sumaForOf += pazymys;
}
console.log('sumaForOf', sumaForOf);

console.log('----------forEach------------');
let sumaForEach = 0;
pazymiai.forEach((pazymys, index, pazymiaiCopy) => {
  // console.log(pazymys);
  // console.log(index);
  // console.log(pazymiaiCopy);
  sumaForEach += pazymys;
});
console.log('sumaForEach', sumaForEach);

console.log('----------forEach------------');

console.log(pazymiai.forEach);
