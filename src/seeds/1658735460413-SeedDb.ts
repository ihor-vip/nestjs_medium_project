import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1658735460413 implements MigrationInterface {
  name = 'SeedDb1658735460413';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // password is 123
    await queryRunner.query(
      `INSERT INTO users (username, email, password) VALUES ('foo1', 'foo1@gmail.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiJmb28xIiwiZW1haWwiOiJmb28xQGdtYWlsLmNvbSIsImlhdCI6MTY1ODgxNTQ2OX0.ttO9KnfentGtqjoIFyjlb-jJw7KnLTgwqxPbCTmIVe4')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'first article desc', 'first article body', 'coffee,dragon', 1)`,
    );

    await queryRunner.query(
        `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('second-article', 'Second article', 'second article desc', 'second article body', 'coffee,dragon', 2)`,
    );
  }

  public async down(): Promise<void> {}
}
