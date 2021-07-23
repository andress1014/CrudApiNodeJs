import Product from "../models/Product"

export const createProduct = async (req, res) => {
  const { name, category, price, imgUrl } = req.body
  const newProduct = new Product({ name, category, price, imgUrl })
  const productSaved = await newProduct.save()

  console.log(req.body)
  res.status(201).json(productSaved)
}

export const getProducts = async (req, res) => {
  const products = await Product.find()
  res.json(products)
}

export const getProductsById = async (req, res) => {
  const products = await Product.findById(req.params.productId)
  res.status(200).json(products)
}

export const updateProductById = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
    new: true
  })
  res.status(200).json(updatedProduct);
};

export const deleteProductById = async (req, res) => {
  const { productId } = req.params
  await Product.findByIdAndDelete(productId)
  res.status(204).json()
}