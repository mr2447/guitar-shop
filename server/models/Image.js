const { Schema, model, Mongoose } = require('mongoose');

const imageSchema = new Schema({
    name: String,
    desc: String,
    img: 
    {
        data: Buffer,
        contentType: String
    }
});

//Image is a mofel which has a schema imageSchema
const Image = model('Image', imageSchema)

module.exports = Image