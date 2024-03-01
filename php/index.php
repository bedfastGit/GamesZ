<?php
    require ("initdb.php");
    $titulo = "Home";

    $consulta = "select * from productos ;";
    $consulta_juego = "select * from productos where tags like '%juego%' && tags not like '%deals%' limit 6 ;";
    $consulta_hw = "select * from productos where tags like '%sobremesa%' || tags like '%consolas%' limit 6 ;";
    $consulta_deals = "select * from productos where tags like '%deals%' limit 3 ;";

    $save = $conn -> query($consulta);
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
            <div id="arrow-container"><div class="arrow"></div></div>
        </a>
    </div>
    <br>

    <!-- contenedor seccion juegos -->
    <div class="store-content contenidos">
        <?php foreach ($save_juego as $key => $item): ?>
            <div id="<?= $item["id"] ?>" class="content-div">
                <div class="content-img">
                    <a href="producto.php?id=<?= $item["id"] ?>"><img class="play-img" src="<?= '../pics/' . $item["img"] ?>">
                    </a>
                    <a href="producto.php?id=<?= $item["id"] ?>"><video autoplay="autoplay" muted class="vid-thumbnail">
                        <source src="<?= '../vids/' . $item["vid"] ?>" type="video/mp4" /></video>
                    </a>
                </div>
                <div class="content-desc">
                    <p class="item-title dimm-text"><?= $item["nombre"] ?></p>
                    <p class="item-price"><?= $item["precio"] ?></p>
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

    <!-- hw -->
    <div class="store-content contenidos">
        <?php foreach ($save_hw as $key => $item): ?>
            <div id="<?= $item["id"] ?>" class="content-div">
                <div class="content-img">
                    <a href="producto.php?id=<?= $item["id"] ?>"><img class="play-img no-vid" src="<?= '../pics/' . $item["img"] ?>">
                    </a>
                </div>
                <div class="content-desc">
                    <p class="item-title dimm-text"><?= $item["nombre"] ?></p>
                    <p class="item-price"><?= $item["precio"] ?></p>
                </div>
            </div>
        <?php endforeach; ?>
    </div>

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

    <!-- descuentos -->
    <div class="store-content contenidos">
        <?php foreach ($save_deals as $key => $item): ?>
            <div id="<?= $item["id"] ?>" class="content-div">
                <div class="content-img">
                    <a href="producto.php?id=<?= $item["id"] ?>"><img class="play-img" src="<?= '../pics/' . $item["img"] ?>">
                        <div class="game-discount"><p style="color: whitesmoke">-15%</p></div>
                    </a>
                    <a href="producto.php?id=<?= $item["id"] ?>"><video autoplay="autoplay" muted class="vid-thumbnail">
                        <source src="<?= '../vids/' . $item["vid"] ?>" type="video/mp4" /></video>
                    </a>
                </div>
                <div class="content-desc">
                    <p class="item-title dimm-text"><?= $item["nombre"] ?></p>
                    <div class="flexy-p">
                        <p class="dimm-text crossed-text"><?= $item["p_descuento"] ?></p>
                        <p class="item-price"><?= $item["precio"] ?></p>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>

<?php require_once("_end_foot.php")?>