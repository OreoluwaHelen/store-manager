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
    if (!req.body.name || req.body.name.length < 3) {
      return res.status(400).send({
        status: 'fail',
        message: 'name is required and must be at least 3 letters long',
      });
    }

    const product = {
      id: products.length + 1,
      name: req.body.name,
      desc: req.body.desc,
      price: req.body.price,
      stock: req.body.stock,
      availableStock: req.body.availableStock,
    };
    products.push(product);
    return res.status(201).send({
      status: 'success',
      message: 'product was created successfully',
      product,

    });
  },

  getSingleProduct: (req, res) => {
    let product = null;
    products.forEach((p) => {
      if (p.id === Number(req.params.productId)) {
        product = p;
      }
    });

    if (product === null) {
      return res.status(404).send({
        status: 'fail',
        message: 'product not found',
      });
    }
    return res.status(200).send({
      status: 'success',
      product,

    });
  },
};


export default productController;
