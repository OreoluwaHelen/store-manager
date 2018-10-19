import express from 'express';
import bodyParser from 'body-parser';
import db from './db';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send({ message: 'welcome to your store manager' });
});

app.post('/api/v1/products', (req, res) => {
  const product = {
    id: db.length + 1,
    name: req.body.name,
    desc: req.body.desc,
    stock: req.body.stock,
    availableStock: req.body.availableStock,
  };
  db.push(product);
  res.status(201).send({
    status: 'success',
    message: 'product was created successfully',
    product,

  });
});

app.get('/api/v1/products', (req, res) => {
  res.status(200).send({
    status: 'success',
    products: db,
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => { console.log('the app just started'); });

export default app;
