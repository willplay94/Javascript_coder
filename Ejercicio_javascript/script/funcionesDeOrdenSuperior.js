const clasesProgramacion = [
    { nombre: "Introducción a JavaScript", precio: 30, duracion: 8 },
    { nombre: "Python para Principiantes", precio: 40, duracion: 10 },
    { nombre: "Desarrollo Web con HTML y CSS", precio: 25, duracion: 12 },
    { nombre: "React desde Cero", precio: 50, duracion: 15 },
    { nombre: "Backend con Node.js", precio: 45, duracion: 20 },
    { nombre: "Bases de Datos SQL", precio: 35, duracion: 10 },
    { nombre: "Programación en Java", precio: 46, duracion: 25 },
    { nombre: "Machine Learning con Python", precio: 60, duracion: 30 },
    { nombre: "Diseño de APIs con Express", precio: 43, duracion: 18 },
    { nombre: "Git y Control de Versiones", precio: 20, duracion: 6 },
    { nombre: "TypeScript Avanzado", precio: 50, duracion: 15 },
    { nombre: "Desarrollo de Apps Móviles con Flutter", precio: 55, duracion: 22 },
    { nombre: "Ciberseguridad Básica", precio: 38, duracion: 12 },
    { nombre: "Blockchain y Smart Contracts", precio: 65, duracion: 28 },
    { nombre: "DevOps con Docker y Kubernetes", precio: 60, duracion: 25 }
];

//organiza 
clasesProgramacion.sort(function(a,b){
    return a.precio - b.precio
})
console.log(clasesProgramacion)

//Suma todos los precios
const suma = clasesProgramacion.reduce(function(total, valorActual){
    return total + valorActual.precio
}, 0)
console.log("Suma total de precios:", suma)

// const resultado = clasesProgramacion.find(clase => clase.nombre === "Backend con Node.js");
// console.log(resultado)

// const resultadoPrecio = clasesProgramacion.find(clase => clase.precio > 60)
// console.log(resultadoPrecio)

// const resultadoPrecio02 = clasesProgramacion.filter(clase => clase.precio > 40)
// console.log(resultadoPrecio02)

// const soloNombres = clasesProgramacion.map(function (clase) {
//     return clase.nombre
// })
// console.log(soloNombres)

// const precioCOP = clasesProgramacion.map(function (clase) {
//     return ((clase.precio * 4) * 1000).toLocaleString()
// })
// console.log(precioCOP)

// //Sort para ordenar de menaor a mayor
// numeros = [200, 35, 65, 78, 900]

// numeros.sort(function(a, b) {
//     return a - b;
// })
// console.log(numeros)

// //Sort para ordenar en orden del abecedario las palabras
// const frutas = ["manzana", "banana", "naranja", "manzana", "pera", "uva", "banana", "sandía", "kiwi", "pera", "naranja", "mango", "manzana", "uva"];

// frutas.sort(function(a,b){
//     return a.localeCompare(b)
// })
// console.log(frutas)