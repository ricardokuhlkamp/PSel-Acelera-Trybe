CREATE IF NOT EXISTIS Banco_acelera;

USE Banco_acelera;

CREATE TABLE IF NOT EXISTS `accounts` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `cpf_cnpj` VARCHAR(14) NOT NULL UNIQUE,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `status` BOOLEAN NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `transactions` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `origin_account_id` INT NOT NULL,
    `destination_account_id` INT NOT NULL,
    `value` DECIMAL(10, 2) NOT NULL,
    `date` DATETIME NOT NULL,
    `cashback` DECIMAL(5, 3) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`origin_account_id`) REFERENCES `accounts` (`id`),
    FOREIGN KEY (`destination_account_id`) REFERENCES `accounts` (`id`)
);