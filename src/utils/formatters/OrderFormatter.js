class OrderFormatter {
  static formatOrder(input) {
    return input
      .replace(/[\[\]]/g, '')
      .split(',')
      .map((item) => {
        const [name, quantity] = item.split('-');
        return [name, Number(quantity)];
      });
  }
}
export default OrderFormatter;
