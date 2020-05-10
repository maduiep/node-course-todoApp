//const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
 if (err) {
  return console.log('Unable to connect to MongoDB server')
 }
 console.log('Connected to MongoDB server')
 const db = client.db('TodoApp')

 // findOneandUpdate

 // db.collection('Todos').findOneAndUpdate({
 //  _id: new ObjectID("5eb7dce6dab36d39b42721c3")
 // }, {
 //  $set: {
 //   completed: false
 //  }
 // }, {
 //  returnOriginal: true
 // }).then((result) => {
 //  console.log(result)
 // })

 // update fro Users

 db.collection('Users').findOneAndUpdate({
  _id: new ObjectID("5eb68b3d40e67031c8231864")
 }, {
  $inc: {
   age: 1
  }
 }).then((result) => {
  console.log(result)
 })

 //client.close()
})

