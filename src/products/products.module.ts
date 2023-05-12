import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProducSchema } from './product.model';
import { ProductsController } from './products.controller';
import { ProductService } from './products.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProducSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductModule {}
