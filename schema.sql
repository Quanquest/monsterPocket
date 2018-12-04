DROP DATABASE IF EXISTS monsterPocket;

CREATE DATABASE monsterPocket;

USE monsterPocket;

CREATE TABLE winrate (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pokemon TEXT(255) NOT NULL,
  battles INT NOT NULL,
  wins INT NOT NULL,
  losses INT NOT NULL,
  draws INT NOT NULL
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
