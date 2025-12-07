import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  stock: number;

  @IsNotEmpty()
  category_id: string;
}
