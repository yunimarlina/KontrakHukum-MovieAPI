const request = require('supertest');
const app = require('../app.js')
const { sequelize } = require("../models")
const { queryInterface } = sequelize
let id = ''


// beforeAll((done)=>{
//   // const admin = User.create({
//   //   email: 'admin2@mail.com',
//   //   password: 'aa',
//   //   role: 'admin'
//   // });
//   // id = admin.id;
//   request(app)
//     .post('/login')
//     .send({
//       email: `admin2@mail.com`,
//       password: `aa`
//     })
//     .end((err, res) =>{
//       if(err) return done(err)
//       const { body, status } = res
//       access_token = res.body.access_token
     
//     })

//     // const user = User.create({
//     //   email: 'user@mail.com',
//     //   password: 'aa',
//     //   role: 'bukanadmin'
//     // });
//   request(app)
//     .post('/login')
//     .send({
//       email: `user@mail.com`,
//       password: `aa`
//     })
//     .end((err, res) =>{
//       if(err) return done(err)
//       const { body, status } = res
//       access_token_user = res.body.access_token
//       done()
//     })

//     let product_data = {
//       name: 'Product name',
//       image_url: 'link image',
//       price: 1000,
//       stock: 20
//     }
//     return queryInterface.bulkInsert('Products', product_data, { returning: true })
// })

// afterAll((done) => {
//   queryInterface
//       .bulkDelete("Products")
//       .then(() => done())
//       .catch((err) => {
//           done();
//       });
// });

// let product_data = {
//   name: 'Product2 name',
//   image_url: 'link image',
//   price: 1000,
//   stock: 20
// }

describe('GET COMPARE ALL MOVIES / SUCCESS CASE', () => {
    describe('SUCCESS CASE', () => {
    test('test should send message Success', (done) => {
        request(app)
            .get('/movies')
            // .set('access_token', access_token)
            // .send(product_data)
            .end((err, res)=> {
               
                const { body, status } = res
                id = res.body.id
                if (err) {
                  return done(err)
                }
                else {
                    expect(res.status).toBe(200)
                    expect(res.body).toHaveProperty('list')
                    done()
                }
            })
    })
  })
})
describe('GET TOP A10 MOVIES / SUCCESS CASE', () => {
  describe('SUCCESS CASE', () => {
    test('test should send message Success', (done) => {
        request(app)
            .get('/top')
            .end((err, res)=> {
                const { body, status } = res
                if (err) {
                  return done(err)
                }
                else {
                    expect(res.status).toBe(200)
                    expect(res.body).toHaveProperty('top')
                    done()
                }
            })
    })
  })
})

describe('CREATE BOOKING MOVIES / SUCCESS CASE', () => {
  describe('SUCCESS CASE', () => {
    test('test should send message Success', (done) => {
        request(app)
            .post('/movies/'+ 1)
            .send({
                title: "Black Panther",
                name: "nama",
                amount: "2",
                bookingDate: new Date()
          
          })
            .end((err, res)=> {
                const { body, status } = res
                if (err) {
                  return done(err)
                }
                else {
                    expect(res.status).toBe(200)
                    expect(res.body).toHaveProperty('message')
                    done()
                }
            })
    })
  })
})
