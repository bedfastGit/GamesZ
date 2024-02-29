<?php
    session_start();

    $conn = mysqli_connect("localhost", "alejandro", "1234", "prueba1", "3308");

    if (mysqli_connect_errno()){
        echo "no se ha conectado con la bd";
        mysqli_connect_errno();
    };

    mysqli_select_db($conn, "prueba1");
    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
?>