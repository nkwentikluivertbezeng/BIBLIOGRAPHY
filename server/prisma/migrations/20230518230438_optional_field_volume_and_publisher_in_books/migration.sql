/*
  Warnings:

  - You are about to drop the column `info` on the `conference_paper` table. All the data in the column will be lost.
  - You are about to drop the column `page` on the `conference_paper` table. All the data in the column will be lost.
  - You are about to drop the column `issuer` on the `journal_article` table. All the data in the column will be lost.
  - You are about to drop the column `page` on the `journal_article` table. All the data in the column will be lost.
  - Added the required column `information` to the `conference_paper` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pages` to the `conference_paper` table without a default value. This is not possible if the table is not empty.
  - Added the required column `issueumber` to the `journal_article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pages` to the `journal_article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `book` MODIFY `publisher` VARCHAR(45) NULL,
    MODIFY `volume` INTEGER NULL;

-- AlterTable
ALTER TABLE `conference_paper` DROP COLUMN `info`,
    DROP COLUMN `page`,
    ADD COLUMN `information` VARCHAR(50) NOT NULL,
    ADD COLUMN `pages` VARCHAR(10) NOT NULL;

-- AlterTable
ALTER TABLE `journal_article` DROP COLUMN `issuer`,
    DROP COLUMN `page`,
    ADD COLUMN `issueumber` VARCHAR(10) NOT NULL,
    ADD COLUMN `pages` VARCHAR(10) NOT NULL;
