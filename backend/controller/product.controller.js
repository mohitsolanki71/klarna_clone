const express = require("express");

const Product = require("../model/product.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    let product = await Product.create(req.body);

    return res.status(201).send({ product });
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
  }
});

router.get("", async (req, res) => {
  try {
    let products = await Product.find().lean().exec();

    return res.status(201).send(products);
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let product = await Product.findById(req.params.id).lean().exec();

    return res.status(201).send(product);
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    let product = await Product.findByIdAndUpdate(request.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(201).send({ product });
  } catch (e) {
    res.status(500).json({ status: "Failed", message: e.message });
  }
});

module.exports = router;
