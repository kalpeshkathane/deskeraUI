-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 22, 2019 at 08:38 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.1.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `deskera`
--

-- --------------------------------------------------------

--
-- Table structure for table `lead`
--

CREATE TABLE `lead` (
  `id` int(11) NOT NULL,
  `country` varchar(5) NOT NULL,
  `domain` varchar(50) NOT NULL,
  `alpha2code` varchar(2) NOT NULL,
  `alpha3code` varchar(3) NOT NULL,
  `phoneno` varchar(15) NOT NULL,
  `currency` varchar(15) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lead`
--

INSERT INTO `lead` (`id`, `country`, `domain`, `alpha2code`, `alpha3code`, `phoneno`, `currency`, `created_date`) VALUES
(19, 'IN', 'kalpeshk.in', 'IN', 'IND', '919582585555', 'INR', '2019-02-22 18:46:43'),
(20, 'FR', 'shailesh.gh', 'GH', 'GHA', '2339555555555', 'GHS', '2019-02-22 18:47:17'),
(21, 'JP', 'www.japan.jp', 'JP', 'JPN', '81888888888', 'JPY', '2019-02-22 19:13:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `lead`
--
ALTER TABLE `lead`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lead`
--
ALTER TABLE `lead`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
