import express from 'express';
import productController from '../../../controller/productController';
import isUserAuthentication from '../../../controller/middlewareController';

const route = express.Router();

route.get('/', isUserAuthentication, productController.getProducts);

route.get('/:productId', productController.getSingleProduct);

route.post('/', isUserAuthentication, productController.createProduct);

export default route;
