import { Deserializable } from '@/shared/interfaces/deserializable';
import { TODO_TYPE } from '../enums/todo';

export interface TodoInterface {
  id?: number;
  title: string;
  description: string;
  type: string;
  is_done?: boolean;
}

export class Todo implements Deserializable<Todo>, TodoInterface {
  id?: number;
  title: string = '';;
  description: string = '';;
  type: string = '';
  is_done?: boolean = false;

  get isPersonal() {
    return this.type === TODO_TYPE.PERSONAL;
  }

  get isBusiness() {
    return this.type === TODO_TYPE.BUSINESS;
  }

  deserialize(input: Partial<TodoInterface>): Todo {
    Object.assign(this, input);
    return this;
  }

  formJSON() {
    return {
      id: Date.now(),
      title: this.title,
      description: this.description,
      type: this.type,
    }
  }
}
