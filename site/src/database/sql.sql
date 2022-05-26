-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para sql server - remoto - produção */

CREATE TABLE empresa (
	idEmpresa INT PRIMARY KEY IDENTITY(1,1),
	razao VARCHAR(50),
	cnpj varchar(20),
	email VARCHAR(50),
	representante varchar(50),
	senha VARCHAR(100)
	
);




/* para workbench - local - desenvolvimento */
CREATE DATABASE surv;

USE surv;

CREATE TABLE empresa (
	idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
	razao VARCHAR(50),
	cnpj varchar(20),
	email VARCHAR(50),
	representante varchar(50),
	senha VARCHAR(100)
	
);

