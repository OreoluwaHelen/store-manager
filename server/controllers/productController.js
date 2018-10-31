import client from '../config';



const getProducts = (req, res) => {
    client.query("SELECT * FROM products", (err, data) => {
        if (err) {
            return res.status(404).json({
                message: 'Product not found'
            })
        }
        res.status(200).json({
            message: "asdfghjkl",
            data
        })
    })
}

export default getProducts;


