-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Jeu 30 Janvier 2020 à 11:13
-- Version du serveur :  5.7.29-0ubuntu0.18.04.1
-- Version de PHP :  7.2.24-0ubuntu0.18.04.2
​
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";
​
​
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
​
--
-- Base de données :  `wild-circus`
--
​
-- --------------------------------------------------------
​
--
-- Structure de la table `act`
--
​
CREATE TABLE `act` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `picture` varchar(250) NOT NULL,
  `description` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
​
--
-- Contenu de la table `act`
--
​
INSERT INTO `act` (`id`, `name`, `picture`, `description`) VALUES
(1, 'Illusioniste', '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida, turpis eget mattis ultrices, enim urna congue ex, non eleifend turpis risus pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor dui, fringilla eu varius quis, blandit ac libero. Mauris lectus urna, malesuada varius quam ac, porttitor pellentesque lacus. Vestibulum quis tortor sed augue finibus tempus vitae volutpat neque. In hac habitasse platea dictumst. Mauris aliquet bibendum lacus, ac lacinia mauris imperdiet eget. Duis quam ante, scelerisque ac dolor in, lobortis ullamcorper neque. Nulla ornare ligula nulla, nec auctor massa tincidunt eu. In tincidunt rhoncus elit, sed efficitur nisl blandit sed.'),
(2, 'Clown', '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida, turpis eget mattis ultrices, enim urna congue ex, non eleifend turpis risus pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor dui, fringilla eu varius quis, blandit ac libero. Mauris lectus urna, malesuada varius quam ac, porttitor pellentesque lacus. Vestibulum quis tortor sed augue finibus tempus vitae volutpat neque. In hac habitasse platea dictumst. Mauris aliquet bibendum lacus, ac lacinia mauris imperdiet eget. Duis quam ante, scelerisque ac dolor in, lobortis ullamcorper neque. Nulla ornare ligula nulla, nec auctor massa tincidunt eu. In tincidunt rhoncus elit, sed efficitur nisl blandit sed.'),
(3, 'Robot', '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida, turpis eget mattis ultrices, enim urna congue ex, non eleifend turpis risus pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor dui, fringilla eu varius quis, blandit ac libero. Mauris lectus urna, malesuada varius quam ac, porttitor pellentesque lacus. Vestibulum quis tortor sed augue finibus tempus vitae volutpat neque. In hac habitasse platea dictumst. Mauris aliquet bibendum lacus, ac lacinia mauris imperdiet eget. Duis quam ante, scelerisque ac dolor in, lobortis ullamcorper neque. Nulla ornare ligula nulla, nec auctor massa tincidunt eu. In tincidunt rhoncus elit, sed efficitur nisl blandit sed.'),
(4, 'Trapéziste', '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida, turpis eget mattis ultrices, enim urna congue ex, non eleifend turpis risus pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor dui, fringilla eu varius quis, blandit ac libero. Mauris lectus urna, malesuada varius quam ac, porttitor pellentesque lacus. Vestibulum quis tortor sed augue finibus tempus vitae volutpat neque. In hac habitasse platea dictumst. Mauris aliquet bibendum lacus, ac lacinia mauris imperdiet eget. Duis quam ante, scelerisque ac dolor in, lobortis ullamcorper neque. Nulla ornare ligula nulla, nec auctor massa tincidunt eu. In tincidunt rhoncus elit, sed efficitur nisl blandit sed.'),
(5, 'Funambule', '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida, turpis eget mattis ultrices, enim urna congue ex, non eleifend turpis risus pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor dui, fringilla eu varius quis, blandit ac libero. Mauris lectus urna, malesuada varius quam ac, porttitor pellentesque lacus. Vestibulum quis tortor sed augue finibus tempus vitae volutpat neque. In hac habitasse platea dictumst. Mauris aliquet bibendum lacus, ac lacinia mauris imperdiet eget. Duis quam ante, scelerisque ac dolor in, lobortis ullamcorper neque. Nulla ornare ligula nulla, nec auctor massa tincidunt eu. In tincidunt rhoncus elit, sed efficitur nisl blandit sed.');
​
-- --------------------------------------------------------
​
--
-- Structure de la table `location`
--
​
CREATE TABLE `location` (
  `id` int(11) NOT NULL,
  `city` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
​
--
-- Contenu de la table `location`
--
​
INSERT INTO `location` (`id`, `city`) VALUES
(5, 'Cuba'),
(2, 'Lisbon'),
(4, 'Nantes'),
(1, 'Paris'),
(3, 'Tokyo');
​
-- --------------------------------------------------------
​
--
-- Structure de la table `place`
--
​
CREATE TABLE `place` (
  `id` int(11) NOT NULL,
  `number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
​
--
-- Contenu de la table `place`
--
​
INSERT INTO `place` (`id`, `number`) VALUES
(1, 50),
(2, 100),
(3, 150),
(4, 200),
(5, 250),
(6, 300),
(7, 350),
(8, 400),
(9, 450),
(10, 500);
​
-- --------------------------------------------------------
​
--
-- Structure de la table `representation`
--
​
CREATE TABLE `representation` (
  `id` int(11) NOT NULL,
  `tour_name` varchar(250) NOT NULL,
  `place_number` int(11) NOT NULL,
  `location_city` varchar(250) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
​
--
-- Contenu de la table `representation`
--
​
INSERT INTO `representation` (`id`, `tour_name`, `place_number`, `location_city`, `date`) VALUES
(1, 'Les 5 doigts de la main', 150, 'Nantes', '2020-01-31 20:00:00'),
(2, 'Les étoiles mongoles', 250, 'Lisbon', '2020-03-07 20:00:00');
​
-- --------------------------------------------------------
​
--
-- Structure de la table `representation_act`
--
​
CREATE TABLE `representation_act` (
  `id` int(11) NOT NULL,
  `represention_id` int(11) NOT NULL,
  `act_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
​
--
-- Contenu de la table `representation_act`
--
​
INSERT INTO `representation_act` (`id`, `represention_id`, `act_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 4),
(4, 2, 2),
(5, 2, 3),
(6, 2, 5);
​
-- --------------------------------------------------------
​
--
-- Structure de la table `tarification`
--
​
CREATE TABLE `tarification` (
  `id` int(11) NOT NULL,
  `category` varchar(250) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
​
--
-- Contenu de la table `tarification`
--
​
INSERT INTO `tarification` (`id`, `category`, `price`) VALUES
(1, 'kid', 5),
(2, 'adult', 10),
(3, 'senior', 7);
​
-- --------------------------------------------------------
​
--
-- Structure de la table `tour`
--
​
CREATE TABLE `tour` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `date_start` date NOT NULL,
  `date_end` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
​
--
-- Contenu de la table `tour`
--
​
INSERT INTO `tour` (`id`, `name`, `date_start`, `date_end`) VALUES
(1, 'Les étoiles mongoles', '2020-01-31', '2020-02-28'),
(2, 'Les 5 doigts de la main', '2020-02-28', '2020-03-31');
​
--
-- Index pour les tables exportées
--
​
--
-- Index pour la table `act`
--
ALTER TABLE `act`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);
​
--
-- Index pour la table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`),
  ADD KEY `city` (`city`);
​
--
-- Index pour la table `place`
--
ALTER TABLE `place`
  ADD PRIMARY KEY (`id`),
  ADD KEY `number` (`number`);
​
--
-- Index pour la table `representation`
--
ALTER TABLE `representation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tour_name` (`tour_name`,`place_number`,`location_city`),
  ADD KEY `location_city` (`location_city`),
  ADD KEY `place_number` (`place_number`),
  ADD KEY `id` (`id`);
​
--
-- Index pour la table `representation_act`
--
ALTER TABLE `representation_act`
  ADD PRIMARY KEY (`id`),
  ADD KEY `represention_id` (`represention_id`,`act_id`),
  ADD KEY `act_id` (`act_id`);
​
--
-- Index pour la table `tarification`
--
ALTER TABLE `tarification`
  ADD PRIMARY KEY (`id`);
​
--
-- Index pour la table `tour`
--
ALTER TABLE `tour`
  ADD PRIMARY KEY (`id`),
  ADD KEY `name` (`name`),
  ADD KEY `name_2` (`name`);
​
--
-- AUTO_INCREMENT pour les tables exportées
--
​
--
-- AUTO_INCREMENT pour la table `act`
--
ALTER TABLE `act`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `location`
--
ALTER TABLE `location`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `place`
--
ALTER TABLE `place`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pour la table `representation`
--
ALTER TABLE `representation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `representation_act`
--
ALTER TABLE `representation_act`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `tarification`
--
ALTER TABLE `tarification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `tour`
--
ALTER TABLE `tour`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Contraintes pour les tables exportées
--
​
--
-- Contraintes pour la table `representation`
--
ALTER TABLE `representation`
  ADD CONSTRAINT `representation_ibfk_1` FOREIGN KEY (`tour_name`) REFERENCES `tour` (`name`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `representation_ibfk_2` FOREIGN KEY (`location_city`) REFERENCES `location` (`city`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `representation_ibfk_3` FOREIGN KEY (`place_number`) REFERENCES `place` (`number`) ON DELETE CASCADE ON UPDATE CASCADE;
​
--
-- Contraintes pour la table `representation_act`
--
ALTER TABLE `representation_act`
  ADD CONSTRAINT `representation_act_ibfk_1` FOREIGN KEY (`represention_id`) REFERENCES `representation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `representation_act_ibfk_2` FOREIGN KEY (`act_id`) REFERENCES `act` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
​
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;