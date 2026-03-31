import { Injectable } from '@nestjs/common';


@Injectable()
export class ClientsService {

    private products: any[] = []
    findAll(){
        return this.products
    }

    postProduct(product: { name: string; price: number; description: string }){
        const newProduct = {
            id: Date.now(),
            ...product
        }
        this.products.push(newProduct)
        return newProduct
    }

    getById(id: number){
        return this.products.find(item => item.id === id)
    }

    delete(id: number){
        const product = this.products.find(item => item === id)
        if(!product) {
            return {error: "Produto não encontrado"}
        }
        this.products = this.products.filter(item => item !== id)
        
        return {message: "Produto removido com sucesso"}
    }

    update(id: number, body: {name: string; price: number; description: string}){
        const product = this.products.find(item => item.id === id)

        if(!product){
            return {error: "Produto não encontrado"}
        }

       product.name = body.name
       product.price = body.price
       product.description = body.description

       return product
    }
}
