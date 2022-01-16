const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const productSchema = new Schema(
  {
    brand: {
      type: String,
      required: 'The guitar needs a brand!',
      minlength: 1,
      maxlength: 50
    },
    condition: {
      type: String,
      required: `The guitar needs condition`,
    },
    price: {
        type: Number,
        required: 'The guitar needs a price',
        minlength: 1,
        maxlength: 50
    },
    color: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
        type: String,
        required: true
    },

  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Product = model('Product', productSchema);

module.exports = Product;
