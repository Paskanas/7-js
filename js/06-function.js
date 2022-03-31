function getPazymiuSuma(suma, pazymiai) {
  for (i = 0; i < pazymiai.length; i++) {
    suma += pazymiai[i];
  }
  return suma;
}

const petras = [10, 10, 8, 2];
const maryte = [5, 9, 7, 6];
const jonukas = [7, 7, 8, 2];
const ona = [1, 5, 7, 10];

let petroSuma = 0;
let marytesSuma = 0;
let jonukoSuma = 0;
let onosSuma = 0;
getPazymiuSuma(petroSuma, petras);
console.log(getPazymiuSuma(petroSuma, petras));
petroSuma = getPazymiuSuma(petroSuma, petras);
let petroVidurkis = petroSuma / petras.length;
console.log('Petro vidurkis:', petroVidurkis);

marytesSuma = getPazymiuSuma(marytesSuma, maryte);
let marytesVidurkis = marytesSuma / maryte.length;
console.log('marytes vidurkis:', marytesVidurkis);

jonukoSuma = getPazymiuSuma(jonukoSuma, jonukas);
let jonukoVidurkis = jonukoSuma / jonukas.length;
console.log('jonuko vidurkis:', jonukoVidurkis);

onosSuma = getPazymiuSuma(onosSuma, ona);
let onosVidurkis = onosSuma / ona.length;
console.log('onos vidurkis:', onosVidurkis);
