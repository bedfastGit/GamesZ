<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GamesZ - Sobre Nosotros</title>
    <link rel="stylesheet" href="style/contacto.css">
    <link rel="stylesheet" href="style/navbar-style.css">
    <link rel="stylesheet" href="style/store-style.css">
</head>
<body>
    <!-- Navbar -->

    <?php
        require('_start_wnav.php');
    ?>

    <br><br><br><br>

    <div class="site-header">
        <img src="HTMLCSS jesus/gamesz.png" alt="GamesZ Logo" class="logo2">
    </div>

    <section class="about_section">
    <h2>Sobre Nosotros</h2>
    <p>
        GamesZ comenzó su viaje en el mundo de los videojuegos como una pequeña tienda en línea, fundada por entusiastas de los juegos con una visión compartida. Desde sus humildes comienzos, GamesZ ha crecido hasta convertirse en un destino de referencia para los gamers de todo el mundo, ofreciendo una amplia selección de títulos digitales y físicos, accesorios de juego y experiencias interactivas. Con un compromiso inquebrantable con la comunidad y un ojo siempre puesto en la innovación y la accesibilidad, GamesZ se ha ganado el corazón de una base de fans leales y sigue expandiéndose para llevar la alegría de los videojuegos a todos los rincones del mundo.
    </p>
</section>

<div class="contact-section">
    <h2>Contacto</h2>
    <p>
        Para preguntas, soporte o colaboraciones, contáctanos a través de <a href="mailto:contacto@gamesz.com" style="color: #fff; text-decoration: underline;">contacto@gamesz.com</a>. Síguenos en nuestras redes sociales para estar al día con las últimas noticias y lanzamientos.
    </p>
</div>

<script src="scripts/contacto.js"></script>

<section class="testimonial-section">
    <h2>Testimonios</h2>
    <div class="testimonial-carousel">
        <div class="testimonial">
            <p>"GamesZ ha mejorado mi experiencia de juego. ¡Productos increíbles y servicio excepcional!"</p>
            <p class="testimonial-author">- Alex</p>
        </div>
        <div class="testimonial">
            <p>"Siempre encuentro los mejores juegos a precios asombrosos en GamesZ. ¡Altamente recomendado!"</p>
            <p class="testimonial-author">- Martina</p>
        </div>
    </div>
</section>

    <?php
        require('_end_foot.php');
    ?>
</body>
</html>