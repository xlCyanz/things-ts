/**
 * Calculates the discount amount for a given price and discount percentage
 * @param {number} price - The original price of the item
 * @param {number} percentage - The discount percentage (in decimal form)
 * @return {number} - The calculated discount amount
 */
export const discount = (price: number, percentage: number): number => {
  return Number((price * (percentage / 100)).toFixed(0));
};
