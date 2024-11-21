import OutputView from '../view/OutputView.js';

class PaymentController {
  constructor() {
    this.outputView = new OutputView();
  }

  preparePayment() {
    this.outputView.printGreeting();
  }

  proceedPayment() {}

  finishPayment() {}
}
export default PaymentController;
