import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../utils/constants/message.js';

class InputView {
  async userOrderInput() {
    while (true) {
      try {
        const userOrder = await Console.readLineAsync(MESSAGE.ORDER_PROMPT);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}
export default InputView;
