import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductRepository } from '../../domain/repositories/product.repository';
import { Product } from '../../domain/entitites/product.entity';
import { ProductEntity } from '../orm-entities/product-typeorm.orm-entity';

@Injectable()
export class ProductTypeormRepository implements ProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async create(product: Product): Promise<Product> {
    const createdProduct = await this.productRepository.save(product);
    return new Product(
      createdProduct.id,
      createdProduct.name,
      createdProduct.price,
      createdProduct.description,
      createdProduct.stock,
      createdProduct.category_id,
    );
  }

  async findAll(): Promise<Product[]> {
    const typeormProducts = await this.productRepository.find();
    return typeormProducts.map(
      (product) =>
        new Product(
          product.id,
          product.name,
          product.price,
          product.description,
          product.stock,
          product.category_id,
        ),
    );
  }

  async findOne(id: string): Promise<Product | null> {
    const productEntity = await this.productRepository.findOne({
      where: { id },
    });
    if (!productEntity) {
      return null;
    }
    return new Product(
      productEntity.id,
      productEntity.name,
      productEntity.price,
      productEntity.description,
      productEntity.stock,
      productEntity.category_id,
    );
  }

  async update(id: string, product: Product): Promise<Product> {
    const updatedProduct = await this.productRepository.save({
      ...product,
      id,
    });
    return new Product(
      updatedProduct.id,
      updatedProduct.name,
      updatedProduct.price,
      updatedProduct.description,
      updatedProduct.stock,
      updatedProduct.category_id,
    );
  }

  async delete(id: string): Promise<void> {
    await this.productRepository.delete(id);
  }
}
