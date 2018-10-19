import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send({ message: 'welcome to your store manager' });
});

app.listen(3000, () => { console.log('the app just started'); });

export default app;
