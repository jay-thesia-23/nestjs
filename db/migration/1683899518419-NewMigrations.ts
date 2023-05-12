import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigrations1683899518419 implements MigrationInterface {
    name = 'NewMigrations1683899518419'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`courses\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_9e7f781b8072b75a0603a1e607\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_9e7f781b8072b75a0603a1e607\` ON \`courses\``);
        await queryRunner.query(`DROP TABLE \`courses\``);
    }

}
