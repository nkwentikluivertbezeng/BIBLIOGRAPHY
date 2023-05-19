-- AlterTable
ALTER TABLE `book` MODIFY `title` VARCHAR(191) NOT NULL,
    MODIFY `publisher` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `conference_paper` MODIFY `title` VARCHAR(191) NOT NULL,
    MODIFY `information` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `journal_article` MODIFY `title` VARCHAR(191) NOT NULL,
    MODIFY `name` VARCHAR(191) NOT NULL;
