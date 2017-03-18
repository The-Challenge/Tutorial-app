const app = require('../../server.js')
const request = require('supertest')
const expect = require('chai').expect

describe('tutorials', function () {
  it('Should get tutorials', function (done) {
    request(app)
      .get('/api/tutorials')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, resp) {
        if (err) {
          throw new Error(err)
        }
        expect(resp.body).to.be.an('array')
        done()
      })
  })

// {
// 	"tutorialname" : "java",
// 	"description" : "introdition",
// 	"ownername" : "kamal",
//     "duration" : "7hours",
//     "users" :"1000000",
//     "image" : "" 
// }

  it('Should get one tutorial', function (done) {
    request(app)
      .post('/api/tutorial')
      .send([{
        tutorialname : "java",
        description : "introdition",
        ownername : "kamal",
        duration : "7hours",
        users :"1000000",
        image : "" 
}])
      .set('Accept', 'application/json')
      .end(function (err, resp) {
        if (err) {
          console.log(err)
        }
        let tutorial = resp.body
        request(app)
          .get('/api/tutorials/' + tutorial.tutorialname)
          .end(function (err, resp) {
            if (err) {
              throw new Error(err)
            }
            expect(resp.body.tutorial.username).to.equal('Test tutorial')
            done()
          })
      })
      done()
  })

})
