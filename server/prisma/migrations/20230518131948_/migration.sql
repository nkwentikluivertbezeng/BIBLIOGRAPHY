/*
  Warnings:

  - You are about to drop the `Author` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `author` to the `book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author` to the `conference_paper` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author` to the `journal-article` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Author` DROP FOREIGN KEY `Author_bookId_fkey`;

-- DropForeignKey
ALTER TABLE `Author` DROP FOREIGN KEY `Author_conference_paperId_fkey`;

-- DropForeignKey
ALTER TABLE `Author` DROP FOREIGN KEY `Author_journal_articleId_fkey`;

-- DropIndex
DROP INDEX `id_UNIQUE` ON `book`;

-- AlterTable
ALTER TABLE `book` ADD COLUMN `author` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `conference_paper` ADD COLUMN `author` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `journal-article` ADD COLUMN `author` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Author`;
