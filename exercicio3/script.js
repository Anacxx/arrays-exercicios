var numeros = [32,52,65,76,34,654,63,4556,345,345,52,2]
var familia = ["Ana","Maristela","Emily","Poly","Bela","Cristalina","Louie","Zara"]
var mistura = ["Ana",29,true]

var numerosCopia = numeros.slice()
numerosCopia.unshift(45)
console.log(numeros)
console.log(numerosCopia)

var familiaCopia = familia.slice()
familiaCopia.pop()
console.log(familia)
console.log(familiaCopia)

var misturaCopia = mistura.slice()
misturaCopia.splice(1,1)
console.log(mistura)
console.log(misturaCopia)