import express from 'express';
import usersController from '../../../../controllers/userController';
import middlewareController from '../../../../controllers/middlewareController';

const route = express.Router();
route.post('/signup', middlewareController.isUserAuthentication, usersController.newUser);

route.post('/signin', usersController.userLogIn);

route.get('/', usersController.getUser);


export default route;
