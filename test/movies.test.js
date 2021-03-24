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

describe('Create Booking POST / SUCCESS CASE', () => {
    describe('SUCCESS CASE', () => {
    test('test should send message Success', (done) => {
        request(app)
            .post('/:id')
            // .set('access_token', access_token)
            // .send(product_data)
            .end((err, res)=> {
               
                const { body, status } = res
                id = res.body.id
                if (err) {
                  return done(err)
                }
                else {
                    expect(res.status).toBe(201)
                    expect(res.body).toHaveProperty('message')
                    done()
                }
            })
    })
  })

//   describe(' FAILED CASE: invalid sequelize validation error', () => {
//     test('test should send object with message error', (done) => {
//         request(app)
//             .post('/products')
//             .set('access_token', access_token)
//             .send({
//                 name: '',
//                 image_url: '',
//                 price: '',
//                 stock: ''
//             })
//             .end((err, res) => {
//                 if (err) throw err
//                 else {
//                     expect(res.status).toBe(400)
//                     expect(res.body).toHaveProperty('message')
//                     done()
//                 }
//             })
//     })
//   })

//   describe('FAILED CASE: no acces token', () => {
//     test('test should send object with message error', (done) => {
//         request(app)
//             .post('/products')
//             .set('access_token','' )
//             .send({
//               product_data
//             })
//             .end((err, res) => {
//                 if (err) throw err
//                 else {
//                     expect(res.status).toBe(401)
//                     expect(res.body).toHaveProperty('message','Login First')
//                     done()
//                 }
//             })
//     })
//   })

//   describe('FAILED CASE: invalid acces token/ not admin', () => {
//     test('test should send object with message error', (done) => {
//         request(app)
//             .post('/products')
//             .set('access_token',access_token_user )
//             .send({
//               product_data
//             })
//             .end((err, res) => {
//                 if (err) throw err
//                 else {
//                     expect(res.status).toBe(401)
//                     expect(res.body).toHaveProperty('message','You Dont Have Permission to Do this Action')
//                     done()
//                 }
//             })
//     })
//   })

//   describe('FAILED CASE: invalid input stock < 0', () => {
//     test('test should send object with message error', (done) => {
//         request(app)
//             .post('/products')
//             .set('access_token',access_token )
//             .send({
//               name: 'Product name',
//               image_url: 'link image',
//               price: 1000,
//               stock: -2
//             })
//             .end((err, res) => {
//                 if (err) throw err
//                 else {
//                     expect(res.status).toBe(400)
//                     expect(res.body).toHaveProperty('message','Stock / Price Must be greater than 0')
//                     done()
//                 }
//             })
//     })
//   })

//   describe('FAILED CASE: invalid input price < 0', () => {
//     test('test should send object with message error', (done) => {
//         request(app)
//             .post('/products')
//             .set('access_token',access_token )
//             .send({
//               name: 'Product name',
//               image_url: 'link image',
//               price: -1000,
//               stock: 2
//             })
//             .end((err, res) => {
//                 if (err) throw err
//                 else {
//                     expect(res.status).toBe(400)
//                     expect(res.body).toHaveProperty('message','Stock / Price Must be greater than 0')
//                     done()
//                 }
//             })
//     })
//   })


//   describe('FAILED CASE: invalid input price not an Integer', () => {
//     test('test should send object with message error', (done) => {
//         request(app)
//             .post('/products')
//             .set('access_token',access_token )
//             .send({
//               name: 'Product name',
//               image_url: 'link image',
//               price: 'lalala',
//               stock: 2
//             })
//             .end((err, res) => {
//                 if (err) throw err
//                 else {
//                     expect(res.status).toBe(400)
//                     expect(res.body).toHaveProperty('message','Stock / Price Must be a number')
//                     done()
//                 }
//             })
//     })
//   })
//   describe('FAILED CASE: invalid input stock not an Integer', () => {
//     test('test should send object with message error', (done) => {
//         request(app)
//             .post('/products')
//             .set('access_token',access_token )
//             .send({
//               name: 'Product name',
//               image_url: 'link image',
//               price: 30000,
//               stock:  'yeyeye'
//             })
//             .end((err, res) => {
//                 if (err) throw err
//                 else {
//                     expect(res.status).toBe(400)
//                     expect(res.body).toHaveProperty('message','Stock / Price Must be a number')
//                     done()
//                 }
//             })
//     })
//   })
// })

// describe('EDIT Product PUT/products/:id ', () => {
//   describe('SUCCESS CASE', () => {
//   test('test should send object with keys: name, image_url, price, stock', (done) => {
//       request(app)
//           .put(`/products/${id}`)
//           .set('access_token', access_token)
//           .send({
//             name: 'Product name Baru',
//             image_url: 'link image',
//             price: 2000,
//             stock:  2
//           })
//           .end((err, res)=> {
//               const { body, status } = res
//               // id = res.body.id
//               console.log(res.body)
//               if (err) {
//                 console.log(err)
//                 return done(err)
                
//               }
//               else {
                
//                   expect(res.status).toBe(200)
               
//                   // expect(body).toHaveProperty('name', 'Product name edited')
//                   // expect(body).toHaveProperty('image_url', 'link image')
//                   // expect(body).toHaveProperty('price', 1000)
//                   // expect(body).toHaveProperty('stock', 200)
//                   done()
//               }
//           })
//   })
// })

// describe(' FAILED CASE UPDATE : invalid sequelize validation error', () => {
//   test('test should send object with message error', (done) => {
//       request(app)
//           .put(`/products/${id}`)
//           .set('access_token', access_token)
//           .send({
//               name: '',
//               image_url: '',
//               price: '',
//               stock: ''
//           })
//           .end((err, res) => {
//               if (err) throw err
//               else {
//                   expect(res.status).toBe(400)
//                   expect(res.body).toHaveProperty('message')
//                   done()
//               }
//           })
//   })
// })

// describe('FAILED CASE UPDATE: no acces token', () => {
//   test('test should send object with message error', (done) => {
//       request(app)
//           .put(`/products/${id}`)
//           .set('access_token','' )
//           .send({
//             product_data
//           })
//           .end((err, res) => {
//               if (err) throw err
//               else {
//                   expect(res.status).toBe(401)
//                   expect(res.body).toHaveProperty('message','Login First')
//                   done()
//               }
//           })
//   })
// })

// describe('FAILED CASE UPDATE: invalid acces token/ not admin', () => {
//   test('test should send object with message error', (done) => {
//       request(app)
//           .put(`/products/${id}`)
//           .set('access_token',access_token_user )
//           .send({
//             product_data
//           })
//           .end((err, res) => {
//               if (err) throw err
//               else {
//                   expect(res.status).toBe(401)
//                   expect(res.body).toHaveProperty('message','You Dont Have Permission to Do this Action')
//                   done()
//               }
//           })
//   })
// })

// describe('FAILED CASE UPDATE : invalid input stock and price < 0', () => {
//   test('test should send object with message error', (done) => {
//       request(app)
//           .put(`/products/${id}`)
//           .set('access_token',access_token )
//           .send({
//             name: 'Product name',
//             image_url: 'link image',
//             price: -1000,
//             stock: -2
//           })
//           .end((err, res) => {
//               if (err) throw err
//               else {
//                   expect(res.status).toBe(400)
//                   expect(res.body).toHaveProperty('message')
//                   done()
//               }
//           })
//   })
// })


// describe('FAILED CASE UPDATE: invalid input stock and price not an Integer', () => {
//   test('test should send object with message error', (done) => {
//       request(app)
//           .put(`/products/${id}`)
//           .set('access_token',access_token )
//           .send({
//             name: 'Product name',
//             image_url: 'link image',
//             price: 'lalala',
//             stock: 'yeyeye'
//           })
//           .end((err, res) => {
//               if (err) throw err
//               else {
//                   expect(res.status).toBe(400)
//                   expect(res.body).toHaveProperty('message')
//                   done()
//               }
//           })
//   })
// })
// })

// describe('DELETE /products/:id', () => {
//   describe('SUCCESS CASE', () => {
//     test('test should send object with message ', done => {
//       request(app)
//         .delete(`/products/${id}`)
//         .set('access_token', access_token)
//         .end((err, res)=>{
//           const { body, status } = res
//           if(err){
//             return done(err)
//           }
//           expect(status).toBe(200)
//           expect(body).toHaveProperty('message', `Successfully deleted`)
//           done()
//         })    
//     })
//   })
//   describe('FAILED CASE: No Access Token', () => {
//     test('test should send object with message error ', done => {
//       request(app)
//         .delete(`/products/${id}`)
//         .set('access_token', '')
//         .end((err, res)=>{
//           const { body, status } = res
//           if(err){
//             return done(err)
//           }
//           expect(status).toBe(401)
//           expect(body).toHaveProperty('message','Login First')
//           done()
//         })    
//     })
//   })
//   describe('FAILED CASE: role Not Admin', () => {
//     test('test should send object with message error ', done => {
//       request(app)
//         .delete(`/products/${id}`)
//         .set('access_token', access_token_user)
//         .end((err, res)=>{
//           const { body, status } = res
//           if(err){
//             return done(err)
//           }
//           expect(status).toBe(401)
//           expect(body).toHaveProperty('message','You Dont Have Permission to Do this Action')
//           done()
//         })    
//     })
//   })  
})


