import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/courses/entities/courses.entity';
import { DataSourceOptions } from 'typeorm';


export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5431,
  username: 'postgres',
  password: 'postgres',
  database: 'devtraining',
  entities: [Course],
  synchronize: true
}

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: async () => {
      return {
        ...dataSourceOptions
      }
    }
  })],
})
export class DatabaseModule {}
