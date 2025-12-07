import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateProductUseCase } from '../application/use-cases/create-product.use-case';
import { FindAllProductUseCase } from '../application/use-cases/find-all-product.use-case';
import { CreateProductDto } from 'src/modules/product3/dto/create-product.dto';

@Controller('products')
export class ProductController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly findAllProductUseCase: FindAllProductUseCase,
  ) {}

  @Post()
  async create(@Body() dto: CreateProductDto) {
    return this.createProductUseCase.execute(dto);
  }

  @Get()
  async findAll() {
    return this.findAllProductUseCase.execute();
  }
}
