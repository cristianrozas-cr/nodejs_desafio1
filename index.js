//Importar funciones 
const {registrar, leer} = require('./operaciones')


//El comando process.argv es para que nos lea los argumentos desde la terminal y elimina los dos primeros que son node e index.
const [operacion, nombre, edad, tipoDeAnimal, colorDeAnimal, enfermedad] = process.argv.slice(2)

//Condicional para ejecutar la funcion registrar o leer
if (operacion === "registrar"){
    registrar(nombre, edad, tipoDeAnimal, colorDeAnimal, enfermedad);
}
if (operacion === "leer"){
    leer()
}
