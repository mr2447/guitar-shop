const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const imageSchema = new Schema(
    {
        image: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
        }
    },
    {
        toJSON: {
            getters: true
          }
    }
);


// //Image is a model which has a schema imageSchema
// const Image = model('Image', imageSchema)
// module.exports = Image

module.exports = imageSchema