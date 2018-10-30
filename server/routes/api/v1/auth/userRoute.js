import express from 'express';
import usersController from '../../../../controllers/userController';

const route = express.Router();
route.post ('/signup', usersController.newUser);
route.post ('/signin', usersController.userLogIn);

route.get('/', usersController.getUser);


export default route;

