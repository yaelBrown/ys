create database ys;

use ys;

show tables;

CREATE TABLE users (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT UNIQUE,
  `fName` varchar(50) DEFAULT NULL,
  `lName` varchar(50) DEFAULT NULL,
  `birth_day` date DEFAULT NULL,
  `email` varchar(50) NOT NULL UNIQUE,
  `location` varchar(100) DEFAULT NULL,
  `avatarPic` varchar(200) DEFAULT NULL,
  `coverPic` varchar(200) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `followers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT UNIQUE,
  `FollowerID` int(10) NOT NULL,
  `FolloweeID` int(10) NOT Null,
  `FollowerName` varchar(101) NOT NULL,
  `FolloweeName` varchar(101) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `comments` (
  `CommentID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `authorID` int(11) NOT NULL,
  `recipientID` int(11) NOT NULL,
  `photoID` int(11) DEFAULT NULL,
  `Comment` varchar(255) DEFAULT NULL,
  `likes` int(11) DEFAULT NULL,
  `dislikes` int(11) DEFAULT NULL,
  `isPhoto` tinyint(1) DEFAULT NULL,
  `commentDate` datetime DEFAULT NULL,
  PRIMARY KEY (`CommentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `albums` (
  `AlbumID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ProfileID` int(11) NOT NULL,
  `AlbumTitle` varchar(100) DEFAULT NULL,
  `CollaboratorID` int(11) DEFAULT NULL,
  `albumDate` datetime DEFAULT NULL,
  PRIMARY KEY (`AlbumID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `photos` (
  `PhotoID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `AlbumID` int(11) DEFAULT NULL,
  `AuthorID` int(11) DEFAULT NULL,
  `likes` int(11) DEFAULT NULL,
  `dislikes` int(11) DEFAULT NULL,
  `photoDate` datetime DEFAULT NULL,
  PRIMARY KEY (`PhotoID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

show tables;