'use strict';

const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../server.js');

describe('Test Applicatif', function() {
  this.timeout(5000);

  before(function() {

  });

  after(function() {

  });

  // GET - Chemin invalide
  it('Doit retourner page non trouvée', function() {
    return chai.request(app)
      .get('/toto')
      .then(function(res) {
        throw new Error('Page Existe!');
      })
      .catch(function(err) {
        expect(err).to.have.status(404);
      });
  });
});
