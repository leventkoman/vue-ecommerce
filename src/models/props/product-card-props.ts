import type { ProductForGetDto } from '@/models/dto/product-for-get.dto.ts'

type ProductType = Pick<
  ProductForGetDto,
  | 'id'
  | 'title'
  | 'description'
  | 'price'
  | 'discountPercentage'
  | 'rating'
  | 'brand'
  | 'stock'
  | 'thumbnail'
>

export interface ProductCardProps extends ProductType {
}
