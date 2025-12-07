import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from 'src/modules/product3/dto/create-product.dto';
import {
  PRODUCT_REPOSITORY,
  type ProductRepository,
} from '../../domain/repositories/product.repository';
import { Product } from '../../domain/entitites/product.entity';

@Injectable()
export class CreateProductUseCase {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: ProductRepository,
  ) {}

  execute(dto: CreateProductDto) {
    const product = Product.create({ ...dto, id: '' });
    return this.productRepository.create(product);
  }
}
