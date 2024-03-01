<?php
    $titulo = "Store";

    require ("initdb.php");

    $consulta_juego = "select * from productos where tags like '%juego%' && tags not like '%deals%';";
    $consulta_hw = "select * from productos where tags like '%sobremesa%' || tags like '%consolas%';";
    $consulta_deals = "select * from productos where tags like '%deals%';";

    $save_juego = $conn -> query($consulta_juego);
    $save_hw = $conn -> query($consulta_hw);
    $save_deals = $conn -> query($consulta_deals);
?>

<?php require_once("_start_wnav.php")?>

    <!-- filter section -->
    <?php require("_filter.php")?>

    <!-- store content -->
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

<?php require_once("_end_foot.php")?>