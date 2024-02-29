<?php
    require ("initdb.php");
    $titulo = "Home";

    $consulta = "select * from productos ;";
    $save = $conn -> query($consulta);
?>

<?php require_once("_start_wnav.php")?>
    <!-- banner -->    
    <?php require("_banner.php")?>

    <!-- destacados -->
    <div class="store-content" >
        <a href="store.php" id="destacados">
            <h2>Destacados</h2>
            <div id="arrow-container"><div class="arrow"></div></div>
        </a>
    </div>
    <br>

    <!-- contenedor seccion juegos -->
    <div class="store-content contenidos">
        <?php foreach ($save as $key => $item): ?>
            <div id="<?= $item["id"] ?>" class="content-div">
                <div class="content-img">
                    <a href="producto.php?id=<?= $item["id"] ?>"><img class="play-img" src="<?= '../pics/' . $item["img"] ?>"></a>
                    <a href="producto.php?id=<?= $item["id"] ?>"><video autoplay="autoplay" muted class="vid-thumbnail">
                        <source src="<?= '../vids/' . $item["vid"] ?>" type="video/mp4" /></video>
                    </a>
                </div>
                <div class="content-desc">
                    <p class="item-title dimm-text"><?= $item["nombre"] ?></p>
                    <p class="item-price"><?= $item["precio"] ?>€</p>
                </div>
            </div>
        <?php endforeach; ?>
    </div>

    <!-- middle section -->
    <?php require("_middle_section.php")?>

    <!-- seccion consolas -->
    <div class="store-content" >
        <a href="store.php" id="destacados">
            <h2>Hardware</h2>
            <div id="arrow-container"><div class="arrow"></div></div>
        </a>
    </div>
    <br>

    <!-- banner2 -->    
    <?php require("_banner2.php")?>

    <!-- deals section -->
    <div class="store-content" >
        <a href="store.php" id="destacados">
            <h2>Ofertas</h2>
            <div id="arrow-container"><div class="arrow"></div></div>
        </a>
    </div>
    <br>

<?php require_once("_end_foot.php")?>