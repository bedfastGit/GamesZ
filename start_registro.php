<?php
session_start(); // Inicia la sesión

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["register"])) {
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

    $nombre = $_POST["nombre"];
    $contraseña = $_POST["contraseña"];


    // Consulta SQL para insertar el nuevo usuario en la base de datos
    $sql = "INSERT INTO usuarios (nombre, contraseña) VALUES ('$nombre', '$contraseña')";

    if ($conn->query($sql) === TRUE) {
        // Registro exitoso, redirige al usuario a la página principal
        $_SESSION["username"] = $nombre;
        header("Location: index.html");
        exit();
    } else {
        // Error en el registro
        echo "Error en el registro: " . $conn->error;
    }

    $conn->close();
}
?>
