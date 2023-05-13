import { MigrationInterface, QueryRunner } from "typeorm";

export class NewDepartment1683971780948 implements MigrationInterface {
    name = 'NewDepartment1683971780948'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`departments\` (\`id\` int NOT NULL AUTO_INCREMENT, \`department\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`courses\` DROP COLUMN \`course\``);
        await queryRunner.query(`ALTER TABLE \`courses\` ADD \`courses\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`courses\` ADD \`password\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`courses\` ADD \`departmentId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`courses\` ADD CONSTRAINT \`FK_2a26294560102d94bc4c67ecfe5\` FOREIGN KEY (\`departmentId\`) REFERENCES \`departments\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`courses\` DROP FOREIGN KEY \`FK_2a26294560102d94bc4c67ecfe5\``);
        await queryRunner.query(`ALTER TABLE \`courses\` DROP COLUMN \`departmentId\``);
        await queryRunner.query(`ALTER TABLE \`courses\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`courses\` DROP COLUMN \`courses\``);
        await queryRunner.query(`ALTER TABLE \`courses\` ADD \`course\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP TABLE \`departments\``);
    }

}
