import { Sort } from "../sort/sort.model";

export class Pageable {
  sort: Sort = new Sort();
  pageNumber!: number;
  pageSize!: number;
  offset!: number;
  paged!: boolean;
  unpaged!: boolean;
}
