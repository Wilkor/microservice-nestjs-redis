import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ClientService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379',
      },
    });
  }

  public createClient(data: any) {
    return this.client.send<any, any[]>('add', data);
  }

    public updateClient(data: any) {
    return this.client.send<any, any[]>('update', data);
  }
}
