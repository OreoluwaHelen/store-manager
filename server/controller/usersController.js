import db from '../db';

const bcrypt = require('bcrypt');

const { Users } = db;

class usersController {
  static newUser(req, res) {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
         res.status(500).json({
          status: 'fail',
        });
        return;
      }
    const users = {
        id: Users.length + 1,
        username: req.body.username,
        password: hash,
      };
      Users.push(users);
       res.status(201).send({
        status: 'success',
        message: 'sign up successful',
        users,
      });
    });
  }

  static oldUser(req, res) {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
         res.status(500).json({
          status: 'fail',
        });
        return;
      }
    const users = {
        id: Users.length + 1,
        username: req.body.username,
        password: hash,
      };
      Users.push(users);
       res.status(201).send({
        status: 'success',
        message: 'sign in successful',
        users,
      });
    });

  }


}


export default usersController;

