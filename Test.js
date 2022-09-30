const supertest = require('supertest');
var should = require("should");
var server = supertest.agent("http://localhost:8000");

describe('Testing on GET News endpoint', function () {
    it('respond with valid HTTP status code and expected article length', function (done) {
      const response = server.get('/News?maxArticle=5').expect(200)
      .end(function(err,res){
        res.body.articles.length.should.equal(5);
        done();
      });
    });

    it('respond with valid HTTP status code and available keywords in title', function (done) {
        const response = server.get('/News?keyword=goods&in=title').expect(200)
        .end(function(err,res){
            res.body.articles[0]["title"].toLowerCase().includes("good").should.equal(true);
          done();
        });
  
      });
});

