var nock = require('nock');
var should = require('chai').should();

var gameLoader = require('../src/GameLoader');
var GameLoader = new gameLoader.GamesInfoLoader();

describe('Games tests', function(){
    describe('Load all games info', function(){
        it('should return json info about all games', function(done){
                nock('http://api.steampowered.com')
                .get('/ISteamApps/GetAppList/v2')
                .reply(200, 'Valid all games info.');

        GameLoader.LoadAllGamesInfo(function(body){
            body.should.equal('Valid all games info.');
            done();
        });
     });
 });

  describe('Load info about game with id = 570', function(){
     it('should return json data about game with id = 570', function(done){
         nock('http://store.steampowered.com')
             .get('/api/appdetails?appids=570')
             .reply(200, 'Valid game with id = 570 info');

         GameLoader.LoadGameInfoById(570, function(body){
             body.should.equal('Valid game with id = 570 info');
             done();
         });
     });
  });
});
