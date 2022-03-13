const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    company: { type: String, required: true },
    description: { type: String, required: true },
    discount: { type: Number, required: true },
    image: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

module.exports = model("product", productSchema);
