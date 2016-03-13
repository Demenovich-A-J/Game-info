var request = require('supertest');
var app = require('../src/app');

describe('GET /AllGames', function(){
    it('should return json info about all games', function(done){
        request(app)
        .get('/AllGames')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

describe('GET /GameInfo', function(){
    it('should return json data about game with id = 570', function(done){
        request(app)
        .get('/GameInfo?appid=570')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});
