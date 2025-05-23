-- CreateTable
CREATE TABLE `assistant_coordinators` (
    `id_assistant_coord` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `paternal_name` VARCHAR(255) NULL,
    `maternal_name` VARCHAR(255) NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(255) NULL,
    `id_venue` INTEGER UNSIGNED NOT NULL,
    `role` ENUM('Coordinadora de informes', 'Coordinadora Asociada', 'Pendiente') NOT NULL DEFAULT 'Pendiente',

    INDEX `id_venue`(`id_venue`),
    PRIMARY KEY (`id_assistant_coord`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `collaborators` (
    `id_collaborator` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `paternal_name` VARCHAR(255) NULL,
    `maternal_name` VARCHAR(255) NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(255) NULL,
    `college` VARCHAR(255) NULL,
    `degree` VARCHAR(255) NULL,
    `semester` VARCHAR(255) NULL,
    `preferred_role` VARCHAR(255) NULL,
    `preferred_language` VARCHAR(255) NULL,
    `preferred_level` VARCHAR(255) NULL,
    `preferred_group` INTEGER UNSIGNED NULL,
    `gender` VARCHAR(255) NULL,
    `role` ENUM('Staff', 'Instructora', 'Facilitadora', 'Pendiente') NOT NULL DEFAULT 'Pendiente',
    `status` ENUM('Pendiente', 'Aprobada', 'Rechazada', 'Cancelada') NOT NULL DEFAULT 'Pendiente',
    `level` ENUM('Pendiente', 'Básico', 'Avanzado') NOT NULL DEFAULT 'Pendiente',
    `language` ENUM('Pendiente', 'Inglés', 'Español') NOT NULL DEFAULT 'Pendiente',
    `id_group` INTEGER UNSIGNED NULL,

    INDEX `id_group`(`id_group`),
    PRIMARY KEY (`id_collaborator`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `groups` (
    `id_group` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `max_places` INTEGER NULL,
    `occupied_places` INTEGER NULL DEFAULT 0,
    `language` VARCHAR(255) NULL,
    `location` VARCHAR(255) NULL,
    `level` VARCHAR(255) NULL,
    `mode` VARCHAR(255) NULL,
    `start_date` DATE NULL,
    `end_date` DATE NULL,
    `start_hour` TIME(0) NULL,
    `end_hour` TIME(0) NULL,
    `id_mentor` INTEGER UNSIGNED NULL,
    `id_venue` INTEGER UNSIGNED NOT NULL,

    INDEX `id_mentor`(`id_mentor`),
    INDEX `id_venue`(`id_venue`),
    PRIMARY KEY (`id_group`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `excluded_days` (
    `id_excluded` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `id_group` INTEGER UNSIGNED NOT NULL,
    `excluded_date` DATE NOT NULL,
    `reason` VARCHAR(255) NULL DEFAULT 'No especificado',

    PRIMARY KEY (`id_excluded`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mentors` (
    `id_mentor` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `paternal_name` VARCHAR(255) NULL,
    `maternal_name` VARCHAR(255) NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(255) NULL,
    `id_venue` INTEGER UNSIGNED NOT NULL,

    INDEX `id_venue`(`id_venue`),
    PRIMARY KEY (`id_mentor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `participants` (
    `id_participant` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `paternal_name` VARCHAR(255) NULL,
    `maternal_name` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `year` VARCHAR(255) NULL,
    `education` VARCHAR(255) NULL,
    `participation_file` BLOB NOT NULL,
    `preferred_group` INTEGER UNSIGNED NULL,
    `status` ENUM('Pendiente', 'Aprobada', 'Rechazada', 'Cancelada') NOT NULL DEFAULT 'Pendiente',
    `id_group` INTEGER UNSIGNED NULL,
    `id_tutor` INTEGER UNSIGNED NULL,

    INDEX `id_group`(`id_group`),
    INDEX `id_tutor`(`id_tutor`),
    PRIMARY KEY (`id_participant`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `superusers` (
    `id_superuser` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id_superuser`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tutors` (
    `id_tutor` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `paternal_name` VARCHAR(255) NULL,
    `maternal_name` VARCHAR(255) NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(255) NULL,

    PRIMARY KEY (`id_tutor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `venue_coordinators` (
    `id_venue_coord` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `paternal_name` VARCHAR(255) NULL,
    `maternal_name` VARCHAR(255) NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(255) NULL,
    `gender` VARCHAR(255) NULL,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `profile_image` BLOB NULL,
    `id_venue` INTEGER UNSIGNED NOT NULL,

    INDEX `id_venue`(`id_venue`),
    PRIMARY KEY (`id_venue_coord`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `venues` (
    `id_venue` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `location` VARCHAR(255) NULL,
    `address` VARCHAR(255) NULL,
    `logo` BLOB NULL,
    `participation_file` BLOB NOT NULL,
    `status` ENUM('Pendiente', 'Registrada sin participantes', 'Registrada con participantes', 'Cancelada', 'Rechazada') NOT NULL DEFAULT 'Pendiente',
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id_venue`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `assistant_coordinators` ADD CONSTRAINT `assistant_coordinators_ibfk_1` FOREIGN KEY (`id_venue`) REFERENCES `venues`(`id_venue`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `collaborators` ADD CONSTRAINT `collaborators_ibfk_1` FOREIGN KEY (`id_group`) REFERENCES `groups`(`id_group`) ON DELETE SET NULL ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `collaborators` ADD CONSTRAINT `collaborators_preferred_group_fkey` FOREIGN KEY (`preferred_group`) REFERENCES `groups`(`id_group`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `groups` ADD CONSTRAINT `groups_ibfk_1` FOREIGN KEY (`id_mentor`) REFERENCES `mentors`(`id_mentor`) ON DELETE SET NULL ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `groups` ADD CONSTRAINT `groups_ibfk_2` FOREIGN KEY (`id_venue`) REFERENCES `venues`(`id_venue`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `excluded_days` ADD CONSTRAINT `excluded_days_id_group_fkey` FOREIGN KEY (`id_group`) REFERENCES `groups`(`id_group`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mentors` ADD CONSTRAINT `mentors_ibfk_1` FOREIGN KEY (`id_venue`) REFERENCES `venues`(`id_venue`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `participants` ADD CONSTRAINT `participants_preferred_group_fkey` FOREIGN KEY (`preferred_group`) REFERENCES `groups`(`id_group`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `participants` ADD CONSTRAINT `participants_ibfk_1` FOREIGN KEY (`id_group`) REFERENCES `groups`(`id_group`) ON DELETE SET NULL ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `participants` ADD CONSTRAINT `participants_ibfk_2` FOREIGN KEY (`id_tutor`) REFERENCES `tutors`(`id_tutor`) ON DELETE SET NULL ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `venue_coordinators` ADD CONSTRAINT `venue_coordinators_ibfk_1` FOREIGN KEY (`id_venue`) REFERENCES `venues`(`id_venue`) ON DELETE CASCADE ON UPDATE RESTRICT;
