import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('server in http://localhost:3002/');
  // 打印用户表数据
  await app.listen(3002);
}
bootstrap();
