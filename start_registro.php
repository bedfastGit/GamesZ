<?php
session_start(); 
require('initdb.php');


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(!isset($_POST["nombre"]) || !isset($_POST["contraseña"])){
        header("Location: user.php");
        exit();
    }

    $nombre = $_POST["nombre"];
    $contraseña = $_POST["contraseña"];

    if (empty($nombre) || empty($contraseña)) {
        header("Location: user.php");
        exit();
    }
    
    // Consulta SQL para insertar el nuevo usuario en la base de datos
    $sql = "INSERT INTO usuarios (nombre, pass) VALUES ('$nombre', '$contraseña')";
    $result = $conn->query($sql);
    if ($result) {
        // Registro exitoso, redirige al usuario a la página principal
        header("Location: index.php");
        exit();
    } else {
        header("Location: user.php");
    }

    $conn->close();
}
?>
