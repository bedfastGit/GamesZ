<?php
require('initdb.php');
require("start_login.php");
$name = $_SESSION["username"];
if (!isset($_SESSION["username"])){
  $name = "lejo";
}
$consulta = "select * from usuarios where nombre = '$name';";
$saveuser = $conn -> query($consulta);
?>


<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Perfil de Usuario - GamesZ</title>
    <link rel="stylesheet" href="style/control.css">
    
    <link rel="stylesheet" href="style/navbar-style.css">
</head>
<body>
    <!-- Navbar -->
        <header class="header">
            <!-- brand logo -->
            <a class="navbar-brand" href="index.php"><img src="pics/gamesz.png"></a>
            <!-- pages list -->
            <div class="menu-list-div">
                <ul class="menu-list">
                    <li><a href="index.php">Home</a></li>
                    <li><a href="store.php">Games</a></li>
                    <li><a href="contacto.html">Contact</a></li>
                    <li>
                        <a href="user.php">
                            <div id="search-div"><img id="search-icon" src="pics/user-icon.png"></div>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- user img -->
            <!--<div id="user-div"><a class="user-icon" href="user.html"><img src="pics/user-icon.png"></a></div>-->
            <div id="user-div" style="visibility: hidden"></div>
        </header>
<br><br><br><br>
  <div class="fakeheader">
    <h1>GamesZ</h1>
  </div>

  <div class="ancho">
    <div class="user-info">
      <div class="change-avatar" onclick="openFileInput()">
        <img src="avatar.jpg" alt="">
        <div class="avatar-overlay">
          <p>Cambiar Avatar</p>
          <input type="file" id="fileInput" accept="image/*" onchange="changeAvatar(this)">
        </div>
      </div>
      <div class="user-details">
        <h2><?php foreach ($saveuser as $key => $usuario): ?><?= $usuario["nombre"] ?><?php endforeach; ?></h2>
        <p>Correo electrónico: usuario@usuario.com</p>
        <p>Fecha de registro: 15/02/2024</p>
      </div>
    </div>

    <div class="pago">
      <h2>Métodos de Pago</h2>
      <div class="payment-methods">
        <div class="payment-method">
          <img src="pics/tarjeta.png" alt="Tarjeta de Crédito">
          <h3>Tarjeta de Crédito</h3>
          <p>**** **** **** 1234</p>
        </div>
        <div class="payment-method">
          <img src="pics/paypal.png" alt="PayPal">
          <h3>PayPal</h3>
          <p>paypal@usuario.com</p>
        </div>
     
      </div>
    </div>

    <div class="wishlist">
      <h2>Lista de Deseos</h2>
      <div class="wishlist-item">
        <h3>Alan Wake II</h3>
        <p>Plataforma: PC</p>
        <p>Precio: 45,56€</p>
      </div>
      <div class="wishlist-item">
        <h3>Halo 3</h3>
        <p>Plataforma: Xbox</p>
        <p>Precio: 58,69€</p>
      </div>

    </div>

    <div class="achievements">
      <h2>Logros</h2>
      <div class="achievement">
        <h3>Primer Juego Comprado</h3>
        <p>Felicidades, has realizado tu primera compra.</p>
          <img src="pics/logro1.png" alt="Logro primer juego" class="logro1">
      </div>
      <div class="achievement">
        <h3>Explorador de Plataformas</h3>
        <p>Has jugado en más de tres plataformas diferentes.</p>
          <img src="pics/logro2.png" alt="Has jugado en tres plataformas" class="logro2">
      </div>
     
    </div>

    <div>
      <h2>Opciones de Perfil</h2>
      <div class="profile-options">
        <div class="option-card">
          <h3>Cambiar Nombre de Usuario</h3>
          <p><input type="text" class="ChangeN" id="newUsername" placeholder="Nuevo nombre de usuario"></p>
          <button class="botonN" onclick="changeUsername()">Guardar Cambios</button>
        </div>
        <div class="option-card">
          <h3>Historial de Compras</h3>
          <p>Consulta tus compras anteriores.</p>
        </div>
        <div class="option-card">
          <h3>Configuración de Cuenta</h3>
          <p>Ajusta tus preferencias de cuenta.</p>
        </div>
    
      </div>
    </div>
      </div>

  <script src="scripts/script.js"></script>
</body>
</html>
