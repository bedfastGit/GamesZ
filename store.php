<?php
    $titulo = "Store";
    require ("initdb.php");
    $my_limit = 9;

    if (isset($_GET["id"])){
        $my_offset = $_GET["id"] * $my_limit;
    }
    else{
        $my_offset = 0;
    }

    // hacemos una consulta con los primeros 15 items para mostrar en la pagina
    $consulta = "select * from productos order by orden limit $my_limit offset $my_offset;";
    $consulta_all = "select * from productos;";
    // guardamos la consulta
    $save = $conn -> query($consulta);
    $save_all = $conn -> query($consulta_all);

    if ($save_all){
        $n_productos = $save_all -> num_rows;
    } 
    else{
        // error al ejecutar la consulta
        echo "error de ejecucion: " . $conn->error;
    }

    if(($n_productos % $my_limit) == 0){
        $n_pages = $n_productos / $my_limit;
    }
    else{
        $n_pages = floor($n_productos / $my_limit) + 1;
    }
?>

<?php require_once("_start_wnav.php")?>

    <!-- filter section -->
    <?php require("_filter.php")?>

    <!-- destacados -->
    <div class="store-content" >
        <div id="destacados">
            <h2>Tienda</h2>
            <div class="arrow-container"><div class="arrow"></div></div>
    </div>
    </div>
    <br>

    <!-- store content -->
    <div class="store-content contenidos">
        <?php foreach ($save as $key => $item): ?>
            <?php require("_item.php") ?>
        <?php endforeach; ?>
    </div>

    <div class="store-content page-list">
        <?php for ($x=1; $x<=$n_pages; $x++){
            require("_page.php");
        }?>
    </div>

    <!-- middle section -->
    <?php require("_middle_section.php")?>

<?php require_once("_end_foot.php")?>