import express from 'express';
import productController from '../../../controllers/productController';
import middlewareController from '../../../controllers/middlewareController'

const route = express.Router();



route.get('/', productController);

// route.get('/:productId', productController.getSingleProduct);

// route.post('/', isUserAuthentication, productController.createProduct);

export default route;
