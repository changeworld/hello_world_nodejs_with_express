var request = require('supertest');
var app = require('../app');

describe('/', function() {
  it('home 画面が表示されること', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200, done);
  });
});