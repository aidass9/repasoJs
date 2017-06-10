

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
        //console.log(i+") "+lineas[i]) //Muestra por consola cada linea
    }
}