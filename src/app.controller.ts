import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Post, Body } from '@nestjs/common';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  GetHello(){
    return {
      messagem: "Hello word"
    }
  }
  @Get()
  root(){
    return 'root'
  }

  @Post('echo')
  echo(@Body() body: any){
    return body
  }
}
