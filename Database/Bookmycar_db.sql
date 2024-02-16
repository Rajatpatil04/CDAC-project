CREATE DATABASE  IF NOT EXISTS `bookmycar_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bookmycar_db`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: bookmycar_db
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `area`
--

DROP TABLE IF EXISTS `area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `area` (
  `area_id` int NOT NULL AUTO_INCREMENT,
  `area_name` varchar(30) NOT NULL,
  `pincode` int DEFAULT NULL,
  `city_id` int DEFAULT NULL,
  PRIMARY KEY (`area_id`),
  KEY `city_id` (`city_id`),
  CONSTRAINT `area_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `cities` (`city_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area`
--

LOCK TABLES `area` WRITE;
/*!40000 ALTER TABLE `area` DISABLE KEYS */;
INSERT INTO `area` VALUES (1,'Deccan',411004,1),(2,'Shivajinagar',411005,1),(3,'Vadgaon',411046,1);
/*!40000 ALTER TABLE `area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `brand_id` int NOT NULL AUTO_INCREMENT,
  `brand_name` varchar(30) NOT NULL,
  PRIMARY KEY (`brand_id`),
  UNIQUE KEY `brand_name` (`brand_name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (10,'Audi'),(7,'BMW'),(6,'Honda'),(5,'Hyundai'),(4,'Mahindra'),(9,'Mercedes-Benz'),(2,'Suzuki'),(1,'Tata'),(3,'Toyota'),(8,'Volkswagen');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cars`
--

DROP TABLE IF EXISTS `cars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cars` (
  `car_id` int NOT NULL AUTO_INCREMENT,
  `model_id` int NOT NULL,
  `host_id` int DEFAULT NULL,
  `fuel_id` int DEFAULT NULL,
  `mileage` decimal(5,2) NOT NULL,
  `price_per_hour` decimal(5,2) NOT NULL,
  `color` varchar(30) DEFAULT NULL,
  `rc_no` varchar(20) NOT NULL,
  `reg_date` date DEFAULT NULL,
  `insurance_type` varchar(30) DEFAULT NULL,
  `insurance_exp_date` date DEFAULT NULL,
  `music_system` tinyint(1) DEFAULT NULL,
  `ac` tinyint(1) DEFAULT NULL,
  `car_image` longblob,
  `status` bit(1) DEFAULT b'0',
  PRIMARY KEY (`car_id`),
  UNIQUE KEY `rc_no` (`rc_no`),
  KEY `host_id` (`host_id`),
  KEY `model_id` (`model_id`),
  KEY `fuel_id` (`fuel_id`),
  CONSTRAINT `cars_ibfk_1` FOREIGN KEY (`host_id`) REFERENCES `hosts` (`host_id`),
  CONSTRAINT `cars_ibfk_2` FOREIGN KEY (`model_id`) REFERENCES `models` (`model_id`),
  CONSTRAINT `cars_ibfk_3` FOREIGN KEY (`fuel_id`) REFERENCES `fuel_types` (`fuel_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cars`
--

LOCK TABLES `cars` WRITE;
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;
INSERT INTO `cars` VALUES (4,1,80,1,15.50,300.00,'Red','ABC123','2024-02-16','Full','2025-02-16',1,1,NULL,_binary '\0'),(8,5,52,2,23.00,200.00,'green','MH12CQ4532','2013-10-30','ownership','2031-01-05',0,0,NULL,_binary '\0'),(9,7,52,2,23.00,200.00,'black','MH12CQ4512','2013-09-29','comprehensive','2031-01-05',0,0,NULL,_binary '\0'),(10,2,52,2,23.00,200.00,'blue','MH12CQ4590','2012-12-30','ownership','2024-01-01',0,0,NULL,_binary '\0'),(12,2,52,2,23.00,200.00,'blue','MH12CQ4876','2012-12-30','ownership','2024-01-01',0,0,NULL,_binary '\0'),(13,2,52,2,23.00,200.00,'blue','MH12CQ4823','2012-12-30','ownership','2024-01-01',0,0,NULL,_binary '\0'),(14,2,52,2,23.00,200.00,'blue','MH12CQ4866','2012-12-30','ownership','2024-01-01',0,0,NULL,_binary '\0'),(15,2,52,2,23.00,200.00,'blue','MH12CQ7854','2012-12-30','ownership','2024-01-01',0,0,NULL,_binary '\0'),(16,2,52,2,23.00,200.00,'blue','MH12CQ7859','2012-12-30','ownership','2024-01-01',0,0,NULL,_binary '\0'),(25,4,52,3,12.00,200.00,'blue','MH12CQ4534','2023-09-05','ownership','2024-03-08',0,0,NULL,_binary '\0');
/*!40000 ALTER TABLE `cars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `cat_id` int NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(20) NOT NULL,
  PRIMARY KEY (`cat_id`),
  UNIQUE KEY `cat_name` (`cat_name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (2,'Hatchback'),(4,'Luxury'),(1,'Sedan'),(3,'SUV');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `city_id` int NOT NULL AUTO_INCREMENT,
  `city_name` varchar(30) NOT NULL,
  PRIMARY KEY (`city_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (1,'Pune');
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `customer_id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(30) NOT NULL,
  `lname` varchar(30) NOT NULL,
  `license_no` varchar(20) NOT NULL,
  `contact` varchar(15) NOT NULL,
  `emergency_contact` varchar(15) NOT NULL,
  `dob` date NOT NULL,
  `reg_date` date DEFAULT NULL,
  `pancard_no` varchar(20) NOT NULL,
  `adhar_card` varchar(20) NOT NULL,
  `uid` int DEFAULT NULL,
  `area_id` int DEFAULT NULL,
  `address` text,
  `email_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`customer_id`),
  UNIQUE KEY `license_no` (`license_no`),
  UNIQUE KEY `contact` (`contact`),
  UNIQUE KEY `pancard_no` (`pancard_no`),
  UNIQUE KEY `adhar_card` (`adhar_card`),
  KEY `uid` (`uid`),
  KEY `area_id` (`area_id`),
  CONSTRAINT `customers_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`),
  CONSTRAINT `customers_ibfk_2` FOREIGN KEY (`area_id`) REFERENCES `area` (`area_id`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (22,'John','Doe','123456','1234567890','9876543210','1990-01-01','2022-01-01','ABCDE1234F','1234-5678-9012',21,1,'123 Main Street','john@gmail.com'),(48,'Ajay','Patil','7635353532','6875236897','8768378762','1999-12-31','2024-02-11','BDCSW5643G','876876865345',47,1,'jkgjk','ajay@gmail.com'),(50,'Omkar','Balwe','7635353512','9878564311','8966754367','1990-11-24','2024-02-12','BDCSA5643H','988755575464',49,1,'Near Gym','omkar@gmail.com'),(54,'Rajat','Patil','7532465756','8757986755','9866567656','1981-10-25','2024-02-12','BDCSW5643A','878979798676',53,2,'Near PG','rajat@gmail.com'),(56,'Aditya','Fand','7635353515','9866567656','7858557454','2024-01-01','2024-02-12','BDCSW5643Z','876876865344',55,2,'jhsxajh','aditya@gmail.com'),(58,'Vishwajit','Shinde','7635353556','5675876578','9867787896','2001-07-02','2024-02-13','BDCSW5640A','678969966576',57,2,'near goodluck cafe','vishwajit@gmail.com'),(68,'Rajat1','Patil1','123456789012','9876543210','9876543210','1990-01-01','2024-02-13','ABCYX1234F','892176538976',67,2,'123 Main Street','rajat@gmail.com'),(69,'Rohit','Jadhav','8978768756','9067576577','8765984388','1990-10-25','2024-02-13','JDCSW5643Z','567567655775',68,1,'lkbkj','rohit@gmail.com'),(70,'Omkar','Mohite','90988877793','9988734567','9768432387','1984-10-12','2024-02-13','BDCSW5643S','345423445535',69,2,'kjbnjg','omkarm@gmail.com'),(71,'Rajat2','Patil2','153456789012','9877543210','9870543210','1990-01-01','2024-02-13','AwcYX1234F','899176538976',70,2,'123 Main Street','rajat1@gmail.com'),(72,'Vaibhav','Kale','7635353531','7987967877','8898779778','1992-07-26','2024-02-13','BDCNW5643H','876876865905',71,1,'kjjjbm','vaibhav@gmail.com'),(77,'Aditya','Madhavi','6879678678','5675757674','8968765755','1999-09-24','2024-02-14','BDCSW5649Z','567575476647',77,1,'jhvcs','aditya1@gmail.com'),(79,'Aditya','Patil','7635353588','9878564353','7858517454','1998-11-29','2024-02-14','BDCSA5647J','878979798341',80,2,'near college','aditya11@gmail.com');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fuel_types`
--

DROP TABLE IF EXISTS `fuel_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fuel_types` (
  `fuel_id` int NOT NULL AUTO_INCREMENT,
  `fuel_type` varchar(10) NOT NULL,
  PRIMARY KEY (`fuel_id`),
  UNIQUE KEY `fuel_type` (`fuel_type`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fuel_types`
--

LOCK TABLES `fuel_types` WRITE;
/*!40000 ALTER TABLE `fuel_types` DISABLE KEYS */;
INSERT INTO `fuel_types` VALUES (4,'CNG'),(2,'Diesel'),(3,'Electic'),(1,'Petrol');
/*!40000 ALTER TABLE `fuel_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (82);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hosts`
--

DROP TABLE IF EXISTS `hosts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hosts` (
  `host_id` int NOT NULL AUTO_INCREMENT,
  `uid` int DEFAULT NULL,
  `fname` varchar(30) NOT NULL,
  `lname` varchar(30) NOT NULL,
  `area_id` int DEFAULT NULL,
  `email_id` varchar(30) NOT NULL,
  `contact` varchar(15) NOT NULL,
  `dob` date DEFAULT NULL,
  `pancard_number` varchar(20) NOT NULL,
  `adharcard_number` varchar(20) NOT NULL,
  `upi_id` varchar(40) NOT NULL,
  `reg_date` date DEFAULT NULL,
  `address` text,
  PRIMARY KEY (`host_id`),
  UNIQUE KEY `email_id` (`email_id`),
  UNIQUE KEY `contact` (`contact`),
  UNIQUE KEY `pancard_number` (`pancard_number`),
  UNIQUE KEY `adharcard_number` (`adharcard_number`),
  KEY `area_id` (`area_id`),
  KEY `uid` (`uid`),
  CONSTRAINT `hosts_ibfk_1` FOREIGN KEY (`area_id`) REFERENCES `area` (`area_id`),
  CONSTRAINT `hosts_ibfk_2` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hosts`
--

LOCK TABLES `hosts` WRITE;
/*!40000 ALTER TABLE `hosts` DISABLE KEYS */;
INSERT INTO `hosts` VALUES (1,1,'Smith','L',1,'abcd@gmail.com','1234567890','2001-12-06','NSIFO6783F','123454326785','123456789',NULL,'Delhi'),(52,51,'Sandesh','Kshirsagar',2,'sandesh@gmail.com','7823875237','1999-11-28','AHEKS4165V','987887677676','','2024-02-12','near Iscon Temple'),(74,73,'Nilay','Waghde',1,'nilayw@gmail.com','9894567356','1997-01-01','ABCDE1234F','123456789','nulay.w@upi','2024-02-13','123 Main Street'),(75,74,'Rushi','Kadam',2,'rushi@gmail.com','9876877787','1997-05-30','AHENF4165V','987887677675','rushii@ybl','2024-02-13','jhc'),(76,76,'Aniket','Chopade',1,'aniket@gmail.com','','1995-05-14','AHEKF4165V','789274894646','rushii@ybl','2024-02-14','karve road'),(78,78,'Vijay','Patil',1,'vijay@gmail.com','9877876668','1998-12-31','AHEKF4165','789766786667','vijay@ybl','2024-02-14','kjcknkn'),(80,81,'Rajat1','Patil',1,'raja1t@gmail.com','4578123123','1997-11-30','AHEKF4168B','987561234657','rajat@ybl','2024-02-14','Near Gym');
/*!40000 ALTER TABLE `hosts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `models`
--

DROP TABLE IF EXISTS `models`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `models` (
  `model_id` int NOT NULL,
  `model_name` varchar(50) DEFAULT NULL,
  `brand_id` int DEFAULT NULL,
  `transmission_type` varchar(50) DEFAULT NULL,
  `seating_capacity` int DEFAULT NULL,
  `gps_navigation_system` tinyint(1) DEFAULT NULL,
  `cat_id` int DEFAULT NULL,
  PRIMARY KEY (`model_id`),
  KEY `cat_id` (`cat_id`),
  KEY `brand_id` (`brand_id`),
  CONSTRAINT `models_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `categories` (`cat_id`),
  CONSTRAINT `models_ibfk_2` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`brand_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `models`
--

LOCK TABLES `models` WRITE;
/*!40000 ALTER TABLE `models` DISABLE KEYS */;
INSERT INTO `models` VALUES (1,'Punch',1,'Manual',5,0,3),(2,'Nexon',1,'Manual',5,1,2),(3,'Harrier',1,'Manual',5,1,3),(4,'Tigor',1,'Manual',5,0,1),(5,'hexa',1,'manual',5,1,3),(6,'Swift',2,'manual',5,1,2),(7,'Baleno',2,'manual',5,1,2),(8,'Fortuner',3,'Automatic',7,1,3),(9,'Camry',3,'Automatic',5,1,1),(10,'XUV700',4,'Automatic',7,1,3),(11,'Scorpio',4,'manual',7,1,3),(12,'Creta',5,'manual',5,1,2),(13,'Verna',5,'Automatic',5,1,1),(14,'City',6,'manual',5,1,1),(15,'X1',7,'Automatic',5,1,3),(16,'Taigun',8,'Manual',5,1,2),(17,'A-Class',9,'Automatic',5,1,1),(18,'A6',10,'Automatic',5,1,1),(19,'Q3',10,'Automatic',5,1,2),(20,'Virtus',8,'Manual',5,1,1);
/*!40000 ALTER TABLE `models` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `packages`
--

DROP TABLE IF EXISTS `packages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `packages` (
  `package_id` int NOT NULL AUTO_INCREMENT,
  `hours` int NOT NULL,
  PRIMARY KEY (`package_id`),
  UNIQUE KEY `hours` (`hours`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packages`
--

LOCK TABLES `packages` WRITE;
/*!40000 ALTER TABLE `packages` DISABLE KEYS */;
/*!40000 ALTER TABLE `packages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(30) NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ADMIN'),(2,'HOST'),(3,'CUSTOMER');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role_id` int DEFAULT NULL,
  `status` bit(1) DEFAULT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'adityam','aditya123',1,_binary ''),(21,'john_doe','password123',3,_binary '\0'),(47,'ajaypatil','Ajay@123',2,_binary ''),(49,'omkar12','Omkar@123',3,_binary ''),(51,'Sandesh12','Sandesh@123',2,_binary ''),(53,'rajat2','Rajat@123',3,_binary ''),(55,'adityaa','Aditya@123',3,_binary ''),(57,'vishwajit123','Vishwajit@123',3,_binary ''),(67,'rajat_patil','$2a$10$5NjSd1sQAJcU5dwqdMumq.W9nxFnIzGgUKVwnxVIW9bRH6EogASm2',3,_binary ''),(68,'rohit123','Rohit@123',3,_binary '\0'),(69,'omkarm','Omkar@123',3,_binary '\0'),(70,'rajat_patil1','$2a$10$6BKftQz0T5CkDVFNVTEvKerX6PxtXxOvITrWP5mhthNJfs4rTLDp.',3,_binary '\0'),(71,'vaibhav12','$2a$10$CdZt1hRI4otXDNTH9bplc.altGZx7HDP6dSN750QfVpNdqUjT3Kmq',3,_binary '\0'),(73,'nilay_waghde','pass123',2,_binary '\0'),(74,'rushi12','Rushi@123',2,_binary '\0'),(76,'aniketc','$2a$10$OQdFiMbF8nr8fFcLqfdrs.pVfhPhcTkue8znfmHeQUW9khqmXM8BC',2,_binary '\0'),(77,'adityaam','$2a$10$RcYf.L06PU/HtRWDTxEnk.hoOSfhEpT4P9pHwj1Q91Ew9hwPDZLjy',3,_binary '\0'),(78,'vijay','$2a$10$yLaRPSvbpc2H05DWjgF9s.eZT.lZ4PSiCZyKKtrVFUYWY8.oge8xy',2,_binary '\0'),(79,'','$2a$10$/0yJU5M6UI6.qAgv/ZVOy.x.KWXvS.q7Djdg0bK15bR/ci0e0nOca',3,_binary '\0'),(80,'Adityaaa','$2a$10$YnwUZAZdISW0dessvt7eLeBIJFzOhYxICAz8e2fI8zYhXz0PtTwre',3,_binary '\0'),(81,'Rajat__','$2a$10$cwo5w1RAtdLpi2SU4hJj/Oh87b16nCbN6k/naRToUGnAq/IaetLbu',2,_binary '\0');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-16 15:30:58
