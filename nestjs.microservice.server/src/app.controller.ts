import { Controller, Logger, Post, Body } from '@nestjs/common';
import { ServerService } from './micro.service';
import { Ctx, MessagePattern, Payload, RedisContext } from '@nestjs/microservices';

@Controller()
export class AppController {

  private logger = new Logger('AppController');
  constructor(private serverService: ServerService) {}

  @MessagePattern('add')
  async createCliente(@Payload() data: any, @Ctx() context: RedisContext)  {
    this.logger.log('Subscribe via redis ' + JSON.stringify(data) + ' canal:' +' '+ context.getChannel()) 
    return this.serverService.returnBody(data); 
  }

  @MessagePattern('update')
  async updateCliente(@Payload() data: any, @Ctx() context: RedisContext)  {
   
    this.logger.log('Subscribe via redis ' + JSON.stringify(data) + ' canal:' +' '+ context.getChannel()) 

    return this.serverService.returnBody(data); 
  }

}
