import fs from 'fs';
import path from 'path';

class Inventory {
  loadProducts() {
    const filePath = path.join(process.cwd(), 'public', 'products.md');
    const mdContents = fs.readFileSync(filePath, 'utf-8');
    const headers = this.getInventoryHeader(mdContents);
    const items = this.getInventoryContents(mdContents);
    return { headers, items };
  }

  getInventoryHeader(mdContents) {
    const lines = mdContents.trim().split('\n');
    const header = lines[0].split(',').map((title) => title.trim());
    return header;
  }

  getInventoryContents(mdContents) {
    const lines = mdContents.trim().split('\n');
    let inventory = [];
    for (let line = 1; line < lines.length; line++) {
      let item = lines[line].split(',').map((content) => content.trim());
      inventory.push(item);
    }
    return inventory;
  }

  createInventoryObj() {
    const { headers, items } = this.loadProducts();
    const inventory = items.map((item) => this.createItemObject(headers, item));
    return inventory;
  }

  createItemObject(headers, item) {
    return headers.reduce((product, header, index) => {
      product[header] = this.formatValue(header, item[index]);
      return product;
    }, {});
  }

  formatValue(header, value) {
    if (header === 'price' || header === 'quantity') {
      return Number(value);
    }
    if (value === 'null') {
      return null;
    }
    return value;
  }
}

export default Inventory;
