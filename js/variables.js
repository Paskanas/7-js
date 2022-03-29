var num = 10
let a = 12
const constant = 20

console.log(num)
console.log(a)
console.log(constant)

console.log(num + a + constant)

for (let i = 0; i <= 10; i++) {
  console.log('Skaicius ', i + 1)
}
console.log('-------------------------------------')

for (let i = 0; i <= 10; i++) {
  console.log('Skaicius ', i + 1)
}

console.log(a + 1)

let pinigine = 0
var pasisveikinimas
let makeSpace = false
for (let i = 0; i <= 10; i++) {
  // console.log('pinigine ' + pinigine)
  // console.log('i ' + i)
  pinigine = Number(pinigine) + Number(i)
  pasisveikinimas = i + ` Mano piniginėje yra pinigine ` + pinigine + ' pinigų'
  console.log(pasisveikinimas)
  if (i == 10) {
    makeSpace = true
  }
  // if (makeSpace) {
  //   console.log('')
  // }
}
z = 10
console.log(z)

let c = 11
console.log(c)

console.log(
  'cia: %i numeriukas, stringas: %s, floatas: %f, objektas %o, array: %a',
  42,
  'labas',
  3.14,
  {
    type: 'string',
    value: 5,
  },
  [1, 2, 3, 4, 5, 6]
)
