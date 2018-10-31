import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import productRoute from './routes/api/v1/productRoutes';
import salesRoute from './routes/api/v1/salesRoute';
import userRoute from './routes/api/v1/auth/userRoute';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

app.use('/api/v1/products', productRoute);
app.use('/api/v1/sales', salesRoute);
app.use('/api/v1/auth/users', userRoute);

app.get('/', (req, res) => {
  res.send({ message: 'welcome to your store manager' });
});

const port = process.env.PORT || 3000;

app.listen(port, () => { console.log('the app just started'); });

export default app;
