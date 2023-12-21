import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '352291',
  database: 'postgres',
  synchronize: true,
  logging: true,
  entities: ['dist/**/*.entity.ts'],
  migrations: ['dist/migrations/*.ts'],
  migrationsTableName: 'migrations',
};

export = config;
