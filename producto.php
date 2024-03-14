<?php
  session_start();
  require("initdb.php");

  if (isset($_GET["id"])){
    $mi_producto = $_GET["id"];
  }
  else {
    echo "algo salio mal we";
  }

  $titulo = "producto";
  // Consulta para obtener los datos de producto desde la base de datos
  $sql = "SELECT * FROM productos WHERE id = '$mi_producto'"; 
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
      // output data of each row
      $row = $result->fetch_assoc();
      $nombre = $row["nombre"];
      $stock = $row["stock"];
      $precio = $row["precio"];
      $imagen = $row["img"];
      // Agrega más variables según necesites
  }   else {
    echo "0 resultados";
  }
  $conn->close();
?>
    
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title><?= $titulo ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/xicon" href="pics/gamesz.png"> 
    <link rel="stylesheet" type="text/css" href="style/navbar-style.css">
    <link rel="stylesheet" type="text/css" href="style/store-style.css">
    <link rel="stylesheet" type="text/css" href="style/producto.css">
    <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet">
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
                <li><a href="contacto.php">Contact</a></li>
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
     
    
    <div class="mifondo" style="background-image: url('<?= 'pics/' . $row["img"] ?>')"> </div>
    <div class="producto">
    <img src="<?= 'pics/' . $row["img"] ?>">
    <div class="info" id="info">
      <h1 id="nombre"><?php echo $nombre; ?></h1>
      <p class="stock">  Steam | <?php echo ($stock > 0) ? 'En stock ✅' : 'Agotado ❌'; ?> | Descarga digital ✅  </p>
      <br>

      <div class="menus" id="menus">

        <div class="menu1" id="menu1">
          <label for="plataforma">Plataforma:</label>    
          <select name="plataforma" id="plataforma">
            <option value="PC">PC</option>
            <option value="XBOX Series">XBOX Series</option>
            <option value="XBOX One">XBOX One</option>
          </select>
        </div>  

      </div>

      <p id="precio">Precio: <?php echo $precio; ?>€</p>
      <br>
      <button id="carrito">Añadir al carrito 🛒</button>
        
    </div>
  </div>


  <?php  
  require("initdb.php");
  if (isset($_GET["id"])){
    $info_producto = $_GET["id"];
  }
  else {
    echo "algo salio mal we";
  }
  $sql = "SELECT * FROM info_producto WHERE id = '$info_producto'"; 
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    // output data of each row
    $row2 = $result->fetch_assoc();
    $descripcion = $row2['descripcion'];
    $review = $row2['review'];
    $noticia = $row2['noticia'];
    $img_noticia = $row2['img_noticia'];
    $desc_noticia = $row2['desc_noticia'];
  }
  else {
    echo "No hay descripciones para este producto";
  }
  $conn->close();
  ?>

  <div class="descripcion" style="margin-bottom: 100px;">
  <div class="acercade">
    <h2 id="h2a" style="margin-bottom: 40px;">Descripción</h2>
    <p style="font-size: 18px;"><?php echo $descripcion; ?></p>
  </div>

  <div class="review">
    <h2 id="h2r" style="margin-bottom: 40px;">Instalación y reseñas</h2>
    <p style="font-size: 18px;"><?php echo $review; ?></p>
  </div>

  </div>


  <div class="trailer">

    <h1>Tráiler</h1>
    <a class="video-link" href="vids/<?php echo $row['vid']; ?>">
      <video class="video" controls>
        <source src="vids/<?php echo $row['vid']; ?>" type="video/mp4">
        Tu navegador no admite el elemento de video.
      </video>
    </a>
  
  </div>


<?php

require("initdb.php");

$id_producto = $_GET['id'];
$consulta_noticias = "SELECT * FROM noticias WHERE id ='$id_producto'";
$con_noticia = $conn->query($consulta_noticias);

$noticias = array();

if ($con_noticia->num_rows > 0) {
    
    while ($row3 = $con_noticia->fetch_assoc()) {
        $noticias[] = $row3;
    }
}
else{
    echo "<div class='noticias'>";
    echo "<h1>Noticias recientes de este juego</h1><br>";
    echo "<p>No se encontraron noticias para este producto.</p><br><br><br>";
    echo "</div>";
    exit; 
}

?>

<div class="noticias">
    <h1>Noticias recientes de este juego</h1>
    <?php foreach ($noticias as $noticia): ?>
    <div class="primera">
        <img src="<?= 'pics/' . $noticia["img_noticia"] ?>" class="n1" style="width: 400px;">
        <div class="texto1">
            <h4><?php echo $noticia['titulo']; ?></h4>
            <p style="padding-top: 30px;"><?php echo $noticia['contenido']; ?></p>
        </div>
    </div>
    <br><br><hr><br><br>
    <?php endforeach; ?>
</div>


    <!-- footer section -->
      <?php require ('_end_foot.php'); ?>

</body>
</html>