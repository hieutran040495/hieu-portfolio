import { Deserializable } from '@/shared/interfaces/deserializable';
import { RequestResponse } from '@/shared/interfaces/request-response';

export interface PaginationInterface {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

export class Pagination implements Deserializable<Pagination>, RequestResponse {
  current_page: number = 1;
  data: any[] = [];
  last_page: number = 1;
  per_page: number = 48;
  total: number = 1;

  get isPagination(): boolean {
    return this.total > this.per_page;
  }

  deserialize(input: Partial<RequestResponse>): Pagination {
    Object.assign(this, input);
    return this;
  }

  paginationJson() {
    return {
      page: this.current_page,
      per_page: this.per_page,
    };
  }

  resetPagination() {
    this.current_page = 1;
  }
}
