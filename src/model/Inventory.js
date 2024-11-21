import fs from 'fs';
import path from 'path';

class Inventory {
  loadProducts() {
    const filePath = path.join(process.cwd(), 'public', 'products.md');
    const mdContents = fs.readFileSync(filePath, 'utf-8');
    const headers = this.getInventoryHeader(mdContents);
  }

  getInventoryHeader(mdContents) {
    console.log(mdContents);
  }
}

export default Inventory;
