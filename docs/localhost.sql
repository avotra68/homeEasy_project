-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 14, 2017 at 07:35 PM
-- Server version: 5.7.18-0ubuntu0.17.04.1
-- PHP Version: 7.0.18-0ubuntu0.17.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `easyhome`
--
DROP DATABASE IF EXISTS `easyhome`;
CREATE DATABASE IF NOT EXISTS `easyhome` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `easyhome`;

-- --------------------------------------------------------

--
-- Table structure for table `depenses`
--
-- Creation: Jul 14, 2017 at 06:12 PM
-- Last update: Jul 14, 2017 at 07:29 PM
--

DROP TABLE IF EXISTS `depenses`;
CREATE TABLE IF NOT EXISTS `depenses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categories` varchar(100) NOT NULL,
  `date_depense` datetime NOT NULL,
  `montant` double NOT NULL,
  `annee` int(11) DEFAULT NULL,
  `mois` int(11) DEFAULT NULL,
  `idUser` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

--
-- RELATIONS FOR TABLE `depenses`:
--

--
-- Dumping data for table `depenses`
--

INSERT INTO `depenses` (`id`, `categories`, `date_depense`, `montant`, `annee`, `mois`, `idUser`) VALUES
(20, 'Gaz', '2017-07-14 00:00:00', 80, 2017, 7, 75),
(21, 'Electricité', '2017-07-17 00:00:00', 45, 2017, 7, 75),
(22, 'Gaz', '2017-06-19 00:00:00', 75, 2017, 6, 75),
(23, 'Assurances', '2017-07-25 00:00:00', 435, 2017, 7, 75),
(24, 'Frais de garde', '2017-07-13 00:00:00', 1200, 2017, 7, 76),
(26, 'Charges', '2017-07-12 00:00:00', 400, 2017, 7, 76),
(27, 'Electricité', '2017-07-14 00:00:00', 345, 2017, 7, 76),
(28, 'Electricité', '2017-07-12 00:00:00', 890, 2017, 7, 76),
(29, 'Frais de garde', '2017-06-12 00:00:00', 1234, 2017, 6, 76);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--
-- Creation: Jul 11, 2017 at 10:45 AM
-- Last update: Jul 14, 2017 at 10:14 AM
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `adresse_mail` varchar(60) NOT NULL,
  `motif_message` varchar(100) NOT NULL,
  `message` longtext NOT NULL,
  `date_message` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COMMENT='message via users et/ou personnes non inscrites';

