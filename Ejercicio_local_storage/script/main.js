// const saludo = document.getElementById("saludo");
// const botonGuardar = document.getElementById("guardarNombre");
// const botonEliminar = document.getElementById("eliminarNombre");

// botonGuardar.addEventListener("click", () => {
//     const nombre = prompt("Ingrese nombre:")
//     if (nombre) {
//         localStorage.setItem("nombreUsuario", nombre)
//         saludo.textContent = `Hola ${nombre}`
//     }
// })

// botonEliminar.addEventListener("click", () => {
//     localStorage.removeItem("nombreUsuario")
//     saludo.textContent = `Hola`
// })

// const nombreGuardado = localStorage.getItem("nombreUsuario")
// if (nombreGuardado) {
//     saludo.textContent = `Hola ${nombreGuardado}`
// } 

// let nombre = "William";
// let edad = 32;

// localStorage.setItem("nombrePersona", nombre);
// localStorage.setItem("edadPersona", edad);

// let nombreRecuperado = localStorage.getItem("nombrePersona");
// console.log(nombreRecuperado);

// let edadRecuperada = parseInt(localStorage.getItem("edadPersona"));
// console.log(edadRecuperada);

let usuario = {
    nombre: "William",
    edad: 32
}

let usuarioJson = JSON.stringify(usuario);
console.log(usuarioJson);

localStorage.setItem("usuario01", usuarioJson);

let usuarioRecuperado = JSON.parse(localStorage.getItem("usuario01"));

console.log(usuarioRecuperado);
