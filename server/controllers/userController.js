<<<<<<< HEAD
import jwt from 'jsonwebtoken';
=======

>>>>>>> 9bfec806493e1a9215dacba9d8f5ce3115690aa7
import client from '../config';



const getUser = (req, res) => {
    client.query("SELECT * FROM users", (err, data) => {
        if (err) {
            return res.status(404).json({
                message: 'user not found'
            })
        }
        res.status(200).json({
<<<<<<< HEAD
            message: "Successful",
=======
            message: "asdfghjkl",
>>>>>>> 9bfec806493e1a9215dacba9d8f5ce3115690aa7
            data: data.rows[0]
        })
    })
}

<<<<<<< HEAD
const userLogIn = (req, res) => {
    const { username, password } = req.body;

    // Validate user input 
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('password', 'Password field is required').notEmpty();

    // check Errors
    const formErrors = req.validationErrors();

    if (formErrors) {
        return res.status(404).json({ message: formErrors[0]});
    }

    client.query('SELECT * FROM users WHERE username = username', (error, result) => {
    if (error) {
      return res.status(500).json({message: 'Internal server error'});
    }
    if (result.rowCount === 0) return res.status(401).json({ message: 'Invalid login credentials'});

    bcrypt.compare(password, result.rows[0].user_password, (err, passresponse) => {
      if (!passresponse) return helper.sendMessage(res, 401, 'Invalid login credentials');
      const token = jwt.sign({
        id: result.rows[0].id,
        user_type: result.rows[0].user_type
      }, process.env.LOGINSECRET, {
        expiresIn: '1d'
      });
      res.status(201).json({
          message: 'Login successful',
          authenticationToken: token
      });
    });
  });
}

const newUser = (req, res) => {
    const { first_name, last_name, date_of_employment, telephone, username, user_password, user_type } = req.body;

    //Form Validation
    req.checkBody('first_name', 'Firstname field is required').notEmpty();
    req.checkBody('last_name', 'Lastname field is required').notEmpty();
    req.checkBody('date_of_employement', 'Employement date field is required').notEmpty();
    req.checkBody('telephone', 'Telephone field is required').notEmpty();
    req.checkBody('username', 'Username field is required').notEmpty();
    req.checkBody('password', 'Password field is required').notEmpty();
    req.checkBody('user_type', 'User Type field is required').notEmpty();

    const formErrors = req.validationErrors();
    
    if (errors) {
    return helper.sendMessage(res, 404, errors[0].msg);
  }
  client.query('SELECT * FROM users WHERE username = username', (error, result) => {
    if (result.rowCount === 1) return res.status(409).json({ message: 'Duplicate entry found'});
  });
 
  bcrypt.hash(password, 10, (errr, hash) => {
    const query = `INSERT INTO users(first_name, last_name, date_of_employement, telephone, username, password, user_type) VALUES('first_name', 'last_name', 'date_of_employement', 'telephone', 'username', 'hash', 'user_type') RETURNING *`;

    client.query(query, (err, data) => {
      if (err) {
          return res.status(500).json({ message: 'Internal server error'});
      }
      return res.status(201).json({ message: 'New user created'});
    });
  });

}

export default { getUser, userLogIn, newUser };
=======
export default getUser;

// import db from '../db';
// import jwt from 'jsonwebtoken';


// const { Users } = db;

// class usersController {
//   static newUser(req, res) {
//     bcrypt.hash(req.body.password, 10, (err, hash) => {
//       if (err) {
//          res.status(500).json({
//           status: 'fail',
//         });
//         return;
//       }
//     const users = {
//         id: Users.length + 1,
//         username: req.body.username,
//         password: hash,
//       };
//       Users.push(users);
//        res.status(201).send({
//         status: 'success',
//         message: 'sign up successful',
//         users,
//       });
//     });
//   }

//   static userLogIn(req, res) {

//     const {username, password } = req.body;

//     const loginParams = Users.find (users=> users.username === username  && users.password === password);
//     if (loginParams){
//       const token = jwt.sign({
//         type: `${loginParams.type}`
//       }, 'secret', { expiresIn: '1h' });
//       return res.status(200).json({
//         message: 'welcome, log in successful',
//         token
//       });
//     }
//       res.status(404).json({
//         message: 'unathorized user'
//       })
// }
// };
// export default usersController;
>>>>>>> 9bfec806493e1a9215dacba9d8f5ce3115690aa7

