import Inventory from '../model/Inventory.js';
import OutputView from '../view/OutputView.js';
import InputView from '../view/InputView.js';

class PaymentController {
  constructor() {
    this.inventory = new Inventory();
    this.outputView = new OutputView();
    this.inputView = new InputView();
  }

  preparePayment() {
    this.outputView.printGreeting();
    const inventory = this.inventory.createInventoryObj();
    this.outputView.printInventory(inventory);
    return inventory;
  }

  proceedPayment(inventory) {
    this.inputView.userOrderInput();
  }

  finishPayment() {}
}
export default PaymentController;
