import { Controller, Get, Delete } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Delete('/delete') 
  remove() {
    return (
        {
          id: 58
        }
    )
  }

}
