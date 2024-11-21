class InventoryFormatter {
  static formatInventory([name, price, quantity, promotion]) {
    return `- ${name} ${this.formatPrice(price)} ${this.formatQuantity(quantity)} ${this.formatPromotion(promotion)}`;
  }

  static formatPrice(price) {
    return `${price.toLocaleString()}원`;
  }

  static formatPromotion(promotion) {
    if (!promotion) return '';
    return `${promotion}`;
  }

  static formatQuantity(quantity) {
    if (quantity === 0) return '재고 없음';
    return `${quantity}개`;
  }
}

export default InventoryFormatter;
