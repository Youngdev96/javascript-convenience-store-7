import PaymentController from './controller/PaymentController.js';

class App {
  constructor() {
    this.controller = new PaymentController();
  }

  async run() {
    const inventory = this.controller.preparePayment();
    this.controller.proceedPayment(inventory);
  }
}

export default App;
