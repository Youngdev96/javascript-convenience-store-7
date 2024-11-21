import OutputView from '../view/OutputView.js';
import Inventory from '../model/Inventory.js';

class PaymentController {
  constructor() {
    this.outputView = new OutputView();
    this.inventory = new Inventory();
  }

  preparePayment() {
    this.outputView.printGreeting();
    const inventory = this.inventory.createInventoryObj();
    this.outputView.printInventory(inventory);
  }

  proceedPayment() {}

  finishPayment() {}
}
export default PaymentController;
