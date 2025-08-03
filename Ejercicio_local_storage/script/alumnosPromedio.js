class Alumno {
    constructor(nombreAlumno, nota){
        this.nombreAlumno = nombreAlumno
        this.nota = nota
    }
}

let alumno1 = new Alumno("William", [4, 5, 4.5, 1])
// console.log(alumno1)

let alumno2 = new Alumno("Yuri", [3, 5, 3.5, 2])
// console.log(alumno2)
// console.log(alumno2.nota)
// console.log(alumno2.nota.length)

let promedio = 0

function calcularPromedioNota(notasAPromediar) {
    let suma = 0
    for(let i = 0; i < notasAPromediar.length; i++){
        suma = suma + notasAPromediar[i]
    }
    console.log(suma)
    promedio = suma / notasAPromediar.length
    return promedio
}

let decisionUsuario = prompt("Hola antes de iniciar que te gustaría hacer?\n a. Agregar algun alumno con sus notas\n b. Eliminar algun alumno\n c. Calcular promedio de un alumno")

switch (decisionUsuario) {
    case "a":
        nombreAlumno = prompt("Como se llama el alumno: ")
        nota = Number(prompt("Dime las 5 notas del alumno: "))
        break;
    case "b":
        break;
    case "c":
        let cualPromedioCalcular = prompt("Cual alumno escoges para calcular promedio\n a. William\n b. Yuri")

        if(cualPromedioCalcular == "a") {
            cualPromedioCalcular = alumno1
        } else if(cualPromedioCalcular == "b") {
            cualPromedioCalcular = alumno2
        }

        console.log(cualPromedioCalcular)
        calcularPromedioNota(cualPromedioCalcular.nota)
        console.log(promedio)

        alert("Tu promedio es " + promedio)
} 