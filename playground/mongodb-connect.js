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
  text: 'Eaten Sunday Today',
  completed: true
 }, (err, result) => {
  if (err) {
   return console.log('Unable to insert Todo', err)
  }
  console.log(JSON.stringify(result.ops, undefined, 2))
 })
  */

 //Insert new doc into Users {name, age, location}


 db.collection('Users').insertOne({
  name: 'Paschal Nwankwo',
  age: 27,
  location: 'Abuja, Nigeria.'
 }, (err, result) => {
  if (err) {
   return console.log('Unable to insert Todo', err)
  }
  console.log(JSON.stringify(result.ops, undefined, 2))
 })


 db.collection('Users').insertOne({
  name: 'Justa Nwonu',
  age: 24,
  location: 'Enugu, Nigeria.'
 }, (err, result) => {
  if (err) {
   return console.log('Unable to insert Todo', err)
  }
  console.log(JSON.stringify(result.ops, undefined, 2))
 })


 client.close()
})