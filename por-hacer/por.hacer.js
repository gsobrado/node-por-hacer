const fs = require('fs');
const colors = require('colors');


let listadoPorJacer = [];

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorJacer.push(porHacer);

    guardarEnDB();

    return porHacer;

}

const cargarDB = () => {

    try {
        listadoPorJacer = require('../DB/data.json');
    } catch (error) {
        listadoPorJacer = [];
    }

}

const guardarEnDB = () => {
    let data = JSON.stringify(listadoPorJacer);

    fs.writeFile('DB/data.json', data, (err) => {
        if (err) throw new Error('nno se pudo grabar');
    })
}

const getListado = () => {

    cargarDB();

    return listadoPorJacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorJacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorJacer[index].completado = completado;
        guardarEnDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoPorJacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorJacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorJacer = nuevoListado;
        guardarEnDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}