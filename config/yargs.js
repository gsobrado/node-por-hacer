const optCrear = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}

const optActualizar = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        default: true,
        alias: 'c'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear una nueva tarea', optCrear)
    .command('actualizar', 'actualiza una tarea existente', optActualizar)
    .command('borrar', 'actualiza una tarea existente', optCrear)
    .help()
    .argv;

module.exports = {
    argv
}