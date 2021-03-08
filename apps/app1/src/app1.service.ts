import { SharedService } from '@app/shared';
import { Injectable } from '@nestjs/common';

@Injectable()
export class App1Service {
  constructor(private readonly sharedService: SharedService) {}

  getHello(): string {
    return this.sharedService.text('Hello, App1!!');
  }
}
