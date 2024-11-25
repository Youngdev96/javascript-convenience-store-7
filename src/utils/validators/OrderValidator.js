import ERROR_MESSAGE from '../constants/errorMessage.js';

class OrderValidator {
  // 존재하지 않는 상품
  static isExistingProduct(userOrder, inventory) {
    const products = Object.keys(inventory);
    if (!products.includes(userOrder[0])) {
      throw new Error(ERROR_MESSAGE.PRODUCT_NOT_FOUND);
    }
  }

  // 올바르지 않은 형식
  static isValidFormat(userOrder) {
    userOrder.forEach((item) => {
      if (/[^a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]/.test(item)) {
        throw new Error(ERROR_MESSAGE.INVALID_ORDER_FORMAT);
      }
    });
  }

  // 재고수량 초과 구매
  static hasEnoughStock(userOrder, inventory) {
    const product = inventory[userOrder[0]];
    if (!product) return;

    const totalQuantity = product.variants.reduce(
      (sum, variant) => sum + (variant.quantity || 0),
      0,
    );
    if (parseInt(userOrder[1]) > totalQuantity) {
      throw new Error(ERROR_MESSAGE.INSUFFICIENT_STOCK);
    }
  }

  // 잘못된 입력
  static isWrongInput(userOrder) {
    if (!/[ㄱ-ㅣ가-힣]/.test(userOrder[0]) || isNaN(userOrder[1])) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT);
    }
  }
}

export default OrderValidator;
