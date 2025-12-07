interface ProductParams {
  id: string;
  name: string;
  price: number;
  description: string;
  stock: number;
  category_id: string;
}

export class Product {
  private constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly price: number,
    public readonly description: string,
    public readonly stock: number,
    public readonly category_id: string,
  ) {}

  static create(params: ProductParams) {
    return new Product(
      params.id,
      params.name,
      params.price,
      params.description,
      params.stock,
      params.category_id,
    );
  }

  isAvailable() {
    return this.stock > 0;
  }
}
