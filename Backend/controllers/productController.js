import Product from "../models/productsModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

// @desc  Fetch all products
// @route GET /api/products
// @access public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
}); 

// @desc  Fetch productsByID
// @route GET /api/products/:id
// @access public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(400);
    throw new Error("Resource Not Found");
  }
});

export { getProducts, getProductById };
