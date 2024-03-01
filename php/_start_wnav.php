<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title><?= $titulo ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/xicon" href="../pics/gamesz.png">
    <link rel="stylesheet" type="text/css" href="../style/navbar-style.css">
    <link rel="stylesheet" type="text/css" href="../style/store-style.css">
    <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet">
    <script src="../scripts/store-script.js" defer></script>
    <script src="../scripts/filter.js" defer></script>
</head>
<body>
    <!-- Navbar -->
    <header class="header">
        <!-- brand logo -->
        <a class="navbar-brand" href="index.php"><img src="../pics/gamesz.png"></a>
        <!-- pages list -->
        <div class="menu-list-div">
            <ul class="menu-list">
                <li><a href="index.php">Home</a></li>
                <li><a href="store.php">Games</a></li>
                <li><a href="contacto.php">Contact</a></li>
                <li>
                    <a href="user.php">
                        <div id="search-div"><img id="search-icon" src="../pics/user-icon.png"></div>
                    </a>
                </li>
            </ul>
        </div>
        <!-- user img -->
        <!--<div id="user-div"><a class="user-icon" href="user.html"><img src="pics/user-icon.png"></a></div>-->
        <div id="user-div" style="visibility: hidden"></div>
    </header>
    <main>