import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { env } from './config/index';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controller/users/users.controller';

@Module({
  imports: [TypeOrmModule.forRoot(env.DATABASE_CONFIG)],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
