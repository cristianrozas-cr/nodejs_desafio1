//Importar módulo fs
const fs = require('fs');

//Funcion para registrar un nuevo animal
const registrar = (nombre, edad, tipoAnimal, colorAnimal, enfermedad) => {
    const datosMascota =
        {nombreAnimal: nombre,
        edad: edad,
        tipoAnimal: tipoAnimal,
        colorAnimal: colorAnimal,
        enfermedad: enfermedad
    };
    //Crear la constante datos la cual lee el archivo citas.json y le aplica el método parse para trabajarlo como objeto de js
    const datosGuardados = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    //Usamos el método push para insertar un nuevo objeto al final del array
    datosGuardados.push(datosMascota);
    //Actualizamos el archivo citas.json transformándolo a json nuevamente
    fs.writeFileSync('citas.json', JSON.stringify(datosGuardados))
};

//Funcion para leer los animales que están dentro del json
const leer = () => {
    const datos = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    console.log(datos)
}

//Exportar funciones 
module.exports = {registrar, leer};