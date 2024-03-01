import { Deserializable } from '@/shared/interfaces/deserializable';

export interface CategoryInterface {
  id?: number;
  name: string;
}

export class Category implements Deserializable<Category>, CategoryInterface {
  id: number;
  name: string = '';

  deserialize(input: Partial<CategoryInterface>): Category {
    Object.assign(this, input);
    return this;
  }
}
