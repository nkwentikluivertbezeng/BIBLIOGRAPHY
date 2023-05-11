/*
  Warnings:

  - You are about to drop the column `volume-number` on the `book` table. All the data in the column will be lost.
  - Added the required column `volume_number` to the `book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `book` DROP COLUMN `volume-number`,
    ADD COLUMN `volume_number` INTEGER NOT NULL;
