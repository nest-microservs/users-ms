import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIsDeletedColumnToUsersTable1748727346391 implements MigrationInterface {
    name = 'AddIsDeletedColumnToUsersTable1748727346391'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "is_deleted" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "is_deleted"`);
    }

}
