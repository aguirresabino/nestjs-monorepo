import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { App1Module } from './app1.module';

async function bootstrap() {
  const app = await NestFactory.create(App1Module);
  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get<number>('PORT_APP1');
  await app.listen(port);
}
bootstrap();
