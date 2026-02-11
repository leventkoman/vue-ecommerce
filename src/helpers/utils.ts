export function calculateDiscountPercentage(price: number, discount: number): string {
  if (price === 0 || discount < 0 || discount > 100) return price.toString(2);
  const result = price - price * (discount / 100)
  return result.toFixed(2); // 100 - (100 * 25 /100)
}
export function slugify(slug: string): string {
  if (!slug) return '';
  return slug
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
}
