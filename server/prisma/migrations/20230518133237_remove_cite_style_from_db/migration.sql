/*
  Warnings:

  - You are about to drop the column `style` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `style` on the `conference_paper` table. All the data in the column will be lost.
  - You are about to drop the column `style` on the `journal-article` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `book` DROP COLUMN `style`;

-- AlterTable
ALTER TABLE `conference_paper` DROP COLUMN `style`;

-- AlterTable
ALTER TABLE `journal-article` DROP COLUMN `style`;
