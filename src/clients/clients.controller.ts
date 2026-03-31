import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
    constructor(private readonly clientsService: ClientsService){}

    @Get()
    findAll(){
        return this.clientsService.findAll()    
    }

    @Get(':id')
    getById(@Param('id')id: string){
        return this.clientsService.getById(Number(id))
    }

    @Post()
    postProduct(@Body() body: {name: string, price: number, description:string }){
        return this.clientsService.postProduct(body)
    }

    @Delete(':id')
    deleteProduct(@Param('id')id: string){
        return this.clientsService.delete(Number(id))
    }

    @Patch(":id")
    updateProduct(
      @Param('id')id: string,
      @Body() body: {name: string; price: number; description: string}
    ){
        return this.clientsService.update(Number(id), body)
    }
    
    
}
