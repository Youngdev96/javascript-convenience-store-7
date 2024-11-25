import OrderFormatter from '../utils/formatters/OrderFormatter.js';
import OrderValidator from '../utils/validators/OrderValidator.js';
import ERROR_MESSAGE from '../utils/constants/errorMessage.js';

class OrderManagement {
  setUserOrder(user, inventory) {
    if (!user.includes('[', ']')) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT);
    }
    const inputs = OrderFormatter.formatOrder(user);
    inputs.forEach((input) => {
      OrderValidator.isValidFormat(input);
      OrderValidator.isExistingProduct(input, inventory);
      OrderValidator.hasEnoughStock(input, inventory);
      OrderValidator.isWrongInput(input);
    });
    return inputs;
  }
}
export default OrderManagement;
