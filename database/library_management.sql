-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 16, 2026 at 07:38 PM
-- Server version: 8.3.0
-- PHP Version: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
CREATE TABLE IF NOT EXISTS `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `shelf_id` int NOT NULL,
  `isbn` varchar(50) DEFAULT NULL,
  `is_available` tinyint(1) DEFAULT '1',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `author`, `shelf_id`, `isbn`, `is_available`, `status`, `created_at`, `updated_at`) VALUES
(5, 'Romie and Juliet', 'Bryan', 9, '7Z84994', 0, 1, '2026-06-15 21:39:02', '2026-06-16 19:37:59'),
(3, 'Harry Potter', 'Harry', 2, '598399', 1, 1, '2026-06-14 16:50:51', '2026-06-16 19:38:03'),
(4, 'The GOAT', 'Brian', 2, '592883', 1, 1, '2026-06-14 16:56:57', '2026-06-16 19:38:08');

-- --------------------------------------------------------

--
-- Table structure for table `borrowed_by`
--

DROP TABLE IF EXISTS `borrowed_by`;
CREATE TABLE IF NOT EXISTS `borrowed_by` (
  `id` int NOT NULL AUTO_INCREMENT,
  `borrower_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `details` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `book_id` int NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `borrowed_by`
--

INSERT INTO `borrowed_by` (`id`, `borrower_name`, `details`, `active`, `book_id`, `created_at`, `updated_at`) VALUES
(1, 'Kulaba Brian', 'Billing Strasse, 89 Hermannsburg.', 0, 3, '2026-06-16 09:07:50', '2026-06-16 09:07:50'),
(2, 'Lilian', 'Ein Strasse, 60 Hannover', 1, 5, '2026-06-16 09:08:00', '2026-06-16 09:08:00');

-- --------------------------------------------------------

--
-- Table structure for table `shelf`
--

DROP TABLE IF EXISTS `shelf`;
CREATE TABLE IF NOT EXISTS `shelf` (
  `id` int NOT NULL AUTO_INCREMENT,
  `shelf_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_id` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `shelf`
--

INSERT INTO `shelf` (`id`, `shelf_name`, `created_at`, `updated_id`) VALUES
(5, 'Regale 1', '2026-06-14 20:11:25', '2026-06-14 20:11:25'),
(6, 'Regale 2', '2026-06-14 20:11:34', '2026-06-14 20:11:34'),
(7, 'Regale 3', '2026-06-15 23:32:41', '2026-06-15 23:32:41'),
(8, 'Regale 4', '2026-06-15 23:36:26', '2026-06-15 23:36:26'),
(9, 'Regale 5', '2026-06-15 23:36:45', '2026-06-15 23:36:45');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
