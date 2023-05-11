-- CreateTable
CREATE TABLE `book` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `author_name` VARCHAR(45) NOT NULL,
    `title` VARCHAR(45) NOT NULL,
    `publication_year` DATE NOT NULL,
    `info` VARCHAR(45) NOT NULL,
    `volume-number` INTEGER NOT NULL,
    `style` ENUM('IEEE', 'CHICARGO', 'APA') NOT NULL DEFAULT 'IEEE',

    UNIQUE INDEX `id_UNIQUE`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `conference_paper` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `author_name` VARCHAR(45) NOT NULL,
    `year` VARCHAR(4) NOT NULL,
    `title` VARCHAR(45) NOT NULL,
    `info` VARCHAR(50) NOT NULL,
    `page_number` VARCHAR(10) NOT NULL,
    `style` ENUM('IEEE', 'CHICARGO', 'APA') NOT NULL DEFAULT 'IEEE',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `journal-article` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `author_name` VARCHAR(45) NOT NULL,
    `year` VARCHAR(4) NOT NULL,
    `title` VARCHAR(45) NOT NULL,
    `journal_name` VARCHAR(45) NOT NULL,
    `volume_number` VARCHAR(5) NOT NULL,
    `issue_number` VARCHAR(10) NOT NULL,
    `page_number` VARCHAR(10) NOT NULL,
    `style` ENUM('IEEE', 'CHICARGO', 'APA') NOT NULL DEFAULT 'IEEE',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
