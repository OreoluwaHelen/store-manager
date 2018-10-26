import express from 'express';

import userController from '../../../controller/usersController';

const route = express.Router();
route.post('/signup', userController.newUser);
route.get('/signin', userController.oldUser);


export default route;
