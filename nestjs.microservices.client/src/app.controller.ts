import { Controller, Logger, Post, Put, Body } from '@nestjs/common';
import { ClientService } from './micro.service';

@Controller()
export class AppController {
  
  private logger = new Logger('AppController');

  constructor(private clientService: ClientService) {}

  @Post('add')
  async createClient(@Body() body: any)  {
     this.logger.log('Publish' + JSON.stringify(body)); 
     return this.clientService.createClient(body); 
  }

  @Put('update')
  async accumulateUpdate(@Body() body: any)  {
  
   this.logger.log('Publish' + body); 
     return this.clientService.updateClient(body); 
  }
}
