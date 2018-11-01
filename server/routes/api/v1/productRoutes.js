import express from 'express';
import productController from '../../../controllers/productController';
import middlewareController from '../../../controllers/middlewareController';

const route = express.Router();
route.get('/', productController.getProducts);

route.put('/:productId', productController.modifyProduct);
route.delete('/:productId', productController.deleteProduct);

route.post('/:productId', middlewareController.isUserAuthentication, productController.getAProduct);

export default route;
