/*
  Warnings:

  - You are about to drop the column `publication_year` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `publisher_name` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `volume_number` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `page_number` on the `conference_paper` table. All the data in the column will be lost.
  - You are about to drop the `journal-article` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `publisher` to the `book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `volume` to the `book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `page` to the `conference_paper` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `book` DROP COLUMN `publication_year`,
    DROP COLUMN `publisher_name`,
    DROP COLUMN `volume_number`,
    ADD COLUMN `publisher` VARCHAR(45) NOT NULL,
    ADD COLUMN `volume` INTEGER NOT NULL,
    ADD COLUMN `year` VARCHAR(4) NOT NULL;

-- AlterTable
ALTER TABLE `conference_paper` DROP COLUMN `page_number`,
    ADD COLUMN `page` VARCHAR(10) NOT NULL;

-- DropTable
DROP TABLE `journal-article`;

-- CreateTable
CREATE TABLE `journal_article` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `author` VARCHAR(191) NOT NULL,
    `year` VARCHAR(4) NOT NULL,
    `title` VARCHAR(45) NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    `volume` VARCHAR(5) NOT NULL,
    `issuer` VARCHAR(10) NOT NULL,
    `page` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
