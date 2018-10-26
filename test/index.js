import supertest from 'supertest';
import chai from 'chai';
import app from '../server/index';

const request = supertest(app);
const { expect } = chai;



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

  // test for post/create a product
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
        // expect(res.body.product).to.be.an('object');
        // expect(res.body.product.id).to.equal(product.id);
        done(err);
      });
  });
    //  input validation for product name
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
      // ends here

      // get all products
it('should get productS', (done) => {
    request
      .get('/api/v1/products')
      .end((err, res) => {
        expect(res.body.status).to.equal('success');
        expect(res.body.products).to.be.an('array');
        done(err);
      });
  });

      // get product by Id
  it('should get product with id', (done) => {
    request
      .get('/api/v1/products/1')
      .end((err, res) => {
        expect(res.body.status).to.be.equal('success');
        expect(res.body.product).to.be.an('object');
        done(err);
      });
  });

    // not get product with wron Id
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

  // sales test
describe('Order Endpoint', () => {
    
  // post sale order test
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
  // get sale order with an id

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

  //not get sale with wrong Id 

  it('should not get sale order with wrong id', (done) => {
    request
      .get('/api/v1/sales/10000000')
      .end((err, res) => {
        expect(res.body.status).to.be.equal('fail');
        expect(res.body.message).to.be.equal('order not found');
        done(err);
      });
  });
  
  it('should get all sales order', (done) => {
    request
      .get('/api/v1/sales')
      .end((err, res) => {
        expect(res.body.status).to.equal('success');
        // expect(res.body.order).to.be.an('object');
        expect(res.body.sales).to.be.an('array');
        done(err);
      });
  });

});

  // describe('Users Endpoint', (done) => {
  //   //user signup test
  
  //   it('should sign up a user', (done) => {
      
  //     request
  //       .post('/api/v1/users/signup')
  //       .send({    
  //           username: 'oreoluwahelen',
  //           password: 'admin',
  //         })
  //         .end((err, res) => {
  //           expect(res.body.status).to.be.equal('success');
  //           expect(res.body.users).to.be.an('object');
  //           expect(res.body.message).to.equal('sign up successful');
  //           done(err);
  //         })
  //       });

  //       it('should sign in a user', (done) => {
  //         request
  //         .post('/api/v1/users/signup')
  //         .send({
  //           username: 'oreoluwahelen',
  //           password: 'admin',
  //      })
       
  //         .end((err, res) => {
  //           expect(res.body.status).to.be.equal('success');
  //           expect(res.body.users).to.be.an('object');
  //           expect(res.body.message).to.equal('sign in successful');
  //           done(err);


  //         })
  //       });


  //   })

    