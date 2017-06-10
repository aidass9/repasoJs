<?php
    //Creamos una variable en php
    $nombre = "Jorge";
    $numero = 2;
    //Dentro de un echo creamos un script de javascript
    //Este script se ejecuta en el cliente, mientras que php se ejecuta en el servidor
    //1) Meto en nombreJs (variable de javascript) el valor de la variable de php (con comillas para que entienda que es un string)
    //2) Muestro en la consola del cliente el valor de la variable de javascript
    echo "<script>
    var nombrejs = '$nombre';
    var numero = $numero;
    console.log(nombrejs, numero*2)
    </script>";
?>