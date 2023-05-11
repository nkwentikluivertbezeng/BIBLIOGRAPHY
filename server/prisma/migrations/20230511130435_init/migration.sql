-- CreateTable
CREATE TABLE `book` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(45) NOT NULL,
    `publication_year` VARCHAR(4) NOT NULL,
    `publisher_name` VARCHAR(45) NOT NULL,
    `volume_number` INTEGER NOT NULL,
    `style` ENUM('IEEE', 'CHICARGO', 'APA') NOT NULL DEFAULT 'IEEE',

    UNIQUE INDEX `id_UNIQUE`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `conference_paper` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
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
    `year` VARCHAR(4) NOT NULL,
    `title` VARCHAR(45) NOT NULL,
    `journal_name` VARCHAR(45) NOT NULL,
    `volume_number` VARCHAR(5) NOT NULL,
    `issue_number` VARCHAR(10) NOT NULL,
    `page_number` VARCHAR(10) NOT NULL,
    `style` ENUM('IEEE', 'CHICARGO', 'APA') NOT NULL DEFAULT 'IEEE',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Author` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `given` VARCHAR(191) NOT NULL,
    `family` VARCHAR(191) NOT NULL,
    `bookId` INTEGER NULL,
    `conference_paperId` INTEGER NULL,
    `journal_articleId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Author` ADD CONSTRAINT `Author_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `book`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Author` ADD CONSTRAINT `Author_conference_paperId_fkey` FOREIGN KEY (`conference_paperId`) REFERENCES `conference_paper`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Author` ADD CONSTRAINT `Author_journal_articleId_fkey` FOREIGN KEY (`journal_articleId`) REFERENCES `journal-article`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
