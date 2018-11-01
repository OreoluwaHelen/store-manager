import jwt from 'jsonwebtoken';
import client from '../config';
import bcrypt from 'bcrypt';


const getUser = (req, res) => {
    client.query("SELECT * FROM users", (err, data) => {
        if (err) {
            return res.status(404).json({
                message: 'user not found'
            })
        }
        res.status(200).json({
            message: "Successful",
            data: data.rows[0]
        })
    })
}

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
      console.log(result.rows);
    if (error) {
      return res.status(500).json({message: 'Internal server error'});
    }
    if (result.rowCount === 0) return res.status(401).json({ message: 'Invalid login credentials'});

    bcrypt.compare(password, result.rows[0].user_password, (err, passresponse) => {
      if (!passresponse) return res.status(401).json({message: 'Invalid login credentials'});
      const token = jwt.sign({
        id: result.rows[0].id,
        user_type: result.rows[0].user_type
      },'secret', {
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
    const { first_name, last_name, telephone, username, password, user_type } = req.body;

    //Form Validation
    req.checkBody('first_name', 'Firstname field is required').notEmpty();
    req.checkBody('last_name', 'Lastname field is required').notEmpty();
    req.checkBody('telephone', 'Telephone field is required').notEmpty();
    req.checkBody('username', 'Username field is required').notEmpty();
    req.checkBody('password', 'Password field is required').notEmpty();
    req.checkBody('user_type', 'User Type field is required').notEmpty();

    const formErrors = req.validationErrors();
    
    if (formErrors) {
    // return helper.sendMessage(res, 404, errors[0].msg);
    res.send('user input is invalid ' +  formErrors )
  }
  client.query(`SELECT * FROM users WHERE username = $1`,[username], (error, result) => {

    if (result.rowCount === 1) return res.status(409).json({ message: 'Duplicate entry found'});
  });
 
   console.log(password);
   bcrypt.hash(password, 10, (error, hash) => {
     console.log(error);
     if (error) {
      console.log(error);
        return res.status(500).json({ message: 'External server error'});
    }
    const query = `INSERT INTO users(first_name, last_name,  telephone, username, user_password, user_type) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`;
console.log(hash);
    client.query(query,[first_name, last_name, telephone, username, hash, user_type], (err, data) => {
      if (err) {
        console.log(err);
          return res.status(500).json({ message: 'Internal server error'});
      }
      return res.status(201).json({ message: 'New user created'});
    });
  });

}

export default { getUser, userLogIn, newUser };

