import PaymentController from './controller/PaymentController.js';

class App {
  constructor() {
    this.controller = new PaymentController();
  }

  async run() {
    this.controller.preparePayment();
  }
}

export default App;
