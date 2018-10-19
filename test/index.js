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
  it('should create ', (done) => {
    request
      .post('/api/v1/products')
      .send({
        name: 'macbook',
        desc: 'good laptop',
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
});
