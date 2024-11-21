import Inventory from '../model/Inventory.js';
import InventoryFormatter from '../utils/formatters/InventoryFormatter.js';

class InventoryManagement {
  constructor() {
    this.inventory = new Inventory();
  }

  getInventoryValue(stockObj) {
    return stockObj.map((item) => Object.values(item));
  }

  setInventoryText(stockObj) {
    const stock = this.getInventoryValue(stockObj);
    return stock.map((item) => InventoryFormatter.formatInventory(item));
  }
}
export default InventoryManagement;
