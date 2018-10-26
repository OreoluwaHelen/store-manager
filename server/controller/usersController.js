import db from '../db';
import jwt from 'jsonwebtoken';


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

  static userLogIn(req, res) {

    const {username, password } = req.body;

    const loginParams = Users.find (users=> users.username === username  && users.password === password);
    if (loginParams){
      const token = jwt.sign({
        type: `${loginParams.type}`
      }, 'secret', { expiresIn: '1h' });
      return res.status(200).json({
        message: 'welcome, log in successful',
        token
      });
    }
      res.status(404).json({
        message: 'unathorized user'
      })
}
};
export default usersController;

