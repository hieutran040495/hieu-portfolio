import { Deserializable } from '@/shared/interfaces/deserializable';

export interface BannerInterface {
  id: number;
  title: string;
  sub_title: string;
  description: string;
}

export class Banner implements Deserializable<Banner>, BannerInterface {
  id: number;
  title: string = '';
  sub_title: string = '';
  description: string = '';

  get endTitle() {
    return this.title.split(' ').pop()
  }

  get newTitle() {
    const arrTitle = this.title.split(' ').reverse();
    arrTitle.splice(0, 1);
    return arrTitle.reverse().join(' ');
  }

  deserialize(input: Partial<BannerInterface>): Banner {
    Object.assign(this, input);
    return this;
  }
}
