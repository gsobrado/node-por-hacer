const argv = require('./config/yargs').argv;
const porHAcer = require('./por-hacer/por.hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHAcer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHAcer.getListado();

        for (let tarea of listado) {
            console.log('====================== POR HACER =============================='.green);
            console.log('======= Descripcion:'.bgBlue, tarea.descripcion.bgBlue);
            console.log('======= Estado'.bgBlue, tarea.completado);
            console.log('==============================================================='.green);
        }

        break;
    case 'actualizar':
        let resp = porHAcer.actualizar(argv.descripcion, argv.completado);
        if (resp) {
            console.log('La tarea se actualiso bien');
        }
        break;
    case 'borrar':
        let respuesta = porHAcer.borrar(argv.descripcion);
        if (respuesta) {
            console.log('La tarea se Borrado bien');
        }
        break;
    default:
        console.log('Comnado no reconosido');
        break;
}