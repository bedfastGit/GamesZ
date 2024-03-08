<?php
session_start(); 
require('initdb.php');


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Obtén los datos del formulario
    $username = $_POST["name"];
    $password = $_POST["pass"];

    // Consulta SQL para verificar las credenciales del usuario prueba (lejo)
    $sql = "SELECT * FROM usuarios WHERE nombre = '$username' AND pass = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Si las credenciales son válidas, inicia sesión y redirige a la página principal
        $_SESSION["username"] = $username;
        header("Location: control.php");
        exit();
    } else {
        header("Location: user.php");
    }

    $conn->close();
}
?>
