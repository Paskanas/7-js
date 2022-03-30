const arr = [10, 2, 5, 8, 12, 9, 13, 15]
console.log('Pazymiai: ', arr)

//Vidurkis
console.log('Vidurkis')
console.log(arr.length)
console.log(arr.reduce((a, b) => a + b, 0))
console.log(arr.reduce((a, b) => a + b, 0) / arr.length)
//Kiekis
console.log('Kiekis')
console.log(arr.length)
//Maziausias
console.log('Maziausias')
console.log(Math.min.apply(Math, arr))
console.log(Math.min(...arr))
//didziausias
console.log('didziausias')
console.log(Math.max.apply(Math, arr))
console.log(Math.max(...arr))
//mediana
console.log('mediana')
console.log()
//rusiavimas didejimo tvarka
console.log('Rusiavimas didejimo tvarka')
const arrSort1 = arr.sort((a, b) => a - b)
console.log(arrSort1)
//rusiavimas mazejimo tvarka
console.log('Rusiavimas didejimo tvarka')
const arrSortDesc = arr.sort((a, b) => b - a)
console.log(arrSortDesc)
//koks pirmas
console.log('koks pirmas')
console.log(arr[0])
//koks paskutinis
console.log('koks paskutinis')
console.log(arr[arr.length - 1])
