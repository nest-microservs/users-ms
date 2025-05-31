import { DataSource } from 'typeorm';
import { envs } from './envs';

export default new DataSource({
  type: 'postgres',
  host: envs.dbHost,
  port: envs.dbPort,
  username: envs.dbUser,
  password: envs.dbPassword,
  database: envs.dbName,
  entities: ['dist/**/*.entity{.js,.ts}'],
  migrations: ['dist/migrations/*{.js,.ts}'],
  synchronize: false,
  migrationsRun: false,
  migrationsTableName: 'migrations',
  //   logging: true,
});
