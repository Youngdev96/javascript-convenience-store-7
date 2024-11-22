import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../utils/constants/message.js';
import InventoryManagement from '../service/InventoryManagement.js';
import InventoryFormatter from '../utils/formatters/InventoryFormatter.js';

class OutputView {
  constructor() {
    this.inventoryMgt = new InventoryManagement();
  }

  printGreeting() {
    Console.print(MESSAGE.GREETING_MESSAGE);
  }

  printInventory(inventory) {
    const inventoryArray = this.inventoryMgt.setInventoryArr(inventory);
    inventoryArray
      .map((item) => InventoryFormatter.formatInventory(item))
      .forEach((line) => Console.print(line));
    Console.print('');
  }
}

export default OutputView;
