import { Module } from '@nestjs/common';
import { SharedModule } from '@app/shared';
import { App1Controller } from './app1.controller';
import { App1Service } from './app1.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    SharedModule,
  ],
  controllers: [App1Controller],
  providers: [App1Service],
})
export class App1Module {}
