//Tabla de precios
const tablaDePrecios= [
    {type:"dolar", value:1200},
    {type:"euro", value:1300},
    {type:"libra esterlina", value:1280},
    {type:"peso uruguayo", value:23},
]

//Función para el muestreo de la tabla de precios
function moneda(){
    let string=""
    for(let i=0;i<tablaDePrecios.length;i++){
        string+=`Moneda: ${tablaDePrecios[i].type} Valor: ${tablaDePrecios[i].value}\n`
    }
    return string
}

//Prompts para ingreso de datos que se desean convertir
let monedaElegida= prompt(`Tabla de Valores:\n${moneda()}\nIngrese la moneda que desea cambiar:`).toLowerCase()
let montoIngresado= parseFloat(prompt("Cantidad que desea cambiar:\nSi su número contiene decimales ingreselo utilizando un punto."))


//Función para detectar cual fue la moneda ingresada por el usuario
function encontrarMonedaElegida(){
    for(let i=0;i<tablaDePrecios.length;i++){
        if(monedaElegida===tablaDePrecios[i].type){
            return tablaDePrecios[i]
        }
        else{alert("La moneda ingresada no está en la lista")}
    }
}

//Función para calcular el cambio deseado por el usario
function calcularCambio(){
    const monedaEncontrada=encontrarMonedaElegida()
    alert(`El valor de cambio es: $${montoIngresado*monedaEncontrada.value}`)
}
calcularCambio()


