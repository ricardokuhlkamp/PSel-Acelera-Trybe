CREATE DATABASE IF NOT EXISTS bancodb;

USE bancodb;

CREATE TABLE IF NOT EXISTS `accounts` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `cpf_cnpj` VARCHAR(14) NOT NULL UNIQUE,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `balance` DECIMAL(10, 2) NOT NULL, 
    `status` BOOLEAN NOT NULL,
    PRIMARY KEY(`id`)
);

CREATE TABLE IF NOT EXISTS `transactions` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `sender_account_id` INT NOT NULL,  -- ID da conta que envia
    `receiver_account_id` INT NOT NULL,  -- ID da conta que recebe
    `value` DECIMAL(10, 2) NOT NULL,
    `date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `cashback` DECIMAL(5, 3),
    FOREIGN KEY (`sender_account_id`) REFERENCES `accounts` (`id`),
    FOREIGN KEY (`receiver_account_id`) REFERENCES `accounts` (`id`)
);