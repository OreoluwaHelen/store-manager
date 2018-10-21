import express from 'express';
import salesController from '../controller/salesController';

const route = express.Router();
route.post('/', salesController.createSale);

route.get('/:orderId', salesController.getSingleSaleOrder);


export default route;

