import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../utils/constants/message.js';
import OrderManagement from '../service/OrderManagement.js';

class InputView {
  constructor() {
    this.orderMgt = new OrderManagement();
  }

  async userOrderInput(inventory) {
    while (true) {
      try {
        const userOrder = await Console.readLineAsync(MESSAGE.ORDER_PROMPT);
        const userValue = this.orderMgt.setUserOrder(userOrder, inventory);
        return userValue;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}
export default InputView;
