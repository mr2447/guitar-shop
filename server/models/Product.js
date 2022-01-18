const { Schema, model } = require('mongoose');
// const imageSchema = require('./Image')
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
    // images: [imageSchema],
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    publicID: {
      type: String
    },
    username: {
        type: String,
        required: true
    },
    categories: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Category'
      }
    ],

  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Product = model('Product', productSchema);

module.exports = Product;
