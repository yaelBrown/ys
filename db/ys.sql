create database ys;

use ys;

show tables;

CREATE TABLE Profile (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT Primary Key,
    fName varchar(50),
    lName varchar(50),
    birth_day date,
    email varchar(50) NOT NULL,
    location varchar(100),
    avatarPic varchar(200),
    coverPic varchar(200)
);

CREATE TABLE Comments (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (CommentID),
    authorID int NOT NULL,
    recipientID int NOT NULL,
    photoID int,
    Comment varchar(255),
    likes int,
    dislikes int,
    isPhoto bool,
    commentDate datetime
);

CREATE TABLE Albums (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    Primary Key (AlbumID),
    ProfileID int NOT NULL,
    AlbumTitle varchar(100),
    CollaboratorID int,
    albumDate datetime
);

CREATE TABLE Photos (
	id int UNSIGNED NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (PhotoID),
    AlbumID int,
    AuthorID int,
    likes int,
    dislikes int,
    photoDate datetime
);

show tables;

describe profile