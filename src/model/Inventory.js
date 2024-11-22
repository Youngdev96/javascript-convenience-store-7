import Product from './Product.js';

class Inventory {
  constructor() {
    this.product = new Product();
  }

  createInventoryObj() {
    const { products } = this.product.loadProducts();
    const baseInventory = this.createProductObj(products);
    const normalizedInventory = this.normalizeVariants(baseInventory);

    return normalizedInventory;
  }

  createProductObj(products) {
    return products.reduce((inventory, [name, price, quantity, promotion]) => {
      if (!inventory[name]) {
        inventory[name] = {
          price: Number(price),
          variants: [],
        };
      }

      inventory[name].variants.push({
        quantity: Number(quantity),
        promotion: this.formatPromotion(promotion),
      });

      return inventory;
    }, {});
  }

  normalizeVariants(inventory) {
    const normalized = { ...inventory };

    Object.keys(normalized).forEach((name) => {
      const product = normalized[name];
      if (this.needsNormalVariant(product.variants)) {
        product.variants.push(this.createNormalVariant());
      }
    });

    return normalized;
  }

  needsNormalVariant(variants) {
    const hasPromoVariant = variants.some((v) => v.promotion !== null);
    const hasNormalVariant = variants.some((v) => v.promotion === null);
    return hasPromoVariant && !hasNormalVariant;
  }

  createNormalVariant() {
    return {
      quantity: 0,
      promotion: null,
    };
  }

  formatPromotion(promotion) {
    if (promotion === 'null') {
      return null;
    }
    return promotion;
  }
}

export default Inventory;
