
//ARRAYS Y VARIABLES GLOBALES===========================================================================

//Array de tipos de inversion con sus respoectivas tasas
const TIPOS_INVERSION = [
    { nombre: "CDT", tasa_minima: 8, tasa_maxima: 10 },
    { nombre: "Fondos voluntarios de inversión colectiva", tasa_minima: 8, tasa_maxima: 12 },
    { nombre: "Bienes raíces", tasa_minima: 7, tasa_maxima: 10 },
    { nombre: "Criptomonedas", tasa_minima: 10, tasa_maxima: 30 }
]

//Array vacio para colocar el array de solo nombres de tipo de inversion
const ARRAY_NOMBRE_INVERSION = []
let proyeccionAnual = []

//Variables globales
let capitalInicial = 0
let ahorroMensual = 0
let periodoAnios = 0
let tipoInversion = 0
let indexTipoInversion = 0

//Variables para el calculo de la proyeccion
let tasaDecimalMaxima = 0
let tasaDecimalMinima = 0
let aportesAnuales = 0
let balanceAtual = 0
let totalAportado = 0
let intereses = 0

//Variables de los resultados
let balanceFinal = 0
let totalInvertido = 0
let gananciasTotales = 0

//FUNCIONES==========================================================================================

//Funcion que pregunta los datos del usuario 
function solicitarDatosUsuario() {
    capitalInicial = Number(prompt("¿Cúal es tu capital inicial?: "))
    ahorroMensual = Number(prompt("¿Cúal es tu ahorro mensual?: "))
    periodoAnios = Number(prompt("¿Cúal es el calculo en años que deseas hacer?: "))

    while (!tipoInversion) {
        tipoInversion = prompt("¿Qué tipo de inversión escoges?\n A. CDT\n B. Fondos voluntarios de inversión colectiva\n C. Bienes raíces\n D. Criptomonedas")

        switch (tipoInversion) {
            case "a":
                tipoInversion = "CDT"
                break
            case "b":
                tipoInversion = "Fondos voluntarios de inversión colectiva"
                break
            case "c":
                tipoInversion = "Bienes raíces"
                break
            case "d":
                tipoInversion = "Criptomonedas"
                break
            default:
                alert("No escogiste una opción valida")
                tipoInversion = ""
        }
    }

    alert("Escogiste estas opciones\n 💰Capital inicial: " + capitalInicial.toLocaleString() + "\n 💸Ahorro mensual: " + ahorroMensual.toLocaleString() + "\n ⌛Proyección en años: " + periodoAnios + "\n 💳Tipo de inversión: " + tipoInversion)
}

//Funcion que saca la lista simplificada con solo el nombre del tipo de inversion
function busquedaTipoInversion() {
    for (let i = 0; i < TIPOS_INVERSION.length; i++) {
        const element = ARRAY_NOMBRE_INVERSION.push(TIPOS_INVERSION[i].nombre)
    }
}

//Funcion calculo proyeccion
function calcularProyeccion() {
    tasaDecimalMaxima = TIPOS_INVERSION[indexTipoInversion].tasa_maxima / 100
    tasaDecimalMinima = TIPOS_INVERSION[indexTipoInversion].tasa_minima / 100
    aportesAnuales = ahorroMensual * 12
    balanceAtual = capitalInicial

    for (let anio = 1; anio <= periodoAnios; anio++) {
        balanceAtual = balanceAtual * (1 + tasaDecimalMaxima) + aportesAnuales
        totalAportado = capitalInicial + (aportesAnuales * anio)
        intereses = balanceAtual - totalAportado

        proyeccionAnual.push({ año: anio, balance: balanceAtual, total_aportado: totalAportado, intereses_ganados: intereses })
    }
}

//Function para mostrar los resultados
function mostrarResultados() {
    balanceFinal = proyeccionAnual[proyeccionAnual.length - 1].balance
    totalInvertido = proyeccionAnual[proyeccionAnual.length - 1].total_aportado
    gananciasTotales = proyeccionAnual[proyeccionAnual.length - 1].intereses_ganados
}

//EJECUCION PROGRAMA======================================================================================

alert("✌️Bienvenido a tu proyección de inversión para ayudarte a escoger la mejor opción para invertir bien💰")
alert("Este es el proceso:\n 📝Datos y selección de inversión\n 🧮Calculo de proyección\n 📈Resultados")

busquedaTipoInversion()
solicitarDatosUsuario()
console.log("Datos ingresados por el usuario:")
console.log("Capital inicial: " + capitalInicial.toLocaleString())
console.log("Ahorro mensual: " + ahorroMensual.toLocaleString())
console.log("Período en años: " + periodoAnios)
console.log("Tipo de inversión: " + tipoInversion)

//Saca el indice respecto al nombre del tipo de inversion escogida por el usuario
indexTipoInversion = ARRAY_NOMBRE_INVERSION.indexOf(tipoInversion)

alert("🧮Ahora a hacer la proyección🧮")

//Calculo de la proyeccion
calcularProyeccion()
console.log("Balance actual: " + balanceAtual.toLocaleString())
console.log("Total aportado: " + totalAportado.toLocaleString())
console.log("Intereses: " + intereses.toLocaleString())
console.log("Proyeccion anual")
console.log(proyeccionAnual)

alert("Y último los resultados")

//Resultados
mostrarResultados()
console.log("Resultados finales:")
console.log("Balance final: " + balanceFinal.toLocaleString())
console.log("Total invertido: " + totalInvertido.toLocaleString())
console.log("Ganancias totales: " + gananciasTotales.toLocaleString())
alert("Resultados finales\n 💵Balance final: " + balanceFinal.toLocaleString() + "\n 💰Total invertido: " + totalInvertido.toLocaleString() + "\n 🤑Ganancias totales: " + gananciasTotales.toLocaleString())


