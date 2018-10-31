import client from '../config';


const getProducts = (req, res) => {
    client.query("SELECT * FROM products", (err, result) => {
        if (err) {
            return res.status(404).json({
                message: 'Product not found'
            })
        }
        res.status(200).json({
            message: "success",
            result
        })
    })
}

const getAProduct = (req, res) => {
    const { product_id} = re.params;
    client.query('SELECT * FROM products WHERE product_id = product_id', (err, result) => {
        if(result.rowCount === 0){
            return res.status(404).json({
                message:"product_id not found"
            })
        }
return res.status(200).json({
    message:"successful",
    result
})

    })
}

const modifyProduct = (req, res) => { 
    const { product_id} = req.params;
    const { product_name, product_description, price, product_quantity, available_quantity } = req.body;
    client.query('UPDATE products SET product_name = product_name, product_description = product_description, price = price, product_quantity = product_quantity, available_quantity = available_quantity WHERE product_id = product_id RETURNING *', (err, result) => {
        if(err){
        return res.status(500).json({
            message:"internal server error"
        })
        }
        if(result.rowCount === 0){
            return res.status(404).json({
                message:"product_id not found"
            })
        }
        return res.status(200).json({
            message:"successful product found.",
            result
        })
    })
}

const deleteProduct = (req, res) => {
    const { product_id} = req.params;
    client.query('DELETE * FROM products WHERE product_id = product_id', (err, result) => {
        if(err){
            return res.status(500).json({
                message:"internal server error"
            })
        }
        if (result.rowCount === 0){
            return res.status(400).json({
                message: "product_id not found"
            })
        }
return res.status(200).json({
    message:"product deleted",
    
})

    })
}

export default {getProducts, modifyProduct, deleteProduct, getAProduct};



