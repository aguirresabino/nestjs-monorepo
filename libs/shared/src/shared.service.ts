import { Injectable } from '@nestjs/common';

@Injectable()
export class SharedService {
  text(text: string): string {
    return text;
  }
}
