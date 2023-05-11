/*
  Warnings:

  - You are about to drop the column `author_name` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `author_name` on the `conference_paper` table. All the data in the column will be lost.
  - You are about to drop the column `author_name` on the `journal-article` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `book` DROP COLUMN `author_name`;

-- AlterTable
ALTER TABLE `conference_paper` DROP COLUMN `author_name`;

-- AlterTable
ALTER TABLE `journal-article` DROP COLUMN `author_name`;

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
