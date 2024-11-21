import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../utils/constants/message.js';
import InventoryManagement from '../service/InventoryManagement.js';

class OutputView {
  constructor() {
    this.inventoryMgt = new InventoryManagement();
  }

  printGreeting() {
    Console.print(MESSAGE.GREETING_MESSAGE);
  }

  printInventory(inventory) {
    const inventoryText = this.inventoryMgt.setInventoryText(inventory);
    inventoryText.forEach((item) => Console.print(item));
  }
}

export default OutputView;
