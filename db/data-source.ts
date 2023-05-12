import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOption: DataSourceOptions = {
  type: 'mysql',
  username: 'root',
  password: 'root',
  database: 'nestJs',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migration/*.js'],
};

const dataSource = new DataSource(dataSourceOption);

export default dataSource;
