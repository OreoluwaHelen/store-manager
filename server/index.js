import express from 'express';
import bodyParser from 'body-parser';
import productRoute from './routes/productRoutes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1/products', productRoute);

app.get('/', (req, res) => {
  res.send({ message: 'welcome to your store manager' });
});

const port = process.env.PORT || 3000;

app.listen(port, () => { console.log('the app just started'); });

export default app;
