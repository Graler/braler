import { Pageable } from "../../page/pageable/pageable.model";
import { Sort } from "../../page/sort/sort.model";
import { Person } from "../person.model";

export class PagePerson {
  content: Person[] = new Array();
  pageable: Pageable = new Pageable();
  totalPages!: number;
  totalElements!: number;
  last!: boolean;
  numberOfElements!: number;
  first!: boolean;
  sort: Sort = new Sort();
  number!: number;
  size!: number;
  empty!: boolean;
}
