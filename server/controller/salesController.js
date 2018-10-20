import db from '../db';

const { sales } = db;

const salesController = {
  createSale: (req, res) => {
    const order = {
      id: sales.length + 1,
      products: req.body.products,
      totalPrice: req.body.totalPrice,
    };

    sales.push(order);
    res.status(201).send({
      status: 'success',
      message: 'order created successfully',
      order,
    });
  },
};

export default salesController;
