<?php
    $price = $item["precio"];
    $p_desc = $item["p_descuento"];

    // si da 0 se lia xd
    $perc = round(($p_desc != 0) ? (100 - (($price * 100) / $p_desc)) : 0);
    // objeto, stock, precio, orden, nombre, nuevo_orden, tags;
?>

<div id="<?= $item["id"] ?>" class="content-div" data-stock="<?= $item["stock"] ?>" data-precio="<?= $item["precio"] ?>" data-orden="<?= $item["orden"] ?>" data-nombre="<?= $item["nombre"] ?>"  data-tags="<?= $item["tags"] ?>">
    <div class="content-img">
        <a href="producto.php?id=<?= $item["id"] ?>"><img class="play-img" src="<?= 'pics/' . $item["img"] ?>">
            <?php if (str_contains($item["tags"], "deals")) {?><div class="game-discount"><p style="color: whitesmoke">-<?= $perc ?>%</p></div>
            <?php } ?>    
        </a>
        <?php if ($item["vid"] != NULL) { ?><a href="producto.php?id=<?= $item["id"] ?>"><video autoplay="autoplay" muted class="vid-thumbnail">
            <source src="<?= 'vids/' . $item["vid"] ?>" type="video/mp4" /></video>
        </a><?php } ?>
    </div>
    <div class="content-desc">
        <p class="item-title dimm-text"><?= $item["nombre"] ?></p>
        <?php if (str_contains($item["tags"], "deals")) {?>
            <div class="flexy-p">
                <p class="dimm-text crossed-text"><?= $item["p_descuento"] ?></p>
                <p class="item-price"><?= $item["precio"] ?></p>
            </div>
        <?php } else{ ?>
            <p class="item-price"><?= $item["precio"] ?></p>
        <?php } ?>
    </div>
</div>
