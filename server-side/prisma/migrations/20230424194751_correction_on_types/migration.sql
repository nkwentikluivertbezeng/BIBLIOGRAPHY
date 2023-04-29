/*
  Warnings:

  - You are about to drop the column `info` on the `book` table. All the data in the column will be lost.
  - Added the required column `publisher_name` to the `book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `book` DROP COLUMN `info`,
    ADD COLUMN `publisher_name` VARCHAR(45) NOT NULL,
    MODIFY `publication_year` VARCHAR(4) NOT NULL;
