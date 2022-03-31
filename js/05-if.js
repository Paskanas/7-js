/**
 * IF
 *
 * Sablonai:
 * if () {}
 * if {} else {}
 * x?a:b
 *
 * Palyginimo operatoriai:
 * - visi: >, <, <=, >=, ==, !=, ===, !==
 * - naudotini: >, <, <=, >=, ===, !==
 * - NEnaudotini: ==, !=
 *   */

const a = 7;
const b = '7';
//
if (a === b) {
  console.log('true');
} else {
  console.log('false');
}
console.log('-------------------------------------');

const akiuSpalva = 'raudona';
if (akiuSpalva === 'zalia') {
  console.log('Zaliaakiai yra zaliomis akimis');
} else if (akiuSpalva === 'melina') {
  console.log('Melynakiai megsta melynes');
} else if (akiuSpalva === 'ruda') {
  console.log('Rudaakiai yra melagiai');
} else if (akiuSpalva === 'raudona') {
  console.log('Raudona ??Tu gal programuotojas?');
} else {
  console.log('Kazkokia kita akiu spalva');
}
