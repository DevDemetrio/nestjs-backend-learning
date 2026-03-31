import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ProductsModule } from './products/products.module';
// import { ProductsService } from './products/products.service';
// import { AlunoDemetrio, ConhecimentoFaculdade } from './products/products.controller';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [ ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
