import { SharedService } from '@app/shared';
import { Test, TestingModule } from '@nestjs/testing';
import { App1Controller } from './app1.controller';
import { App1Service } from './app1.service';

describe('App1Controller', () => {
  let app1Controller: App1Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [App1Controller],
      providers: [App1Service, SharedService],
    }).compile();

    app1Controller = app.get<App1Controller>(App1Controller);
  });

  describe('root', () => {
    it('should return an object', () => {
      expect(app1Controller.getHello()).toBe('Hello, App1!!');
    });
  });
});
