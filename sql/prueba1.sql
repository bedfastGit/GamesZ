-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3308
-- Tiempo de generación: 07-03-2024 a las 11:49:02
-- Versión del servidor: 5.7.24
-- Versión de PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba1`
--
CREATE DATABASE IF NOT EXISTS `prueba1` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `prueba1`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` varchar(20) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `stock` tinyint(1) NOT NULL,
  `precio` decimal(7,2) NOT NULL,
  `p_descuento` decimal(7,2) NOT NULL,
  `orden` int(3) NOT NULL,
  `new_orden` int(3) NOT NULL,
  `tags` varchar(200) NOT NULL,
  `img` varchar(20) NOT NULL,
  `vid` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `stock`, `precio`, `p_descuento`, `orden`, `new_orden`, `tags`, `img`, `vid`) VALUES
('alan2', 'Alan Wake II', 1, '45.95', '0.00', 2, 0, 'content-div playstation pc juegos survival-horror', 'alan.png', 'alan.mp4'),
('bf4', 'Battlefield 4', 0, '6.77', '40.55', 21, 0, 'content-div deals juegos pc xbox playstation shooter cooperativo', 'battlefield4.png', NULL),
('bloodborne', 'Bloodborne', 1, '23.77', '29.71', 7, 0, 'content-div playstation deals pc juegos souls-like cooperativo aventura', 'bloodborne.png', 'bloodborne.mp4'),
('bord3', 'Borderlands 3', 0, '44.65', '59.99', 16, 0, 'content-div juegos playstation xbox pc aventura shooter cooperativo deals', 'borderlands3.png', NULL),
('deathstranding2', 'Death Stranding II', 0, '75.67', '0.00', 28, 0, 'content-div juegos playstation pc aventura survival-horror', 'deathstranding2.png', NULL),
('demons', 'Demon’s Souls: Remake', 1, '80.00', '0.00', 29, 0, 'content-div juegos playstation pc souls-like cooperativo aventura', 'demonssouls.png', NULL),
('ds1', 'Dark Souls', 1, '29.33', '0.00', 5, 0, 'content-div playstation xbox pc nintendo juegos cooperativo souls-like aventura', 'darksouls.png', 'darksouls.mp4'),
('elden', 'Elden Ring', 0, '69.95', '0.00', 0, 0, 'content-div playstation xbox pc juegos souls-like aventura cooperativo', 'elden.png', 'elden.mp4'),
('fortnite', 'Fortnite', 1, '0.00', '0.00', 22, 0, 'content-div deals juegos xbox pc playstation nintendo shooter aventura cooperativo', 'fortnite.png', NULL),
('halo3', 'Halo 3', 0, '15.16', '17.43', 6, 0, 'content-div deals xbox pc juegos shooter cooperativo', 'halo3.jpg', 'halo3.mp4'),
('hknight', 'Hollow Knight', 1, '10.23', '0.00', 19, 0, 'content-div juegos pc playstation xbox nintendo aventura souls-like', 'hollowknight.png', NULL),
('inferno', 'Desktop PC: Inferno', 1, '1660.00', '0.00', 24, 0, 'content-div sobremesa pc', 'inferno.png', NULL),
('ittakestwo', 'It takes two', 1, '18.99', '20.89', 8, 0, 'content-div nintendo pc xbox juegos cooperativo aventura deals', 'ittakestwo.png', 'ittakestwo.mp4'),
('liesp', 'Lies of P', 0, '44.56', '0.00', 20, 0, 'content-div juegos souls-like pc playstation xbox aventura', 'liesofp.png', NULL),
('nier', 'NieR:Automata', 1, '32.43', '0.00', 3, 0, 'content-div playstation xbox nintendo pc juegos aventura', 'nier.png', 'nier.mp4'),
('pc_blackice', 'Desktop PC: Black Ice', 0, '2450.98', '0.00', 14, 0, 'content-div pc sobremesa', 'blackice.png', NULL),
('ps4', 'PochoStation 4: 500 GB', 1, '17.89', '499.95', 25, 0, 'content-div deals consolas playstation', 'ps4.png', NULL),
('ps5', 'PlayStation 5', 0, '499.95', '0.00', 9, 0, 'content-div playstation consolas', 'ps5.png', NULL),
('re4', 'Resident Evil 4', 1, '43.25', '0.00', 4, 0, 'content-div playstation xbox pc juegos survival-horror aventura', 're4.jpg', 're4.mp4'),
('sh2', 'Silent Hill 2: Remake', 1, '50.52', '0.00', 1, 0, 'content-div playstation pc juegos survival-horror', 'sh2remake.png', 'sh2remake.mp4'),
('smite', 'Smite', 0, '0.00', '0.00', 23, 0, 'content-div juegos playstation pc cooperativo', 'smite.png', NULL),
('specops', 'Spec Ops: The Line', 1, '7.55', '0.00', 18, 0, 'content-div juegos pc xbox shooter aventura', 'specops.png', NULL),
('steamdeck', 'SteamDeck: 500GB', 1, '499.76', '0.00', 26, 0, 'content-div consolas pc handheld', 'steamdeck.png', NULL),
('steamdeckoled', 'SteamDeck OLED: 500GB', 1, '480.00', '500.00', 27, 0, 'content-div deals consolas pc handheld', 'steamdeckoled.png', NULL),
('switch_og', 'Nintendo Switch', 0, '279.69', '0.00', 12, 0, 'content-div nintendo consolas handheld', 'switch.png', NULL),
('switch_oled', 'Nintendo Switch Oled', 1, '350.45', '0.00', 13, 0, 'content-div nintendo consolas handheld', 'switcholed.png', NULL),
('tlou2', 'The Last of Us: Part II', 1, '69.99', '0.00', 15, 0, 'content-div juegos playstation pc aventura', 'tlou2.png', NULL),
('vamp', 'Vampire Survivors', 1, '9.89', '15.00', 17, 0, 'content-div deals juegos pc aventura', 'vampiresurvivor.png', 'chupo.mp4'),
('xbox_s', 'Xbox Series S', 1, '267.34', '0.00', 11, 0, 'content-div xbox consolas', 'seriess.png', NULL),
('xbox_x', 'Xbox Series X', 1, '480.66', '0.00', 10, 0, 'content-div xbox consolas', 'seriesx.png', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(8) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `pass`) VALUES
(1, 'lejo', '1234'),
(2, 'Pel', 'lejokahoot');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

CREATE USER 'alejandro'@'%'  IDENTIFIED BY "1234";
GRANT ALL  PRIVILEGES ON Prueba1.* TO "alejandro"@"%";
