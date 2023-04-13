const { EntitySchema } = require('typeorm');

class Product {
  constructor(id, category, brand, product_type, product_color, price) {
    this.id = id;
    this.category = category;
    this.brand = brand;
    this.product_type = product_type;
    this.product_color = product_color;
    this.price - price;
  }
}

const ProductSchema = new EntitySchema({
  name: 'Product',
  tableName: 'product',
  target: Product,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    category: {
        type: 'varchar',
    },
    brand: {
        type: 'varchar',
    },
    product_type: {
        type: 'varchar',
    },
    product_color: {
    type: 'varchar',
    },
    price: {
        type: 'float',
    },
  },
});

module.exports = { ProductSchema, Product};