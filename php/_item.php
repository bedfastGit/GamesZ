<div id="<?= $item["id"] ?>" class="content-div">
    <div class="content-img">
        <a href="producto.php?id=<?= $item["id"] ?>"><img class="play-img" src="<?= '../pics/' . $item["img"] ?>">
            <?php if (str_contains($item["tags"], "deals")) {?><div class="game-discount"><p style="color: whitesmoke">-15%</p></div>
            <?php } ?>    
        </a>
        <?php if ($item["vid"] != NULL) { ?><a href="producto.php?id=<?= $item["id"] ?>"><video autoplay="autoplay" muted class="vid-thumbnail">
            <source src="<?= '../vids/' . $item["vid"] ?>" type="video/mp4" /></video>
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
