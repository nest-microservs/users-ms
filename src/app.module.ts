import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from './config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: envs.dbHost,
      port: envs.dbPort,
      username: envs.dbUser,
      password: envs.dbPassword,
      database: envs.dbName,
      synchronize: false,
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsRun: false,
      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
