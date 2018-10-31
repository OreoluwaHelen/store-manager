import express from 'express';


import usersController from '../../../controllers/userController';

const route = express.Router();
// route.post('/signup', usersController.newUser);
route.get ('/signin', usersController);


export default route;

