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


  getSingleSaleOrder: (req, res) => {
    let order = null;
    sales.forEach((o) => {
      if (o.id === Number(req.params.orderId)) {
        order = o;
      }
    });

    if (order === null) {
      return res.status(404).send({
        status: 'fail',
        message: 'order not found',
      });
    }
    return res.status(200).send({
      status: 'success',
      order,

    });
  },

};

export default salesController;
