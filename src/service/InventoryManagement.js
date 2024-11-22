import Inventory from '../model/Inventory.js';

class InventoryManagement {
  constructor() {
    this.inventory = new Inventory();
  }

  setInventoryArr(inventory) {
    const result = [];

    Object.entries(inventory).forEach(([name, data]) => {
      const { price, variants } = data;

      variants.forEach((variant) => {
        result.push([name, price, variant.quantity, variant.promotion]);
      });
    });

    return result;
  }
}
export default InventoryManagement;
