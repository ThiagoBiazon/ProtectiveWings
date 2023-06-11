CREATE DATABASE protectivewings;

USE protectivewings;

CREATE TABLE Usuário (
idUsuário INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
sobrenome VARCHAR(45),
email VARCHAR(45),
celular CHAR(11),
senha VARCHAR(45));

CREATE TABLE Jogo (
idJogo INT PRIMARY KEY AUTO_INCREMENT,
nomeJogo VARCHAR(45));

CREATE TABLE Tentativas (
idTentativas INT,
fkJogo INT,
fkUsuário INT,
palavrasAcertadas INT,
CONSTRAINT fkJogoTentativas FOREIGN KEY (fkJogo) REFERENCES Jogo (idJogo),
CONSTRAINT fkUsuárioTentativas FOREIGN KEY (fkUsuário) REFERENCES Usuário (idUsuário),
CONSTRAINT pkTentativasJogoUsuário PRIMARY KEY (idTentativas, fkJogo, fkUsuário));

INSERT INTO Jogo VALUES 
(NULL, 'Enigma das letras');

SELECT * FROM Usuário;
