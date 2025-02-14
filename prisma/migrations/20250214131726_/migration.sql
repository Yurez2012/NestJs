-- CreateTable
CREATE TABLE `messages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(191) NOT NULL,
    `sender_id` INTEGER NOT NULL,
    `sender_type` VARCHAR(191) NOT NULL,
    `receiver_id` INTEGER NOT NULL,
    `receiver_type` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `messages_sender_id_sender_type_idx`(`sender_id`, `sender_type`),
    INDEX `messages_receiver_id_receiver_type_idx`(`receiver_id`, `receiver_type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
