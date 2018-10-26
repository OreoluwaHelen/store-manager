import db from '../db';

const bcrypt = require('bcrypt');

const { Users } = db;

class userController {
  static newUser(req, res) {
    bcrypt.hash(req.body.username, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({
          status: 'fail',
        });
      }

      const users = {
        id: Users.length + 1,
        username: req.body.username,
        password: hash,
      };
      Users.push(users);
      return res.status(201).join({
        status: 'success',
        message: 'sign up successful',
        users,
      });
    });
  }
}


export default userController;
