import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from '../infrastructure/orm-entities/product-typeorm.orm-entity';
import { PRODUCT_REPOSITORY } from '../domain/repositories/product.repository';
import { ProductTypeormRepository } from '../infrastructure/repositories/product-typeorm.repository';
import { CreateProductUseCase } from '../application/use-cases/create-product.use-case';
import { FindAllProductUseCase } from '../application/use-cases/find-all-product.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductController],
  providers: [
    {
      provide: PRODUCT_REPOSITORY,
      useValue: ProductTypeormRepository,
    },
    CreateProductUseCase,
    FindAllProductUseCase,
  ],
})
export class ProductModule {}
