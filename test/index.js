import supertest from 'supertest';
import chai from 'chai';

import app from '../server/index';

const request = supertest(app);
const { expect } = chai;

describe('initial Testing', () => {
    it('should display welcome', (done) => {
    request
    .get('/')
    .end(( err, res) => {
        expect(res.body.message).to.equal('welcome to your store manager');
        done();
    });
    });
});