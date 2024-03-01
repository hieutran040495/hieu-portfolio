import { Deserializable } from '@/shared/interfaces/deserializable';
import { Category } from './category';

export interface ProductInterface {
  id?: number;
  name: string;
  fee: number;
  image_url: string;
  category: Category;
}

export class Product implements Deserializable<Product>, ProductInterface {
  id?: number;
  name: string = '';
  fee: number;
  image_url: string = '';
  category: Category = new Category();

  get imagePath() {
    return require(`${this.image_url}.jpg`);
  }

  deserialize(input: Partial<ProductInterface>): Product {
    Object.assign(this, input);
    return this;
  }
}
