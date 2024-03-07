<?php
    require ("initdb.php");
    $titulo = "Home";

    // realizamos las consultas necesarias para cada seccion
    $consulta_juego = "select * from productos where tags like '%juego%' && tags not like '%deals%' order by orden limit 6 ;";
    $consulta_hw = "select * from productos where tags like '%sobremesa%' || tags like '%consolas%' limit 6 ;";
    $consulta_deals = "select * from productos where tags like '%deals%' order by orden limit 3 ;";

    //guardamos dichas consultas
    $save_juego = $conn -> query($consulta_juego);
    $save_hw = $conn -> query($consulta_hw);
    $save_deals = $conn -> query($consulta_deals);
?>

<?php require_once("_start_wnav.php")?>
    <!-- banner -->    
    <?php require("_banner.php")?>

    <!-- destacados -->
    <div class="store-content" >
        <a href="store.php" id="destacados">
            <h2>Destacados</h2>
            <div class="arrow-container"><div class="arrow"></div></div>
        </a>
    </div>
    <br>

    <!-- contenedor seccion juegos -->
    <div class="store-content contenidos">
        <?php foreach ($save_juego as $key => $item): ?>
            <?php require("_item.php") ?>
        <?php endforeach; ?>
    </div>

    <!-- middle section -->
    <?php require("_middle_section.php")?><br><br>

    <!-- seccion consolas -->
    <div class="store-content" >
        <a href="store.php" id="destacados">
            <h2>Hardware</h2>
            <div class="arrow-container"><div class="arrow"></div></div>
        </a>
    </div>
    <br>

    <!-- hw -->
    <div class="store-content contenidos">
        <?php foreach ($save_hw as $key => $item): ?>
            <?php require("_item.php") ?>
        <?php endforeach; ?>
    </div>

    <!-- banner2 -->    
    <?php require("_banner2.php")?>

    <!-- deals section -->
    <div class="store-content" >
        <a href="store.php" id="destacados">
            <h2>Ofertas</h2>
            <div class="arrow-container"><div class="arrow"></div></div>
        </a>
    </div>
    <br>

    <!-- descuentos -->
    <div class="store-content contenidos">
        <?php foreach ($save_deals as $key => $item): ?>
            <?php require("_item.php") ?>
        <?php endforeach; ?>
    </div>
    <br><br>

<?php require_once("_end_foot.php")?>