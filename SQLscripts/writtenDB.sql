show databases;
​
DROP DATABASE testdb;
CREATE DATABASE testdb;
USE testdb;
#Table Schema
CREATE TABLE users (
	userId int NOT NULL AUTO_INCREMENT,
    firstName varchar(25) NOT NULL,
    lastName varchar(25) NOT NULL,
    email varchar(50),
    /*accountType enum("basic", "admin") NOT NULL,*/
    phone varchar(11),
    address1 varchar(50),
    address2 varchar(50),
    city varchar(50),
    state char(2),
    zipcode char(5),
    PRIMARY KEY (userId)
);

CREATE TABLE login (
    loginId int NOT NULL AUTO_INCREMENT,
    username varchar(25),
    password char(128),
    userId int NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(userId)
);
CREATE TABLE partners (
    partnerId int NOT NULL AUTO_INCREMENT,
    orgId int NOT NULL,
    PRIMARY KEY (partnerId),
    FOREIGN KEY (orgId) REFERENCES organizations(orgId),
    FOREIGN KEY (partnerId) REFERENCES users(userId)
);
CREATE TABLE organizations (
    orgId int NOT NULL AUTO_INCREMENT,
    orgName varchar(75) NOT NULL,
    orgDesc text,
    website varchar(255),
    address1 varchar(50) NOT NULL,
    address2 varchar(50) NOT NULL,
    city varchar(50) NOT NULL,
    state char(2),
    zipcode char(5),
    PRIMARY KEY (orgId)
);
CREATE TABLE benefits (
    benefitsId int NOT NULL AUTO_INCREMENT,
    benefitsDesc text NOT NULL,
    orgId int NOT NULL,
    PRIMARY KEY (benefitsId),
    FOREIGN KEY (orgId) REFERENCES organizations(orgId)
);
CREATE TABLE patrons (
    patronId int NOT NULL AUTO_INCREMENT,
    userId int NOT NULL,
    passId int NOT NULL,
    PRIMARY KEY (patronId),
    FOREIGN KEY (userId) REFERENCES users(userId),
    FOREIGN KEY (passId) REFERENCES passes(passId)
);
CREATE TABLE passes (
    passId int NOT NULL AUTO_INCREMENT,
    passTypeName varchar(25),
    dateCreated timestamp NOT NULL,
    dateExpires timestamp NOT NULL,
    PRIMARY KEY (passId),
    FOREIGN KEY (passTypeName) REFERENCES passType(passTypeName)
);
CREATE TABLE passType (
    passTypeName varchar(50) NOT NULL,
    description varchar(255) NOT NULL,
    PRIMARY KEY (passTypeName)
);