import { Injectable } from '@nestjs/common';
@Injectable()
export class ServerService {

constructor() {

}

    public returnBody(data: any[]): any {
        return data
    }
}
