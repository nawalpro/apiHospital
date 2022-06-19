-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema hospital2021
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema hospital2021
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hospital2021` DEFAULT CHARACTER SET utf8 ;
USE `hospital2021` ;

-- -----------------------------------------------------
-- Table `hospital2021`.`Drug`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hospital2021`.`Drug` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = big5;


-- -----------------------------------------------------
-- Table `hospital2021`.`Service`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hospital2021`.`Service` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `localization` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = big5;


-- -----------------------------------------------------
-- Table `hospital2021`.`Doctor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hospital2021`.`Doctor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `Service_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Doctor_Service1_idx` (`Service_id` ASC) VISIBLE,
  CONSTRAINT `fk_Doctor_Service1`
    FOREIGN KEY (`Service_id`)
    REFERENCES `hospital2021`.`Service` (`id`)
  ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = big5;


-- -----------------------------------------------------
-- Table `hospital2021`.`Patient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hospital2021`.`Patient` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `Service_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Patient_Service1_idx` (`Service_id` ASC) VISIBLE,
  CONSTRAINT `fk_Patient_Service1`
    FOREIGN KEY (`Service_id`)
    REFERENCES `hospital2021`.`Service` (`id`)
 ON DELETE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hospital2021`.`Consultation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hospital2021`.`Consultation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `Doctor_id` INT NOT NULL,
  `Patient_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Consultation_Doctor1_idx` (`Doctor_id` ASC) VISIBLE,
  INDEX `fk_Consultation_Patient1_idx` (`Patient_id` ASC) VISIBLE,
  CONSTRAINT `fk_Consultation_Doctor1`
    FOREIGN KEY (`Doctor_id`)
    REFERENCES `hospital2021`.`Doctor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Consultation_Patient1`
    FOREIGN KEY (`Patient_id`)
    REFERENCES `hospital2021`.`Patient` (`id`)
ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = big5;


-- -----------------------------------------------------
-- Table `hospital2021`.`Prescription`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hospital2021`.`Prescription` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `number_drug_taken` INT NULL,
  `Consultation_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Prescription_Consultation1_idx` (`Consultation_id` ASC) VISIBLE,
  CONSTRAINT `fk_Prescription_Consultation1`
    FOREIGN KEY (`Consultation_id`)
    REFERENCES `hospital2021`.`Consultation` (`id`)
ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = big5;


-- -----------------------------------------------------
-- Table `hospital2021`.`Allergy`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hospital2021`.`Allergy` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = big5;


-- -----------------------------------------------------
-- Table `hospital2021`.`Prescription_has_Drug`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hospital2021`.`Prescription_has_Drug` (
  `Prescription_id` INT NOT NULL,
  `Drug_id` INT NOT NULL,
  PRIMARY KEY (`Prescription_id`, `Drug_id`),
  INDEX `fk_Prescription_has_Drug_Drug1_idx` (`Drug_id` ASC) VISIBLE,
  INDEX `fk_Prescription_has_Drug_Prescription1_idx` (`Prescription_id` ASC) VISIBLE,
  CONSTRAINT `fk_Prescription_has_Drug_Prescription1`
    FOREIGN KEY (`Prescription_id`)
    REFERENCES `hospital2021`.`Prescription` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Prescription_has_Drug_Drug1`
    FOREIGN KEY (`Drug_id`)
    REFERENCES `hospital2021`.`Drug` (`id`)
   ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = big5;


-- -----------------------------------------------------
-- Table `hospital2021`.`Patient_has_Allergy`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hospital2021`.`Patient_has_Allergy` (
  `Patient_id` INT NOT NULL,
  `Allergy_id` INT NOT NULL,
  PRIMARY KEY (`Patient_id`, `Allergy_id`),
  INDEX `fk_Patient_has_Allergy_Allergy1_idx` (`Allergy_id` ASC) VISIBLE,
  INDEX `fk_Patient_has_Allergy_Patient1_idx` (`Patient_id` ASC) VISIBLE,
  CONSTRAINT `fk_Patient_has_Allergy_Patient1`
    FOREIGN KEY (`Patient_id`)
    REFERENCES `hospital2021`.`Patient` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Patient_has_Allergy_Allergy1`
    FOREIGN KEY (`Allergy_id`)
    REFERENCES `hospital2021`.`Allergy` (`id`)
ON DELETE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hospital2021`.`Drug_has_Allergy`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hospital2021`.`Drug_has_Allergy` (
  `Drug_id` INT NOT NULL,
  `Allergy_id` INT NOT NULL,
  PRIMARY KEY (`Drug_id`, `Allergy_id`),
  INDEX `fk_Drug_has_Allergy_Allergy1_idx` (`Allergy_id` ASC) VISIBLE,
  INDEX `fk_Drug_has_Allergy_Drug1_idx` (`Drug_id` ASC) VISIBLE,
  CONSTRAINT `fk_Drug_has_Allergy_Drug1`
    FOREIGN KEY (`Drug_id`)
    REFERENCES `hospital2021`.`Drug` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Drug_has_Allergy_Allergy1`
    FOREIGN KEY (`Allergy_id`)
    REFERENCES `hospital2021`.`Allergy` (`id`)
ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = big5;



