const numeros = [1, 2, 3, 4, 5]

function porCadaUno(array, fn) {
    for(let i = 0; i < array.length; i++) {
        fn(array[i])
    }
}

porCadaUno(numeros, console.log)

let total = 0

function acumular(numeros) {
    total += numeros
}

porCadaUno(numeros, acumular)

console.log("Total acumulado " + total)

const duplicado = numeros.map(function(num){
    return num * 2
})

console.log(duplicado)

porCadaUno(duplicado, acumular)

console.log(total)