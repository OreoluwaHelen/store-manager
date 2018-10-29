import express from 'express';


import usersController from '../../../controller/usersController';

const route = express.Router();
// route.post('/signup', usersController.newUser);
route.post('/signin', usersController.userLogIn);


export default route;

