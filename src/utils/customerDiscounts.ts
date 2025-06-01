/**
 * Customer Discount Utilities
 * Handles discount calculation and application logic for customers
 */

export interface DiscountApplication {
  discount: number;
  discountReason: string;
  discountAppliedBy: string;
  discountAppliedAt: number;
}

export interface DiscountCalculationResult {
  totalAmountBeforeDiscount: number;
  finalTotalAmount: number;
  discount: number;
  effectiveDiscount: number; // Actual discount applied (may be less than requested if it exceeds total)
  hasDiscount: boolean;
}

/**
 * Calculate final amount after applying discount
 * @param totalAmount - Original total amount from animals
 * @param discount - Discount amount in NIS (can be 0 or undefined)
 * @returns Calculation result with all relevant amounts
 */
export function calculateDiscountedAmount(
  totalAmount: number, 
  discount?: number
): DiscountCalculationResult {
  const discountValue = discount || 0;
  const hasDiscount = discountValue > 0;
  
  // Ensure discount doesn't exceed total amount
  const effectiveDiscount = Math.min(discountValue, totalAmount);
  const finalTotalAmount = Math.max(0, totalAmount - effectiveDiscount);
  
  return {
    totalAmountBeforeDiscount: totalAmount,
    finalTotalAmount,
    discount: discountValue,
    effectiveDiscount,
    hasDiscount
  };
}

/**
 * Calculate customer balance with discount consideration
 * @param totalAmount - Original total amount from animals
 * @param totalPaidNIS - Total amount paid by customer
 * @param discount - Discount amount in NIS (optional)
 * @returns Final balance after discount
 */
export function calculateCustomerBalance(
  totalAmount: number,
  totalPaidNIS: number,
  discount?: number
): number {
  const { finalTotalAmount } = calculateDiscountedAmount(totalAmount, discount);
  return finalTotalAmount - totalPaidNIS;
}

/**
 * Apply discount to customer with audit trail
 * @param newDiscount - New discount amount
 * @param reason - Reason for discount
 * @param appliedBy - User who applied the discount
 * @returns Discount application object with audit trail
 */
export function applyDiscount(
  newDiscount: number,
  reason: string,
  appliedBy: string
): DiscountApplication {
  if (newDiscount < 0) {
    throw new Error('Discount amount cannot be negative');
  }
  
  if (!reason.trim()) {
    throw new Error('Discount reason is required');
  }
  
  if (!appliedBy.trim()) {
    throw new Error('Discount applied by field is required');
  }
  
  return {
    discount: newDiscount,
    discountReason: reason.trim(),
    discountAppliedBy: appliedBy.trim(),
    discountAppliedAt: Date.now()
  };
}

/**
 * Remove discount from customer
 * @param reason - Reason for removing discount
 * @param removedBy - User who removed the discount
 * @returns Discount application object that removes the discount
 */
export function removeDiscount(
  reason: string,
  removedBy: string
): DiscountApplication {
  if (!reason.trim()) {
    throw new Error('Reason for removing discount is required');
  }
  
  if (!removedBy.trim()) {
    throw new Error('Removed by field is required');
  }
  
  return {
    discount: 0,
    discountReason: `إزالة الخصم: ${reason.trim()}`,
    discountAppliedBy: removedBy.trim(),
    discountAppliedAt: Date.now()
  };
}

/**
 * Validate discount amount
 * @param discount - Discount amount to validate
 * @param totalAmount - Total amount to validate against
 * @returns True if valid, throws error if invalid
 */
export function validateDiscount(discount: number, totalAmount: number): boolean {
  if (discount < 0) {
    throw new Error('الخصم لا يمكن أن يكون سالب');
  }
  
  if (discount > totalAmount) {
    throw new Error('الخصم لا يمكن أن يكون أكبر من المبلغ الإجمالي');
  }
  
  return true;
}

/**
 * Format discount display text
 * @param discount - Discount amount
 * @param currency - Currency symbol (default: 'ش.ج')
 * @returns Formatted discount text
 */
export function formatDiscountDisplay(discount?: number, currency: string = 'ش.ج'): string {
  if (!discount || discount <= 0) {
    return 'لا يوجد خصم';
  }
  
  return `خصم ${discount.toLocaleString()} ${currency}`;
}

/**
 * Get discount percentage (for display purposes)
 * @param discount - Discount amount
 * @param totalAmount - Total amount before discount
 * @returns Discount percentage
 */
export function calculateDiscountPercentage(discount: number, totalAmount: number): number {
  if (totalAmount <= 0 || discount <= 0) {
    return 0;
  }
  
  return Math.round((discount / totalAmount) * 100);
}

/**
 * Check if customer has active discount
 * @param discount - Current discount amount
 * @returns True if customer has an active discount
 */
export function hasActiveDiscount(discount?: number): boolean {
  return Boolean(discount && discount > 0);
}

/**
 * Calculate savings from discount
 * @param totalAmountBeforeDiscount - Original total amount
 * @param finalTotalAmount - Amount after discount
 * @returns Savings amount
 */
export function calculateSavings(totalAmountBeforeDiscount: number, finalTotalAmount: number): number {
  return Math.max(0, totalAmountBeforeDiscount - finalTotalAmount);
}
