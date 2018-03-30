### Schema

CREATE DATABASE fareFinder_db;
USE fareFinder_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(100) NOT NULL,
	email varchar(100) NOT NULL,
	password varchar(100) NOT NULL,
	-- required for sequelize
	createdAt DATETIME NOT NULL,
	updatedAt DATETIME NOT NULL,
	PRIMARY KEY (id)
);

