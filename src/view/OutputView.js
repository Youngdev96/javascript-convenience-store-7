import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../utils/constants/message.js';

class OutputView {
  printGreeting() {
    Console.print(MESSAGE.GREETING_MESSAGE);
  }
}

export default OutputView;
