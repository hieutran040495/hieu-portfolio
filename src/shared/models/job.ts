import { Deserializable } from '@/shared/interfaces/deserializable';
import moment from 'moment';

export interface JobInterface {
  id?: number;
  name: string;
  employer_name: string;
  image_url: string;
  start_at: string;
  position: string;
  tags: string[];
  address: string;
  type: string;
}

export class Job implements Deserializable<Job>, JobInterface {
  id?: number;
  name: string;
  employer_name: string;
  image_url: string;
  start_at: string;
  position: string;
  tags: string[];
  address: string;
  type: string;

  get typeString() {
    switch (this.type) {
      case 'part_time':
        return 'Part Time';
      default:
        return ' Full Time';
    }
  }

  get startAtString() {
    return moment(this.start_at).fromNow()
  }

  deserialize(input: Partial<JobInterface>): Job {
    Object.assign(this, input);
    return this;
  }
}
