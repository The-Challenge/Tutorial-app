const app = require('../../server.js')
const request = require('supertest')
const expect = require('chai').expect

describe('user', function () {
  // it('Should get user', function (done) {
  //   request(app)
  //     .get('/api/UserSignin')
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', /json/)
  //     .expect(200)
  //     .end(function (err, resp) {
  //       if (err) {
  //         throw new Error(err)
  //       }
  //       expect(resp.body).to.be.an('array')
  //       done()
  //     })
  // })

  it('Should get one user', function (done) {
    request(app)
      .post('/api/UserSignin')
      .send([{
        username: 'kamal',
        email: 'kam@907',
        password: '123'
      }])
      .set('Accept', 'application/json')
      .end(function (err, resp) {
        if (err) {
          console.log(err)
        }
        let user = resp.body
        request(app)
          .get('/api/UserSignin/' + user.username)
          .end(function (err, resp) {
            if (err) {
              throw new Error(err)
            }
            expect(resp.body.user.username).to.equal('Test User')
            done()
          })
      })
      done()
  })

  it('Should create one user', function (done) {
    request(app)
      .post('/api/UserSignup')
      .send([{
        username: 'kamal',
        email: 'kam@907',
        password: '123'
      }])
      .set('Accept', 'application/json')
      .end(function (err, resp) {
        if (err) {
          console.log(err)
        }
        let user = resp.body
        request(app)
          .get('/api/UserSignup/' + user.username)
          .end(function (err, resp) {
            if (err) {
              throw new Error(err)
            }
            expect(resp.body.user.username).to.equal('Test User')
            done()
          })
      })
      done()
  })
})
