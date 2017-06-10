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
    var lineas = datos.split(/\n/);
    for (i = 0; i < lineas.length; i++) {
        dividirPorCampo(lineas[i])
        //console.log(i+") "+lineas[i]) //Muestra por consola cada linea
    }
    cargarDatosTabla(true);
}

function dividirPorCampo(linea) {
    campos = linea.split(";");
    ids.push(campos[0]);
    nombres.push(campos[1]);
    udcaja.push(campos[2]);
    precio.push(campos[3]);
}

function cargarDatosTabla(condicion) {
    //reseteamos tabla
    document.getElementById("tabla").innerHTML = ""

    //ingresamos datos
    for (i = 0; i < ids.length; i++) {
        if (condicion === true) {
            insertarFila(i);
        }
        else if (ids[i].charAt(0) === "1") {
            //Si la condición es falsa y la primera letra de la id es 1 entra
            insertarFila(i);
        }
    }
}

function insertarFila(indice) {
    var filaTabla = `
    <tr>
        <td>${ids[indice]}</td>
        <td>${nombres[indice]}</td>
        <td>${udcaja[indice]}</td>
        <td>${precio[indice]}</td>
    </tr>
    `
    document.getElementById("tabla").innerHTML += filaTabla

}