export interface PaginatorResult<T> {
  limit: number;
  products: T[];
  skip: number;
  total: number;
}
