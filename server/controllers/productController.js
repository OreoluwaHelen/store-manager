import client from '../config';
console.log(client);

// const createProducts = (req, res) => {
//     const { , last_name, telephone, username, password, user_type } = req.body;

//     //Form Validation
//     req.checkBody('first_name', 'Firstname field is required').notEmpty();
//     req.checkBody('last_name', 'Lastname field is required').notEmpty();
//     req.checkBody('telephone', 'Telephone field is required').notEmpty();
//     req.checkBody('username', 'Username field is required').notEmpty();
//     req.checkBody('password', 'Password field is required').notEmpty();
//     req.checkBody('user_type', 'User Type field is required').notEmpty();

// }


const getProducts = (req, res) => {
    client.query("SELECT * FROM products", (err, result) => {
      return  res.status(200).json({
            message: "success",
            result: result.rows
        })
    })
}

const getAProduct = (req, res) => {
    const {productId} = req.params;
    client.query('SELECT * FROM products WHERE product_id = $1', [productId], (err, result) => {
        if (err) return res.status(400).json({ message: "No product found"});

        if(result.rowCount === 0){
            return res.status(404).json({
                message:"product_id not found"
            })
        }
        return res.status(200).json({
            message:"successful",
            result: result.rows[0]
        })
    })
}

const modifyProduct = (req, res) => { 
    const { productId} = req.params;
    const { product_name, product_description, price, product_quantity, available_quantity } = req.body;
    client.query('UPDATE products SET product_name = $1, product_description = $2, price = $3, product_quantity = $4, available_quantity = $5 WHERE product_id = productId RETURNING *', (err, result) => {
        if(err){
        return res.status(500).json({
            message:"internal server error"
        })
        }
        if(result.rowCount === 0){
            return res.status(404).json({
                message:"productId not found"
            })
        }
        return res.status(200).json({
            message:"successful, product found.",
            result
        })
    })
}

const deleteProduct = (req, res) => {
    const { productId} = req.params;
    client.query(`DELETE FROM products WHERE product_id = ${productId}`, (err, result) => {
        if(err){ 
            console.log(err);
            return res.status(500).json({
                message: "internal server error"
            })
        }
        if (result.rowCount === 0){
            return res.status(400).json({
                message: "productId not found"
            })
        }
        return res.status(200).json({
            message:"product deleted",
            
        })

    })
}

export default {getProducts, modifyProduct, deleteProduct, getAProduct};



