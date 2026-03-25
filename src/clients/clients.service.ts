import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientsService {
    findAll(){
        return ["Demetrio", "Thamara", "Melinda"]
    }

    postClients(name:string, age: number){
        if(age < 18){
            return {message: 'Usuário menor de idade'}
        }
        if(!name){
            return {message: 'Precisa preencher nome'}
        }
        return { message: `Usuario ${name} com ${age} anos criados`}
    }
}
