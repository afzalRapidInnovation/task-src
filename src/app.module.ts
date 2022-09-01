import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // TypeOrmModule.forRootAsync({
    //   useFactory: () => {
    //     return {
    //       type: 'postgres',
    //       host: 'localhost',
    //       port: 5432,
    //       username: 'postgres',
    //       password: 'kyahaipassword',
    //       database: 'task-management',
    //       // entities: [Task,User],
    //       autoLoadEntities: true,
    //       synchronize: true,
    //     };
    //   },
    // }),
    TasksModule,
    // AuthModule,
  ],
  // must be something else, I will take a look, wait  min
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
