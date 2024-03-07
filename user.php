<?php

require("start_login.php");
require("start_registro.php");
?>


<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style/style.css">
  <title>Login</title>
</head>
<body>
  <div class="container">

    <img src="pics/imagenlog2.png" alt="Fondo de la tienda de videojuegos" class="background-image">
    <div class="content-box" id="usuario">
        <a href="index.php"> <img src="pics/gamesz.png" alt="Logo de la tienda de videojuegos" class="logo"> </a>
      <form class="form" method="post" action="start_login.php" id="loginForm">
        <label for="username" class="label">Usuario</label>
        <div class="input-container">
          <span class="input-icon">&#x1F464;</span>
          <input type="text" name="name" id="username" class="user-input" placeholder="Nombre de usuario" required>
        </div>

        <label for="password" class="label">Contraseña</label>
        <div class="input-container">
          <span class="input-icon">&#x1F512;</span>
          <input type="password" id="password" name="pass" class="password-input" placeholder="Contraseña" required>
        </div>

        <button type="submit" name="login" class="login-button">Iniciar Sesión</button>
      </form>

      <div class="additional-options">
        <hr>
        <p>¿No tienes una cuenta? <a href="#" onclick='atrasSatanas("crear", "usuario")'>Crear cuenta nueva</a></p>
        <p><a href="password.html">¿Has olvidado tu contraseña?</a></p>
      </div>
    </div>
 
    
    <div class="content-box" id="crear">

        <a href="index.php"> <img src="pics/gamesz.png" alt="Logo de la tienda de videojuegos" class="logo"> </a>
      <form action="start_registro.php" method="post" class="form" id="loginFormdos" onsubmit="return validarFormulario()">

        <div class="input-container-CPa">
            <label for="correo"></label>
            <input type="email" id="correo" placeholder="Correo" class="correo-input" name="correo" required>

            <label for="contrasena">
            <input type="password" id="contrasena" placeholder="Contraseña" class="contrasena-input" name="contraseña">
            </label>
            <button type="button" class="mostrar" onclick="mostrarOcultarContrasena()">Mostrar</button>
        </div>

        <div class="input-container-UsA">
            <label for="nombre"></label>
            <input type="text" id="nombre" name="nombre" class="usuario-input" placeholder="Nombre de usuario">
            
            <label for="apellido"></label>
            <input type="text" id="apellido" placeholder="Apellido" class="apellido-input" name="apellido" required>
        </div>
          
          <br>
          
        <div class="input-container-FP">
            <label for="fechaNacimiento"></label>
            <input type="date" id="fechaNacimiento" placeholder="Fecha de nacimiento" class="fecha-input" name="fechaNacimiento" required>

            <label for="pais"></label>
            <select id="pais" class="pais-input" name="pais" required>
                <option value="" disabled selected>Selecciona un país</option>
                <option value="Argentina">Andorra</option>
                <option value="Brasil">España</option>
                <option value="Chile">Portugal</option>
            </select>
        </div>

        <div class="additional-options">
            <label>
                <input type="checkbox" id="politicasPrivacidad" required>
                Estoy de acuerdo con los <a href="terminos.html" target="_blank">Terminos</a> y la <a href="politica.html" target="_blank">Política de privacidad</a>
            </label>
        </div>

        <br><button type="submit" name="register" class="login-button">Crear cuenta</button>

        <div class="back">
           <br> <label for="atras" class="back" onclick='atrasSatanas("usuario", "crear")'>Atras</label>
        </div>
      </form>

    </div>
  </div>

  <script src="scripts/script.js"></script>



</body>
</html>