const pirmas = 7;
const antras = 5;

// const suma = (a, b) => {
//   return a + b;
// };
const suma = (a, b) => a + b;
// const atimtis = (a, b) => {
//   return a - b;
// };
const atimtis = (a, b) => a - b;
// const dalyba = (a, b) => {
//   return a / b;
// };
const dalyba = (a, b) => a / b;

const daugyba = (a, b) => {
  return a * b;
};

const kvadratu = (a) => a ** 2;

const callAll = (a, b) => {
  console.log(suma(a, b));
  console.log(atimtis(a, b));
  console.log(dalyba(a, b));
  console.log(daugyba(a, b));
  console.log(kvadratu(a));
};

callAll(pirmas, antras);

//kintamajam priskirta anonimine funkcija
const atimtis2 = function (a, b) {
  return a - b;
};

console.log('---------------');
console.log(atimtis2(pirmas, antras));
