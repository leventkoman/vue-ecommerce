export interface ProductForGetDto {
  id: number
  title: string
  description: string
  price: number
  category?: string
  discountPercentage: number
  rating: number
  stock?: number
  tags?: string[]
  brand: string
  sku?: string
  thumbnail: string
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: string;
  minimumOrderQuantity: number;
  images: string[]
}
