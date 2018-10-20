import db from '../db';

const { products } = db;

const productController = {
  getProducts: (req, res) => {
    res.status(200).send({
      status: 'success',
      products,
    });
  },

  createProduct: (req, res) => {
    const product = {
      id: products.length + 1,
      name: req.body.name,
      desc: req.body.desc,
      stock: req.body.stock,
      availableStock: req.body.availableStock,
    };
    products.push(product);
    res.status(201).send({
      status: 'success',
      message: 'product was created successfully',
      product,

    });
  },

  getSingleProduct: (req, res) => {
    products.forEach((product) => {
      if (product.id === Number(req.params.productId)) {
        return res.status(200).send({
          status: 'success',
          product,
        });
      }
    });
    return res.status(404).send({
      status: 'fail',
      message: 'product not found',
    });
  },
};


export default productController;
