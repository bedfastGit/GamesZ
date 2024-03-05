<?php
session_start(); // Inicia la sesión

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["login"])) {
    // Verifica si se ha enviado un formulario de inicio de sesión

    // Conexión a la base de datos (debes configurar las credenciales según tu entorno)
    $servername = "localhost";
    $username = "alejandro";
    $password = "1234";
    $dbname = "prueba1";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verifica la conexión
    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    // Obtén los datos del formulario
    $username = $_POST["name"];
    $password = $_POST["pass"];

    // Consulta SQL para verificar las credenciales
    $sql = "SELECT * FROM usuarios WHERE nombre = '$username' AND pass = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Si las credenciales son válidas, inicia sesión y redirige a la página principal
        $_SESSION["username"] = $username;
        header("Location: index.html");
        exit();
    } else {
        // Si las credenciales son inválidas, muestra un mensaje de error
        echo "Nombre de usuario o contraseña incorrectos";
    }

    $conn->close();
}
?>
