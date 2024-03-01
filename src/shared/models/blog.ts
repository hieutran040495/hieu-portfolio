import { Deserializable } from '@/shared/interfaces/deserializable';
import moment from 'moment';

export interface BlogInterface {
  id?: number;
  name: string;
  image_url: string;
  describe: string;
  created_at: string;
}

export class Blog implements Deserializable<Blog>, BlogInterface {
  id?: number;
  name: string = '';
  image_url: string = '';
  describe: string = '';
  created_at: string = '';

  get createdAtString() {
    const arr = this.created_at.split('/');

    return moment(this.created_at).format('LL')
  }

  deserialize(input: Partial<BlogInterface>): Blog {
    Object.assign(this, input);
    return this;
  }
}
