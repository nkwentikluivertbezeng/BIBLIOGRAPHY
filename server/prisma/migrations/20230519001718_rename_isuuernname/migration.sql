/*
  Warnings:

  - You are about to drop the column `issueumber` on the `journal_article` table. All the data in the column will be lost.
  - Added the required column `issueNumber` to the `journal_article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `journal_article` DROP COLUMN `issueumber`,
    ADD COLUMN `issueNumber` VARCHAR(10) NOT NULL;
