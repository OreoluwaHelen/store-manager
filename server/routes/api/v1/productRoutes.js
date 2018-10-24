import express from 'express';
import productController from '../../../controller/productController';

const route = express.Router();

route.get('/', productController.getProducts);

route.get('/:productId', productController.getSingleProduct);

route.post('/', productController.createProduct);

export default route;
