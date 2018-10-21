import supertest from 'supertest';
import chai from 'chai';

import app from '../server/index';

const request = supertest(app);
const { expect } = chai;

const product = {
  id: 2,
  name: 'macbook',
  desc: 'good laptop',
  stock: 2,
  availableStock: 1,
};

const products = [
  {
    id: 1,
    name: 'macbook',
    desc: 'good laptop',
    stock: 2,
    availableStock: 1,
  },
  {
    id: 2,
    name: 'macbook',
    desc: 'good laptop',
    stock: 2,
    availableStock: 1,
  },
];
describe('initial Testing', () => {
  it('should display welcome', (done) => {
    request
      .get('/')
      .end((err, res) => {
        expect(res.body.message).to.equal('welcome to your store manager');
        done();
      });
  });
});

describe('Product Endpoint', () => {
  it('should create a product ', (done) => {
    request
      .post('/api/v1/products')
      .send({
        name: 'macbook',
        desc: 'good laptop',
        price: 5000,
        stock: 2,
        availableStock: 1,
      })
      .end((err, res) => {
        expect(res.body.status).to.equal('success');
        expect(res.body.message).to.equal('product was created successfully');
        expect(res.body.product).to.be.an('object');
        expect(res.body.product.id).to.equal(product.id);
        done(err);
      });
  });

  it('should create a product ', (done) => {
    request
      .post('/api/v1/products')
      .send({
        desc: 'good laptop',
        price: 5000,
        stock: 2,
        availableStock: 1,
      })
      .end((err, res) => {
        expect(res.body.status).to.equal('fail');
        expect(res.body.message).to.equal('name is required and must be at least 3 letters long');
        done(err);
      });
  });

  it('should get productS', (done) => {
    request
      .get('/api/v1/products')
      .end((err, res) => {
        expect(res.body.status).to.equal('success');
        expect(res.body.products).to.be.an('array');
        done(err);
      });
  });

  it('should get product with id', (done) => {
    request
      .get('/api/v1/products/1')
      .end((err, res) => {
        expect(res.body.status).to.be.equal('success');
        expect(res.body.product).to.be.an('object');
        done(err);
      });
  });

  it('should not get product with wrong id', (done) => {
    request
      .get('/api/v1/products/10000000')
      .end((err, res) => {
        expect(res.body.status).to.be.equal('fail');
        expect(res.body.message).to.be.equal('product not found');
        done(err);
      });
  });
});

describe('Order Endpoint', () => {
  it('should create sale order', (done) => {
    request
      .post('/api/v1/sales')
      .send({
        products: [
          {
            product: 'macbook',
            quantity: 2,
            price: 5000000,
          },
        ],
        totalPrice: 2000000,
      })
      .end((err, res) => {
        expect(res.body.status).to.equal('success');
        expect(res.body.order).to.be.an('object');
        expect(res.body.message).to.equal('order created successfully');
        expect(res.body.order.products).to.be.an('array');
        done(err);
      });
  });

  it('should get sale order with id', (done) => {
    request
      .get('/api/v1/sales/1')
      .end((err, res) => {
        expect(res.body.status).to.be.equal('success');
        expect(res.body.order).to.be.an('object');
        expect(res.body.order.products).to.be.an('array');
        done(err);
      });
  });

  it('should not get sale order with wrong id', (done) => {
    request
      .get('/api/v1/sales/10000000')
      .end((err, res) => {
        expect(res.body.status).to.be.equal('fail');
        expect(res.body.message).to.be.equal('order not found');
        done(err);
      });
  });
});
