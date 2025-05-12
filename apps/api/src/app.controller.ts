import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHomePage(@Res() res: Response) {
    res.setHeader('Content-Type', 'text/html');
    res.send(this.appService.getHomePage());
  }

  @Get('/ping')
  getPing() {
    return { status: 'ok', timestamp: Date.now() };
  }
}
