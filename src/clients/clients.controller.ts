import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
    constructor(private readonly clientsService: ClientsService){}

    @Get()
    findAll(){
        return this.clientsService.findAll()    
    }

    @Post('user/new')
    echo(@Body() body: any){
        return this.clientsService.postClients(body.name)
    }

}