--
-- RELATIONS FOR TABLE `messages`:
--

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `adresse_mail`, `motif_message`, `message`, `date_message`) VALUES
(2, 'lova@lova.com', 'test', 'test lova', '2017-07-10 22:24:19'),
(3, 'toto@ooo.com', 'test toto', 'tototototototo', '2017-07-10 22:31:52'),
(6, 'avofe@yahoo.fr', 'aaaaaaaaaaaaaa', 'bbbbbbbbbbbbbbbbbbbbbbbb', '2017-07-11 11:40:51'),
(7, 'avofen', 'aaaaaaaaaaaaa', '', '2017-07-11 11:44:44'),
(8, 'avofe@yahoo.fr', '', '', '2017-07-11 11:45:39'),
(9, 'avofe@yahoo.fr', '', '', '2017-07-11 11:45:49'),
(10, 'avofe@yahoo.fr', 'METY', 'HAhahahhaH', '2017-07-12 14:26:27'),
(11, 'avofe@yahoo.fr', 'METY FONA', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', '2017-07-14 09:48:07'),
(12, 'avo@yahoo.fr', 'metymety', 'xdxd', '2017-07-14 10:14:51');

-- --------------------------------------------------------

--
-- Table structure for table `revenus`
--
-- Creation: Jul 14, 2017 at 06:13 PM
-- Last update: Jul 14, 2017 at 07:28 PM
--

DROP TABLE IF EXISTS `revenus`;
CREATE TABLE IF NOT EXISTS `revenus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categories` varchar(100) NOT NULL,
  `date` datetime NOT NULL,
  `montant` int(11) NOT NULL,
  `annee` int(11) DEFAULT NULL,
  `mois` int(11) DEFAULT NULL,
  `idUser` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

--
-- RELATIONS FOR TABLE `revenus`:
--

--
-- Dumping data for table `revenus`
--

INSERT INTO `revenus` (`id`, `categories`, `date`, `montant`, `annee`, `mois`, `idUser`) VALUES
(24, 'allocation', '2017-07-14 00:00:00', 600, 2017, 7, 75),
(25, 'votreSalaire', '2017-07-25 00:00:00', 1200, 2017, 7, 75),
(26, 'allocation', '2017-07-12 00:00:00', 560, 2017, 7, 75),
(27, 'allocation', '2017-07-18 00:00:00', 200, 2017, 7, 76),
(28, 'pension', '2017-07-10 00:00:00', 350, 2017, 7, 76),
(29, 'votreSalaire', '2017-07-25 00:00:00', 900, 2017, 7, 76);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--
-- Creation: Jul 11, 2017 at 10:45 AM
-- Last update: Jul 14, 2017 at 06:44 PM
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `ville` varchar(60) DEFAULT NULL,
  `email` varchar(60) NOT NULL,
  `motDePasse` varchar(12) NOT NULL,
  `date_inscription` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8;

--
-- RELATIONS FOR TABLE `users`:
--

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nom`, `prenom`, `ville`, `email`, `motDePasse`, `date_inscription`) VALUES
(16, 'RAKOTOARISOA', 'Avotra', 'avo_r@yahoo.fr', 'SARCELLES', 'aaaaaa', '2017-07-11 11:52:15'),
(17, 'RAIVO', 'Lala', 'iza@yahoo.fr', 'MAHAZENGY', 'AAAAAA', '2017-07-11 12:13:00'),
(18, 'RE', 'RE', 'avo_r@yahoo.fr', 'Isaha', 'aaaaaa', '2017-07-11 14:06:41'),
(19, 'Martin', 'Jean', 'jean@fg.fr', 'aaaaaaaaaaaaa', 'aaaaaa', '2017-07-11 14:22:05'),
(20, 'RAZAFY', 'Nirina', 'avofeno@yahoo.fr', 'TANA', 'aaaaaa', '2017-07-12 14:05:12'),
(21, 'RAZAFY', 'Nirina', 'avo_r@yahoo.fr', 'TANA', 'aaaaaa', '2017-07-12 14:07:00'),
(22, 'RAZAFY', 'Avotra', 'avo_r@yahoo.fr', 'TAZA', 'aaaaaa', '2017-07-12 14:07:54'),
(23, 'RAZAFY', 'Nirina', 'avo_r@yahoo.fr', 'RR', 'aaaaaa', '2017-07-12 14:11:03'),
(24, 'RAZAFY', 'Nirina', 'avo_r@yahoo.fr', 'RR', 'aaaaaa', '2017-07-12 14:13:45'),
(25, 'RAZAFY', 'Nirina', 'avo_r@yahoo.fr', 'TANA', 'aaaaaa', '2017-07-12 14:15:32'),
(26, 'RAZAFY', 'Avotra', 'esther@yahoo.fr', 'ZAZA', 'aaaaaa', '2017-07-12 14:27:53'),
(27, 'hasina ', 'feno', 'FTSOA', 'rkt@yahoo.fr', 'aaaaaa', '2017-07-12 14:33:45'),
(28, 'toto', 'TOTO', 'TANA', 'avo_r@yahoo.fr', 'aaaaaa', '2017-07-12 14:36:07'),
(29, 'Avotra', 'Avotra', 'ad@yah.fr', 'avo_r@yahoo.fr', 'aaaaaa', '2017-07-12 14:49:09'),
(30, 'Avotra', 'Avotra', 'ZAZA', 'avo_r@yahoo.fr', 'aaaaaa', '2017-07-12 14:53:06'),
(31, 'RIRI', 'RIRI', 'ZAZA', 'avo_r@yahoo.fr', 'aaaaaa', '2017-07-12 14:58:46'),
(32, 'zozo', 'zeze', 'TANA', 'avo_r@yahoo.fr', 'AAAAAA', '2017-07-12 15:03:08'),
(33, 'Avotra', 'Avotra', 'TANA', 'avofeno@yahoo.fr', 'aaaaaa', '2017-07-12 15:08:48'),
(34, 'RAKOTOARISOA', 'Avotra', 'TANA', 'avo_r@yahoo.fr', 'aaaaaa', '2017-07-12 15:10:30'),
(35, 'RAZAFY', 'RA', 'ZAZA', 'avo_r@yahoo.fr', 'aaaaaa', '2017-07-12 15:36:42'),
(37, 'Avotra', 'Avotra', 'Avotra', 'avofeno@yahoo.fr', 'aaaaaa', '2017-07-12 15:53:46'),
(38, 'AAA', 'AAA', 'AAA', 'avo_r@yahoo.fr', 'aaaaaa', '2017-07-12 16:12:40'),
(39, 'Avotra', 'Avotra', 'AAAAA', 'avo_r@yahoo.fr', 'aaaaaa', '2017-07-12 16:24:34'),
(40, 'adala', 'node', 'VERY', 'avo_r@yahoo.fr', 'aaaaaa', '2017-07-12 16:29:00'),
(42, 'MARIE', 'Esther', 'FTSOA', 'mesther@yahoo.fr', 'zzzzzz', '2017-07-14 09:26:38'),
(43, 'MARIE', 'Esther', 'FTSOA', 'z@yah.fr', 'qqqqqq', '2017-07-14 09:29:33'),
(44, 'MARIE', 'Esther', 'FTSOA', 'avo_r@yahoo.fr', 'mmmmmm', '2017-07-14 09:31:02'),
(45, 'LOVA', 'Avotra', 'Ftsoa', 'avofeno@yahoo.fr', 'vvvvvv', '2017-07-14 09:34:37'),
(46, 'RAKOTOARISOA', 'Avotra', 'ad@yah.fr', 'avo_r@yahoo.fr', 'aaaaaa', '2017-07-14 09:36:04'),
(47, 'azeeeeeeeee', 'Avotra', 'DSF', 'avo_r@yahoo.fr', 'QQQQQQ', '2017-07-14 09:37:19'),
(48, 'azeeeeeeeee', 'Avotra', 'DSF', 'avo_r@yahoo.fr', 'QQQQQQ', '2017-07-14 09:40:32'),
(49, 'AAA', 'Avotra', 'WXXC', 'avo_r@yahoo.fr', 'AAAAAA', '2017-07-14 09:41:45'),
(50, 'METY', 'TSA', 'AAAAA', 'TT@YAH.FR', 'AAAAAA', '2017-07-14 09:43:35'),
(51, 'adala', 'Avotra', 'FTSOA', 'avofeno@yahoo.fr', 'aaaaaa', '2017-07-14 09:48:49'),
(52, 'BBB', 'AAA', 'FTSOA', 'ccc@yah.fr', 'dddddd', '2017-07-14 09:53:18'),
(53, 'bcc', 'acc', 'Ftsoa', 'ccc@yah.fr', 'llllll', '2017-07-14 09:58:55'),
(54, 'Marie', 'esther', 'ftsoa', 'zafy@yah.fr', 'cccccc', '2017-07-14 10:11:24'),
(55, 'rkt', 'Loulou', 'ftsoa', 'll@yah.fr', 'llllll', '2017-07-14 10:19:08'),
(56, 'LOHA', 'Be', 'ftsoa', 'kely@yah.fr', 'llllll', '2017-07-14 10:30:36'),
(57, 'RKT', 'Avotra', 'ftsoa', 'av@yahoo.fr', 'vvvvvv', '2017-07-14 10:37:41'),
(58, 'RKT', 'Avotra', 'ftsoa', 'leotest@yah.fr', 'wwwwww', '2017-07-14 10:45:06'),
(59, 'RKT', 'Avotra', 'ftsoa', 'leotest@yah.fr', 'aaaaaa', '2017-07-14 10:47:08'),
(60, 'RKT', 'Avotra', 'ftsoa', 'pp@yah.fr', 'uuuuuu', '2017-07-14 10:49:31'),
(61, 'RAKO', 'Avotra', 'ftsoa', 'to@yah.fr', 'ffffff', '2017-07-14 10:54:17'),
(62, 'LOHA', 'Be', 'leotest@yah.fr', 'ftsoa', 'qqqqqq', '2017-07-14 11:02:50'),
(63, 'LOHA', 'Avotra', 'leotest@yah.fr', 'ftsoa', 'wwwwww', '2017-07-14 11:06:33'),
(64, 'nnnnnnnnnnnnnnnnnnn', 'llllllllllllllllll', 'av@yahoo.fr', 'ftsoa', 'nnnnnnn', '2017-07-14 11:09:49'),
(65, 'RAKO', 'Avotra', 'to@yah.fr', 'ftsoa', 'wwwwww', '2017-07-14 11:14:59'),
(66, 'RAKO', 'Avotra', 'to@yah.fr', 'aaaaa', 'wwwwww', '2017-07-14 11:17:29'),
(67, 'RAKO', 'Avotra', 'ftsoa', 'av@yahoo.fr', 'wwwwww', '2017-07-14 11:22:51'),
(68, 'fgdfgdfg', 'sg²²', 'dfgdfgd', 'fggf@dfgdfg', 'AAAAAA', '2017-07-14 11:25:03'),
(69, 'zzzz', 'aaaa', 'dfdfdfgf', 'aaaa@ddd', 'aaaaaa', '2017-07-14 11:29:56'),
(70, 'ffddd', 'dddd', 'fffff', 'ddd@dddd', 'mmmmmm', '2017-07-14 11:38:12'),
(71, 'ffddd', 'dddd', 'fffff', 'ddd@dddd', 'mmmmmm', '2017-07-14 11:46:47'),
(72, 'aaaa', 'aaaa', 'dfdfdff', 'ssdd@ddd', 'ssssss', '2017-07-14 11:47:08'),
(73, 'rakotoarisoa', 'Rija', 'Paris', 'rrakotiaro@gmail.com', 'dddddd', '2017-07-14 11:47:32'),
(74, 'rakotoa', 'lova', 'paris', 'lova@gmail.com', 'ffffff', '2017-07-14 11:52:12'),
(75, 'rakoto', 'Rija', 'Paris', 'rija@rija.com', 'aaaaaa', '2017-07-14 16:20:06'),
(76, 'lova', 'lova', 'fr', 'lova@lova.com', 'aaaaaa', '2017-07-14 18:44:30');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
