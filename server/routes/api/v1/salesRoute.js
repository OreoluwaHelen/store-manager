import express from 'express';
import salesController from '../../../controllers/salesController';

const route = express.Router();

route.post('/', salesController);

// route.get('/:orderId', salesController.getSingleSaleOrder);
// route.get('/', salesController.getSales);


export default route;

