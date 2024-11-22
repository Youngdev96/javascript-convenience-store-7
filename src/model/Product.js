import fs from 'fs';
import path from 'path';

class Product {
  loadProducts() {
    const filePath = path.join(process.cwd(), 'public', 'products.md');
    const mdContents = fs.readFileSync(filePath, 'utf-8');
    const headers = this.getInventoryHeader(mdContents);
    const products = this.getInventoryContents(mdContents);
    return { headers, products };
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
}
export default Product;
