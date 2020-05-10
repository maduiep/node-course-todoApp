const MongoClient = require('mongodb').MongoClient
//const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
 if (err) {
  return console.log('Unable to connect to MongoDB server')
 }
 console.log('Connected to MongoDB server')
 const db = client.db('TodoApp')

 /*
 db.collection('Todos').insertOne({
  text: 'Eaten Sunday Rice Today',
  completed: true
 }, (err, result) => {
  if (err) {
   return console.log('Unable to insert Todo', err)
  }
  console.log(JSON.stringify(result.ops, undefined, 2))
 })

  Insert new doc into Users {name, age, location}
 
  
   db.collection('Users').insertOne({
    name: 'Emmanuel Madu',
    age: 27,
    location: 'Enugu, Nigeria.'
   }, (err, result) => {
    if (err) {
     return console.log('Unable to insert Todo', err)
    }
    console.log(JSON.stringify(result.ops, undefined, 2))
   })
  
 
  db.collection('Users').insertOne({
   name: 'Jasmine Egbuna',
   age: 24,
   location: 'Abuja, Nigeria.'
  }, (err, result) => {
   if (err) {
    return console.log('Unable to insert Todo', err)
   }
   console.log(JSON.stringify(result.ops, undefined, 2))
  })
 */

 client.close()
})