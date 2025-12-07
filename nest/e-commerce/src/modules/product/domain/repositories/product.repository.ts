import { Product } from '../entitites/product.entity';

export const PRODUCT_REPOSITORY = 'PRODUCT_REPOSITORY';

export interface ProductRepository {
  create(product: Product): Promise<Product>;
  findAll(): Promise<Product[]>;
  findOne(id: string): Promise<Product | null>;
  update(id: string, product: Product): Promise<Product>;
  delete(id: string): Promise<void>;
}
