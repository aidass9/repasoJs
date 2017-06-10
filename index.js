var ids = [];
var nombres = [];
var udcaja = [];
var precio = [];

cargarDatos();
function cargarDatos() {
    $.ajax({
        url: 'datos.csv',
        success: function (datos) {
            dividirPorLineas(datos);
        },
        error: function (request, status, error) {
            if (error == "Not Found") {
                console.log("Error al obtener el archivo");
            }
        }
    })
}
function dividirPorLineas(datos) {
    lineas = datos.split(/\n/);
    for (i = 0; i < lineas.length; i++) {
        dividirPorCampo(lineas[i])
        //console.log(i+") "+lineas[i]) //Muestra por consola cada linea
    }
}

function dividirPorCampo(linea) {
    campos = linea.split(";");
    id.push(campos[0]);
    nombres.push(campos[1]);
    udcaja.push(campos[2]);
    precio.push(campos[3]);
}

