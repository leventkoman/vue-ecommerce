import api from '@/services/api.ts'
import type { ProductForGetDto } from '@/models/dto/product-for-get.dto.ts'
import type { PaginatorResult } from '@/models/paginator-result.ts'

export const getAllProducts = () => {
  return api.get<PaginatorResult<ProductForGetDto>>('/products')
}

export const getSearchProducts = (query: string) => {
  console.log("query", query)
  return api.get<PaginatorResult<ProductForGetDto>>(`/search?q=${query}`);
}

export const getProductById = (id: number) => {
  return api.get<ProductForGetDto>(`/products/${id}`)
}
